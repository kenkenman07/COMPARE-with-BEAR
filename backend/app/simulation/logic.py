# クマが追う計算ロジック
from app.simulation.state import SimulationState, SimulationStatus

def update_state(state: SimulationState, dt: float) -> SimulationState:
    if state.status != SimulationStatus.RUNNING:
        return state
    relative_speed = state.bear.speed - state.user.speed
    state.between_distance -= relative_speed * dt
    state.user.running_distance += state.user.speed * dt
    state.total_time += dt

    if state.between_distance <= 0:
        state.between_distance = 0
        state.status = SimulationStatus.FINISHED
    return state
