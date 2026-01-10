import asyncio
from fastapi import APIRouter, HTTPException, WebSocket, WebSocketDisconnect
from app.simulation.state import SimulationStatus
from app.simulation.logic import update_state, create_initial_state

router = APIRouter()
# ユーザーが走った距離とユーザが走った時間を返す．
@router.websocket("/simulation")
async def calc_websocket(websocket: WebSocket):
    await websocket.accept()

    try:
        params = websocket.query_params
        time_50m = float(params["time_50m"])
        distance = float(params["distance"])
        
        try: 
            state = create_initial_state(time_50m, distance)
        except ValueError as e:
            await websocket.send_json({
                "type": "error",
                "message": str(e)
            })
            await websocket.close()
            return
            
        while state.status == SimulationStatus.RUNNING:
            # 状態を更新する
            update_state(state)

            tmp_total_time = round(state.total_time, 1)
            if tmp_total_time == state.theoretical_total_time:
                break
            await websocket.send_json({
                "type": "process",
                "time": round(state.total_time, 1),
                "user_distance": round(state.user.running_distance, 2),
                "between_distance": int(state.between_distance),
                "progress_rate": int(((state.initial_between_distance - state.between_distance) / state.initial_between_distance) * 100),
            })
            await asyncio.sleep(state.dt)

        # simulationが終了すると最終結果を返す
        await websocket.send_json({
            "type": "result",
            "time": round(state.total_time, 1),
            "user_distance": round(state.user.running_distance, 2),
            "between_distance": int(state.between_distance),
            "progress_rate": int(((state.initial_between_distance - state.between_distance) / state.initial_between_distance) * 100),
        })

    except WebSocketDisconnect:
        # クライアント切断時は自然終了
        pass
    
# 理論値を求めるAPI
@router.get("/fastapi/simulation")
async def calc( time_50m: float, distance: float ):
    if time_50m < 5.47:
        raise HTTPException(
            status_code = 400,
            detail="すごい！！ 世界記録超えてるじゃん 嘘つきめ"
        )
    human_speed = 50 / time_50m
    bear_speed = 17.0
    # bear_speed = round(random.uniform(11, 17), 1)
    relative_speed = bear_speed - human_speed

    total_time = round(distance / relative_speed, 1)
    user_running_distance = human_speed * total_time
    print(bear_speed)
    return {
        "user_running_distance": user_running_distance, 
        "user_running_time"    : total_time
    }
          
    