from typing import Any

from fastapi import APIRouter, Depends
from app.schemas.dashboard import Dashboard as DashboardSchema
from starlette.responses import Response
from sqlalchemy.ext.asyncio.session import AsyncSession
from app.deps.db import get_async_session
from app.deps.users import current_user
from app.models.user import User
from sqlalchemy import func, select, extract
from app.models.todo import Todo

router = APIRouter(prefix="/dashboard")


@router.get("", response_model=DashboardSchema)
async def get_user_dashboard_data(
    response: Response,
    session: AsyncSession = Depends(get_async_session),
    user: User = Depends(current_user),
) -> Any:
    total_todos = await session.scalar(
        select(func.count(Todo.id)).where(Todo.user_id == user.id)
    )
    completed_todos = await session.scalar(
        select(func.count(Todo.id))
        .where(Todo.user_id == user.id)
        .where(Todo.completedAt.isnot(None))
    )
    incompleted_todos = await session.scalar(
        select(func.count(Todo.id))
        .where(Todo.user_id == user.id)
        .where(Todo.completedAt.is_(None))
    )
    average_duration_seconds = await session.scalar(
        select(func.avg(extract('epoch', Todo.completedAt - Todo.created)))
        .where(Todo.user_id == user.id)
        .where(Todo.completedAt.isnot(None))
    )
    average_duration = int(average_duration_seconds)
    days, seconds = divmod(average_duration, 86400)
    hours, seconds = divmod(seconds, 3600)
    minutes, seconds = divmod(seconds, 60)
    average_duration_formatted = ""
    if days > 0:
        average_duration_formatted += f"{days} days, "
    if hours > 0:
        average_duration_formatted += f"{hours} hours, "
    if minutes > 0:
        average_duration_formatted += f"{minutes} minutes, "
    if seconds > 0:
        average_duration_formatted += f"{seconds} seconds"

    stats = DashboardSchema(
        total_todos=total_todos,
        completed_todos=completed_todos,
        incompleted_todos=incompleted_todos,
        average_duration_per_todo=average_duration_formatted
    )
    return stats
