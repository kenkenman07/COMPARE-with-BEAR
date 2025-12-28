from fastapi import APIRouter
from app.simulation.manager import manager
from app.simulation.state import SimulationState

router = APIRouter(prefix="/simulation", tags=["simulation"])


@router.get("/start")
def start(human_max_speed: float, distance: float) -> SimulationState:
    manager.start(human_max_speed, distance)
    return manager.state


@router.get("/pause")
def pause() -> SimulationState:
    manager.pause()
    return manager.state


@router.get("/reset")
def reset() -> SimulationState:
    manager.reset()
    return manager.state


@router.get("/state")
def get_state() -> SimulationState:
    return manager.state
