from fastapi import APIRouter

from app.api import items, users, utils, todos, dashboard, home

api_router = APIRouter()

api_router.include_router(utils.router, tags=["utils"])
api_router.include_router(users.router, tags=["users"])
api_router.include_router(items.router, tags=["items"])
api_router.include_router(todos.router, tags=["todos"])
api_router.include_router(dashboard.router, tags=["dashboard"])
api_router.include_router(home.router, tags=["home"])
