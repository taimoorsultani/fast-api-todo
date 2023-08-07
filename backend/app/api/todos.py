from typing import Any, List, Optional

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio.session import AsyncSession
from starlette.responses import Response
from datetime import datetime
from app.deps.db import get_async_session
from app.deps.request_params import parse_react_admin_params
from app.deps.users import current_user
from app.models.todo import Todo
from app.models.user import User
from app.schemas.todo import Todo as TodoSchema
from app.schemas.todo import TodoCreate, TodoUpdate
from app.schemas.request_params import RequestParams

router = APIRouter(prefix="/todos")


@router.get("", response_model=List[TodoSchema])
async def get_todos(
    response: Response,
    session: AsyncSession = Depends(get_async_session),
    request_params: RequestParams = Depends(parse_react_admin_params(Todo)),
    user: User = Depends(current_user),
) -> Any:
    total = await session.scalar(
        select(func.count(Todo.id).filter(Todo.user_id == user.id))
    )
    todos = (
        (
            await session.execute(
                select(Todo)
                .offset(request_params.skip)
                .limit(request_params.limit)
                .order_by(request_params.order_by)
                .filter(Todo.user_id == user.id)
            )
        )
        .scalars()
        .all()
    )
    response.headers[
        "Content-Range"
    ] = f"{request_params.skip}-{request_params.skip + len(todos)}/{total}"
    return todos


@router.post("", response_model=TodoSchema, status_code=201)
async def create_todo(
    todo_in: TodoCreate,
    session: AsyncSession = Depends(get_async_session),
    user: User = Depends(current_user),
) -> Any:
    todo = Todo(**todo_in.dict())
    todo.user_id = user.id
    session.add(todo)
    await session.commit()
    return todo


@router.get("/{todo_id}", response_model=TodoSchema)
async def get_todo(
    todo_id: int,
    session: AsyncSession = Depends(get_async_session),
    user: User = Depends(current_user),
) -> Any:
    todo: Optional[Todo] = await session.get(Todo, todo_id)
    if not todo or todo.user_id != user.id:
        raise HTTPException(404)
    return todo


@router.put("/{todo_id}", response_model=TodoSchema)
async def update_todo(
    todo_id: int,
    todo_in: TodoUpdate,
    session: AsyncSession = Depends(get_async_session),
    user: User = Depends(current_user),
) -> Any:
    todo: Optional[Todo] = await session.get(Todo, todo_id)
    if not todo or todo.user_id != user.id:
        raise HTTPException(404)
    update_data = todo_in.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(todo, field, value)
    if todo.marked == True:
        todo.completedAt = datetime.now()
    else:
        todo.completedAt = None
    session.add(todo)
    await session.commit()
    return todo


@router.delete("/{todo_id}")
async def delete_todo(
    todo_id: int,
    session: AsyncSession = Depends(get_async_session),
    user: User = Depends(current_user),
) -> Any:
    todo: Optional[Todo] = await session.get(Todo, todo_id)
    if not todo or todo.user_id != user.id:
        raise HTTPException(404)
    await session.delete(todo)
    await session.commit()
    return {"success": True}
