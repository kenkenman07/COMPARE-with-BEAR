import asyncio
from fastapi import APIRouter, WebSocket, WebSocketDisconnect
from app.simulation.manager import manager
from app.simulation.state import SimulationStatus

router = APIRouter()
# ユーザーが走った距離とユーザが走った時間を返す．
@router.websocket("/simulation")
async def start(websocket: WebSocket):
    await websocket.accept()

    params = websocket.query_params
    time_50m = float(params["time_50m"])
    distance = float(params["distance"])

    manager.start(time_50m, distance)
    
    try:
        while True:
            await asyncio.sleep(0.1) 
            # 終了判定
            if manager.state.status == SimulationStatus.FINISHED:
                # 最終結果を送信する
                await websocket.send_json({
                    "type": "result",
                    "user_running_distance": round(manager.state.user.running_distance, 1),
                    "total_time": round(manager.state.total_time, 1)
                })
                break
    except WebSocketDisconnect:
        print("クライアント側からWebSocket通信を切断されました．")
          
    