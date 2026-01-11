import { atom, useAtom } from "jotai";
import { type Data } from "./data.entity";

const dataAtom = atom<Data | null>();

export const useDataStore = () => {
    const [data, setData] = useAtom(dataAtom)

    return {
        data,
        setData,
    }
}