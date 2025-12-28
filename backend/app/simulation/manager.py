import threading
import time
from app.simulation.state import SimulationState, SimulationStatus, HumanState, BearState
from app.simulation.logic import update_state


class SimulationManager:
    def __init__(self):
        self.state = SimulationState(
            human = HumanState(
                speed = 0.0,
                max_speed=0.0,
                stamina = 1.0
            ), 
            bear = BearState(
                speed = 17.0,
                stamina = 1.0
            ),
            distance = 0.0,
            total_time = 0.0,
            status=SimulationStatus.READY
        )
        self._running = False

    def start(self, human_max_speed, distance):
        self.state.human.max_speed = human_max_speed
        self.state.distance = distance
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
                update_state(self.state, dt=0.1)
                if self.state.status == SimulationStatus.FINISHED:
                    self._running = False
            time.sleep(0.1)

manager = SimulationManager()