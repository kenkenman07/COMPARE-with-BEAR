from app.simulation.state import SimulationState, SimulationStatus, UserState, BearState

INIT: float = 0.0
INIT_STEP: int = 0
ADD_STEP = 1
DELTA_T: float = 0.1
DISTANCE_50: float = 50.0
BEAR_SPEED: float = 17.0
WORLD_RECODE_50M: float = 5.47

def update_state(state: SimulationState):
    if state.status != SimulationStatus.RUNNING:
        return state

    state.step += ADD_STEP
    time = state.step * state.dt

    relative_speed = state.bear.speed - state.user.speed

    state.total_time = time
    state.user.running_distance = state.user.speed * time
    state.between_distance = max(
        INIT,
        state.initial_between_distance - relative_speed * time
    )

    if state.between_distance == INIT:
        state.status = SimulationStatus.FINISHED
          
def create_initial_state(time_50m: float, distance: float) -> SimulationState:
    user_speed: float = DISTANCE_50 / time_50m    
    relative_speed: float = BEAR_SPEED - user_speed
    
    if relative_speed <= 0:
        raise ValueError("人間の方がクマよりも早くなるよ？")
    elif time_50m < WORLD_RECODE_50M:
        raise ValueError("あんた世界記録超えてんじゃん！！") 
    return SimulationState(
        status = SimulationStatus.RUNNING,
        step = INIT_STEP,
        dt = DELTA_T,
        initial_between_distance = distance,
        between_distance = INIT, 
        total_time = INIT,
        user = UserState(
            speed = user_speed,
            running_distance = INIT
        ),
        bear = BearState(
            speed = BEAR_SPEED
        ),
        theoretical_total_time = round(distance / relative_speed, 1)
    )
  
    