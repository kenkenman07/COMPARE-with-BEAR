import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useResultStore } from "../modules/result/result.state";

export function ResultModal() {
    const [isOpen, setIsOpen] = useState(false);
    const { result } = useResultStore();
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {setIsOpen(true)}, 2500);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            
            <div className={`
                fixed inset-0 bg-black/50
                transition-opacity duration-300 ease-out
                ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}                
            `}>
                <div className="bg-white/70 p-6 w-[1000px] h-[600px] my-[100px] mx-auto rounded-lg">
                    <div className="flex flex-col items-center text-center gap-4">

                        <h1 className="text-7xl font-bold">追いつかれた！</h1>
                        
                        <div className="text-4xl mt-25">
                            <h3 className="font-semibold">走った距離</h3>
                            <div>{result!.user_distance}m</div>
                            <h3 className="font-semibold mt-2">走った時間</h3>
                            <div>{result!.time}秒</div>
                        </div>
                        
                        <button 
                            onClick={() => navigate("/tips")}
                            className="flex justify-center py-3 px-5 mt-15 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-slate-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring--500 disabled:opacity-50 disabled:cursor-not-allowed"    
                        >
                            くまに遭遇したときの対処法を見る
                        </button>
                    </div>
                </div>
            </div>
        
        </div>
    )
}