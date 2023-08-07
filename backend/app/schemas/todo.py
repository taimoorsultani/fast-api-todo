from pydantic import BaseModel


class TodoCreate(BaseModel):
    name: str
    note: str


class TodoUpdate(TodoCreate):
    marked: bool


class Todo(TodoCreate):
    id: int
    marked: bool

    class Config:
        orm_mode = True
