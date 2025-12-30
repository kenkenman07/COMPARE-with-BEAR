import { atom, useAtom } from "jotai";

const dataAtom = atom<boolean>();

export const useDataStore = () => {
    const [data, setData] = useAtom(dataAtom)

    return {
        data,
        setData,
    }
}