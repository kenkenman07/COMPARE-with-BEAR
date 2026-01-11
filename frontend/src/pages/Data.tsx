import { useState } from "react"
import { useDataStore } from "../modules/data/data.state";
import { Navigate } from "react-router-dom";

function Data() {
    const [time, setTime] = useState("");
    const [distance, setDistance] = useState("");
    const dataStore = useDataStore();

    const submitData = () => {
        dataStore.setData({ time, distance });
    }

    if (dataStore.data != null) return <Navigate replace to="/" />;

    return (
        <div className="">
            {/* <img src="/images/forest.png" className="w-full"/> */}
            <div
                className="relative min-h-screen bg-cover bg-center"
                style={{ backgroundImage: "url(/images/forest.png)" }}
            ></div>


            <div className="absolute inset-0 flex flex-col items-center top-2.5">


                <img src="/images/title.png" className="w-1/2 h-2/5 " />


                <div className="bg-white/60 w-1/3 mt-20  mx-auto font-bold border p-6 flex flex-col items-center shadow rounded-lg">

                    <div className="space-y-6 py-7">
                        <label>
                            50m走のタイム
                        </label>
                        <input
                            id="time"
                            placeholder="秒"
                            name="time"
                            onChange={(e) => setTime(e.target.value = e.target.value.replace(/[^0-9.]/g, ''))}
                            inputMode="numeric"
                            pattern="[0-9.]*"
                            className="appearance-none block w-full px-3 py-2 border border-black-300 rounded-md shadow-sm placeholder-black-400 focus:outline-none focus:ring--500 focus:border--500 sm:text-sm"
                        />
                        <label>
                            クマとの初期距離
                        </label>
                        <input
                            id="distance"
                            placeholder="m"
                            name="time"
                            onChange={(e) => setDistance(e.target.value = e.target.value.replace(/[^0-9]/g, ''))}
                            inputMode="numeric"
                            pattern="[0-9]*"
                            className="appearance-none block w-full px-3 py-2 border border-black-300 rounded-md shadow-sm placeholder-black-400 focus:outline-none focus:ring--500 focus:border--500 sm:text-sm"
                        />
                    </div>
                    <div>
                        <button
                            disabled={time === '' || distance === ''}
                            onClick={submitData}
                            className="bg-transparent
                                text-amber-100
                                border-[3px] border-amber-600
                                px-9 py-3.5
                                text-[18px]
                                rounded-lg
                                cursor-pointer
                                font-bold
                                uppercase
                                tracking-[3px]
                                transition-all duration-300 ease-in-out
                                shadow-[0_0_10px_rgba(251,191,36,0.8),0_0_20px_rgba(251,191,36,0.8),inset_0_0_10px_rgba(251,191,36,0.3)]
                                hover:bg-amber-600
                                hover:text-white
                                hover:shadow-[0_0_20px_rgba(251,191,36,1),0_0_40px_rgba(251,191,36,1),0_0_60px_rgba(251,191,36,1),inset_0_0_20px_rgba(255,255,255,0.3)]
                                hover:[text-shadow:0_0_10px_#fff]
                                active:scale-95
                                disabled:opacity-70
                                disabled:cursor-not-allowed
                                disabled:hover:bg-transparent
                                disabled:hover:text-amber-600
                                disabled:hover:shadow-none"
                        >
                            シミュレーション開始
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Data