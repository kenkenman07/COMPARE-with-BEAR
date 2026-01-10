import useWebSocket, { ReadyState }  from 'react-use-websocket';
import { useResultStore } from '../modules/result/result.state';
import type { Result } from '../modules/result/result.entity';
import { useEffect, useState } from 'react';

export const useResult = () => {
    const [url, setUrl] = useState<string | null>(null);
    const resultStore = useResultStore();

    const { lastJsonMessage, readyState } = useWebSocket<Result>(url);

    useEffect(() => {
        if(!lastJsonMessage) return;
        resultStore.setResult(lastJsonMessage);

        if(readyState == ReadyState.CLOSED) resultStore.setIsClosed(true);
    }, [lastJsonMessage, readyState]);


    const connect = (time: string, distance: string) => {
        setUrl(`ws://localhost:8000/simulation?time_50m=${time}&distance=${distance}`);
    };

    return { connect };
}
