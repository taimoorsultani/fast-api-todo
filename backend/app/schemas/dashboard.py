from pydantic import BaseModel


class Dashboard(BaseModel):
    total_items: int
    completed_items: int
    incompleted_items: int
    average_duration: float
