from pydantic import BaseModel
from datetime import datetime
from typing import Optional
from uuid import UUID


class TodoCreate(BaseModel):
    name: str
    note: str


class TodoUpdate(TodoCreate):
    marked: bool


class Todo(TodoCreate):
    id: int
    marked: bool
    completedAt: Optional[datetime]
    user_id: UUID

    class Config:
        orm_mode = True
