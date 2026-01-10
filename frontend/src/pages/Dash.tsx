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

    const time = data!.time;
    const distance = data!.distance;

    useEffect(() => {
        connect(time, distance);

    }, []);


    return (
        <div>
            { resultSore.result 
                ? 
                <>
                <img 
                    src="/images/bear.png" 
                    alt="" 
                    className="w-full"
                    />
                <ResultModal />
                </>
                :
                <img 
                    src="/images/run.png" 
                    alt="" 
                    className="w-full animate-run"
                />
            }

        </div>
    )
}

export default Dash