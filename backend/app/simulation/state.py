from enum import Enum
from pydantic import BaseModel

class HumanState(BaseModel):
    speed: float
    max_speed: float
    stamina: float

class BearState(BaseModel):
    speed: float
    stamina: float

class SimulationStatus(str, Enum):
    READY = "ready"
    RUNNING = "running"
    PAUSED = "paused"
    RESTART = "restart"
    FINISHED = "finished"

class SimulationState(BaseModel):
    human: HumanState
    bear: BearState
    distance: float         # m
    total_time: float     # s
    status: SimulationStatus
