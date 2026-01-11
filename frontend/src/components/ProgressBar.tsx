import { useEffect, useRef, useState } from "react";

type ChaseProgressProps = {
    progress: number;
};

const ICON_SIZE = 64

export const ChaseProgress = ({ progress }: ChaseProgressProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [bearX, setBearX] = useState(0);

    useEffect(() => {
        if (!containerRef.current) return;
        const containerWidth = containerRef.current.clientWidth;
        const maxMove = containerWidth - ICON_SIZE * 2;

        const clamped = Math.max(0, Math.min(progress, 100));
        const x = (clamped / 100) * maxMove;

        setBearX(x);
    }, [progress]);

    return (
        <div ref={containerRef} className="relative w-[500px] h-20 bg-gray-200 rounded-full overflow-hidden">
            <img
                src="/images/bear.png"
                alt="bear"
                className="absolute top-2 w-16 h-16 transition-[left] duration-200 linear"
                style={{ left: bearX }}
            />

            <img
                src="/images/human.png"
                alt="human"
                className="absolute top-2 right-0 w-16 h-16"
            />
        </div>
    );
}