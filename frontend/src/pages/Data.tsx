import { useState } from "react"

function Data() {
    const [time, setTime] = useState("")
    const [distance, setDistance] = useState("");

    const submitData = () => {
        console.log(time)
        console.log(distance)
    }

    return (
        <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center">

            <h2 className="text-4xl">データを送信する</h2>
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
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring--500 focus:border--500 sm:text-sm"
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
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring--500 focus:border--500 sm:text-sm"
                    />
            </div>
                <div>
                    <button
                        disabled={time === '' || distance === ''}
                        onClick={submitData} 
                        className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring--500 disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                        シミュレーションを開始する
                    </button>
                </div>
            
            </div>
        </div>
    )
}

export default Data