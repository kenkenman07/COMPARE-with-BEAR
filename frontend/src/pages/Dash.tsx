import { useEffect } from "react";
import { useResult } from "../hooks/useResult";
import { useDataStore } from "../modules/data/data.state";
import { useResultStore } from "../modules/result/result.state";
import { ResultModal } from "../components/ResultModal";
import { ChaseProgress } from "../components/ProgressBar";

function Dash() {
    const { connect } = useResult();
    const dataStore = useDataStore();
    const resultSore = useResultStore();
    const { data } = dataStore;
    const { result } = useResultStore();

    const time = data!.time;
    const distance = data!.distance;

    useEffect(() => {
        connect(time, distance);

        return(() => {resultSore.setIsClosed(false);})
    }, []);


    return (
        <div>

            {resultSore.isClosed
                ?
                <>
                    <video
                        src="/video/bear.mp4"
                        autoPlay
                        muted
                        className="w-full"
                    />
                    <ResultModal />
                </>
                :
                <>
                    <audio src="/sounds/heart_mid.mp3" loop autoPlay/>
                    <div className="relative">
                        <video
                            src="/video/run.mp4"
                            autoPlay
                            loop
                            muted
                            className="w-full"
                        />
                        {resultSore.result && (
                            <>
                                <div className="absolute top-10 left-10 border border-white bg-white/60 rounded-lg text-black w-76">
                                    
                                    <span className="text-3xl">走行時間</span>
                                    <div className="flex items-baseline">
                                        <span className="w-16 text-7xl text-right">
                                            {result!.time}
                                        </span>
                                        <span className="ml-50 text-4xl">秒</span>
                                    </div>

                                    <span className="text-3xl">走行距離</span>
                                    <div className="flex items-baseline">
                                        <span className="w-16 text-7xl text-right">
                                            {result!.user_distance}
                                        </span>
                                        <span className="ml-50 text-4xl">m</span>
                                    </div>
                                                           
                                    
                                </div>

                                <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                                    <ChaseProgress progress={result!.progress_rate} />
                                     <div className="absolute top-10 right-30">
                                        {result!.between_distance} m
                                    </div>
                                </div>

                            </>
                        )}
                    </div>
                </>
            }

        </div>
    )
}

export default Dash