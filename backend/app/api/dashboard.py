from typing import Any, List

from fastapi import APIRouter, Depends
from app.schemas.dashboard import Dashboard as DashboardSchema
from starlette.responses import Response
from sqlalchemy.ext.asyncio.session import AsyncSession
from app.deps.db import get_async_session
from app.deps.users import current_user
from app.models.user import User

router = APIRouter(prefix="/dashboard")


@router.get("/", response_model=DashboardSchema)
async def get_user_dashboard_data(
    response: Response,
    session: AsyncSession = Depends(get_async_session),
    user: User = Depends(current_user),
) -> Any:
    total_items = 0
    completed_items = 0
    incompleted_items = 0
    average_duration = 0

    stats = DashboardSchema(
        total_items=total_items,
        completed_items=completed_items,
        incompleted_items=incompleted_items,
        average_duration=average_duration
    )
    return stats
