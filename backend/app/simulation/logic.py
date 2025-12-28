# クマが追う計算ロジック

from app.simulation.state import SimulationState, SimulationStatus

def update_human_physical(state: SimulationState, dt: float):
    FATIGUE_RATE = 0.0     # 1秒あたりの消耗
    ALPHA = 1.0              # 疲労の効き具合
    if 10.0 <= state.total_time < 20:
        FATIGUE_RATE = 0.015
        ALPHA = 0.8
    elif 20 <= state.total_time < 30:
        FATIGUE_RATE = 0.030
        ALPHA = 0.6
    elif 30 <= state.total_time:
        FATIGUE_RATE = 0.1
        ALPHA = 0.2
    # 体力消耗
    state.human.stamina = max(0.0, state.human.stamina - FATIGUE_RATE * dt)

    # 実効速度
    state.human.speed = state.human.max_speed * (state.human.stamina ** ALPHA)

def update_bear_state():
    pass
def update_state(state: SimulationState, dt: float) -> SimulationState:
    if state.status != SimulationStatus.RUNNING:
        return state
    update_human_physical(state, dt)
    relative_speed = state.bear.speed - state.human.speed
    state.distance -= relative_speed * dt
    state.total_time += dt

    if state.distance <= 0:
        state.distance = 0
        state.status = SimulationStatus.FINISHED

    return state
