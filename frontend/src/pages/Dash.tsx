import { useEffect } from "react";
import { useResult } from "../hooks/useResult";
import { useDataStore } from "../modules/data/data.state";
import { useResultStore } from "../modules/result/result.state";
import { ResultModal } from "../components/ResultModal";

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
                    <div className="relative">
                    <video 
                        src="/video/run.mp4" 
                        autoPlay
                        loop
                        muted
                        className="w-full"
                    />
                    {resultSore.result && 
                        <div className="text-white text-7xl">
                        <div className="absolute top-10 left-30">{result!.time}秒</div>
                        <div className="absolute top-10 right-30">{result!.user_distance}m</div>
                        </div>
                    }
                    </div>    
                </>
            }

        </div>
    )
}

export default Dash