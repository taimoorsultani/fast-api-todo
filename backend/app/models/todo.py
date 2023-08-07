from datetime import datetime
from typing import TYPE_CHECKING, Optional
from uuid import UUID

from fastapi_users_db_sqlalchemy import GUID
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.sql.functions import func
from sqlalchemy.sql.schema import ForeignKey
from sqlalchemy.sql.sqltypes import Boolean, DateTime

from app.db import Base

if TYPE_CHECKING:
    from app.models.user import User


class Todo(Base):
    __tablename__ = "todos"

    id: Mapped[int] = mapped_column(primary_key=True)
    user_id: Mapped[UUID] = mapped_column(GUID, ForeignKey("users.id"))
    user: Mapped["User"] = relationship(back_populates="todos")
    created: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now()
    )
    updated: Mapped[datetime] = mapped_column(
        DateTime(timezone=True), server_default=func.now(), onupdate=func.now()
    )
    name: Mapped[str | None]
    note: Mapped[str | None]
    marked: Mapped[bool] = mapped_column(Boolean, default=False)
    completedAt: Mapped[Optional[datetime] | None] = mapped_column(
        DateTime(timezone=True), nullable=True
    )
