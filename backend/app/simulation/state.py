from enum import Enum
from pydantic import BaseModel

class UserState(BaseModel):
    speed: float
    running_distance: float
    
class BearState(BaseModel):
    speed: float
    
class SimulationStatus(str, Enum):
    READY = "ready"
    RUNNING = "running"
    PAUSED = "paused"
    FINISHED = "finished"

class SimulationState(BaseModel):
    user: UserState
    bear: BearState
    between_distance: float  # m
    total_time: float     # s
    status: SimulationStatus
