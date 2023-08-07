from pydantic import BaseModel
from typing import Optional


class Dashboard(BaseModel):
    total_todos: int
    completed_todos: int
    incompleted_todos: int
    average_duration_per_todo: str
    average_total_todos_per_user: Optional[int]
    average_completed_todos_per_user: Optional[int]
    average_incompleted_todos_per_user: Optional[int]
