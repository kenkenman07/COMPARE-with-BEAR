import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { useResultStore } from "../modules/result/result.state";

export function ResultModal() {
    const [isOpen, setIsOpen] = useState(false);
    const { result } = useResultStore();
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
            const audio = new Audio("/sounds/bear.mp3");
            audio.play();
        
        }, 2500);

        return () =>  {
            clearTimeout(timer);
            //dataStore.setData(null);
        }
    }, []);

    return (
        <div>
            
            <div className={`
                fixed inset-0 bg-black/50
                transition-opacity duration-300 ease-out
                ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}                
            `}>
                <div className="relative bg-white/70 p-6 w-[1000px] h-[600px] my-[100px] mx-auto rounded-lg">
                    <div className="flex flex-col items-center text-center gap-4 ">

                        <img src="images/human_chased.png" className="absolute -top-40 w-00 " />
                        
                        <div className="text-4xl mt-50">
                            <h3 className="font-semibold">走行距離</h3>
                            <span className="font-bold text-6xl">{result!.user_distance}</span>m
                            <h3 className="font-semibold mt-5">走行時間</h3>
                            <span className="font-bold text-6xl">{result!.time}</span>秒
                        </div>
                        
                        <button 
                            onClick={() => navigate("/data")}
                            className="bg-transparent
                                flex justify-center 
                                py-3 
                                px-5 
                                mt-8
                                focus:outline-none 
                                focus:ring-2 
                                focus:ring-offset-2 
                                focus:ring--500 
                                text-amber-100
                                border-[3px] border-amber-600
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
                            もう一度 シミュレーションへ
                        </button>
                    </div>
                </div>
            </div>
        
        </div>
    )
}