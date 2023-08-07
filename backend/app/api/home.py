from typing import Any

from fastapi import APIRouter, Depends
from app.schemas.dashboard import Dashboard as DashboardSchema
from sqlalchemy.ext.asyncio.session import AsyncSession
from app.deps.db import get_async_session
from app.models.user import User
from sqlalchemy import func, select, extract
from app.models.todo import Todo

router = APIRouter(prefix="/home")


@router.get("", response_model=DashboardSchema)
async def get_home_stats(
    session: AsyncSession = Depends(get_async_session),
) -> Any:
    total_todos = await session.scalar(select(func.count(Todo.id)))
    completed_todos = await session.scalar(select(func.count(Todo.id)).where(Todo.marked == True))
    incompleted_todos = await session.scalar(select(func.count(Todo.id)).where(Todo.marked == False))

    average_duration_seconds = await session.scalar(
        select(func.avg(extract('epoch', Todo.completedAt - Todo.created)))
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

    average_total_todos_per_user = await session.scalar(
        select(func.avg(select(func.count(User.id))))
    )
    average_completed_todos_per_user = await session.scalar(
        select(func.avg(select(func.count(Todo.id)).where(Todo.marked == True)))
    )
    average_incompleted_todos_per_user = await session.scalar(
        select(func.avg(select(func.count(Todo.id)).where(Todo.marked == False)))
    )

    stats = DashboardSchema(
        total_todos=total_todos,
        completed_todos=completed_todos,
        incompleted_todos=incompleted_todos,
        average_duration_per_todo=average_duration_formatted,
        average_total_todos_per_user=average_total_todos_per_user,
        average_completed_todos_per_user=average_completed_todos_per_user,
        average_incompleted_todos_per_user=average_incompleted_todos_per_user
    )
    return stats
