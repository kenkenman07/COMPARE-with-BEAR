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

    if(dataStore.data != null) return <Navigate replace to="/" />;

    return (
        <div className="relative">
            <img src="/images/forest.png" className="w-full"/>

            <div className="absolute inset-0">

                
                <div className="border border-amber-400 rounded-lg p-6 mt-5 bg-amber-900/60 shadow-sm w-3/4 mx-auto">
                    <h1 className="text-center text-3xl text-amber-600 font-extrabold tracking-wide">COMPARE WITH 'BEAR'</h1>
                </div>
            
            <div className="bg-white/60 w-1/2 mt-20 mx-auto font-bold border p-6 flex flex-col items-center shadow rounded-lg">

            <h2 className="text-4xl mt-6">データを送信する</h2>
            <div className="space-y-6 py-10">
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
                    くまとの距離
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
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring--500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                        シミュレーションを開始する
                    </button>
                </div>
            
            </div>
                            </div>
        </div>
    )
}

export default Data