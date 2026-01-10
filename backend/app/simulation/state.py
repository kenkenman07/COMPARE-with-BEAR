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
    # 状態
    status: SimulationStatus
    # 時間管理
    step: int
    dt  : float
    # 初期条件
    initial_between_distance: float
    # 動的状態
    between_distance: float   # m
    total_time: float     # s
    # エンティティ
    user: UserState
    bear: BearState
    # total_timeの理論値
    theoretical_total_time: float
