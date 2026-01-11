import { atom, useAtom } from "jotai";
import { type Result } from "./result.entity";

const resultAtom = atom<Result | null>();
const stateAtom = atom<boolean>(false);

export const useResultStore = () => {
    const [result, setResult] = useAtom(resultAtom);
    const [isClosed, setIsClosed] = useAtom(stateAtom);

    console.log(result);

    return {
        result,
        setResult,
        isClosed,
        setIsClosed
    };
};