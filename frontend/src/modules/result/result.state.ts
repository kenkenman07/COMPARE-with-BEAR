import { atom, useAtom } from "jotai";
import { type Result } from "./result.entity";

const resultAtom = atom<Result | null>();

export const useResultStore = () => {
    const [result, setResult] = useAtom(resultAtom);

    return {
        result,
        setResult
    };
};