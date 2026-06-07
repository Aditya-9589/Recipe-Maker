import React, { useEffect, useState } from "react";

const Timer = ({ minutes, onFinish, onStop }) => {
    const [timeLeft, setTimeLeft] = useState(minutes * 60); // in seconds
    const [isFinished, setIsFinished] = useState(false);

    useEffect(() => {
        if (timeLeft <= 0) {
            setIsFinished(true);
            playAlarm();
            onFinish();
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft((prev) => prev - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    const playAlarm = () => {
        const audio = new Audio("https://actions.google.com/sounds/v1/alarms/alarm_clock.ogg");
        audio.play();
    };

    const formatTime = (seconds) => {
        const m = Math.floor(seconds / 60);
        const s = seconds % 60;
        return `${m}:${s < 10 ? "0" : ""}${s}`;
    };

    return (
        <div className="mt-6 text-center">
            {!isFinished ? (
                <>
                    <h2 className="text-2xl font-bold mb-2">⏳ Cooking Timer</h2>
                    <p className="text-3xl mb-4">{formatTime(timeLeft)}</p>
                    <button
                        onClick={onStop}
                        className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    >
                        🛑 Stop
                    </button>
                </>
            ) : (
                <div>
                    <h2 className="text-2xl font-bold text-green-600">🎉 Food is Ready!</h2>
                    <button
                        onClick={onStop}
                        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                        🔙 Back to Home
                    </button>
                </div>
            )}
        </div>
    );
};

export default Timer;
