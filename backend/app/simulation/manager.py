import threading
import time
from app.simulation.state import SimulationState, SimulationStatus, UserState, BearState
from app.simulation.logic import update_state


class SimulationManager:
    def __init__(self):
        self.state = SimulationState(
            user = UserState(
                speed = 0.0,
                running_distance = 0.0
            ), 
            bear = BearState(
                speed = 17.0,
            ),
            between_distance = 0.0,
            total_time = 0.0,
            status=SimulationStatus.READY
        )
        self._running = False

    def start(self, time_50m, distance):
        self.state.user.speed = 50.0 / time_50m
        self.state.between_distance = distance
        self.state.total_time = 0.0
        if self._running:
            return
        self.state.status = SimulationStatus.RUNNING
        self._running = True
        threading.Thread(target=self._loop, daemon=True).start()

    def pause(self):
        self.state.status = SimulationStatus.PAUSED

    def reset(self):
        self.__init__()

    def _loop(self):
        while self._running:
            if self.state.status == SimulationStatus.RUNNING:
                update_state(self.state, dt=0.01)
                if self.state.status == SimulationStatus.FINISHED:
                    self._running = False
            time.sleep(0.01)

manager = SimulationManager()