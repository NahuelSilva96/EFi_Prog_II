import React, { useEffect, useState } from "react";
import "../styles/contador.css";

function ProximoPartido() {
const targetDate = new Date("2025-10-25T15:30:00").getTime();

const [timeLeft, setTimeLeft] = useState({
days: "00",
hours: "00",
minutes: "00",
seconds: "00",
});

useEffect(() => {
const interval = setInterval(() => {
const now = new Date().getTime();
const distance = targetDate - now;

if (distance <= 0) { clearInterval(interval); setTimeLeft({ days: "00" , hours: "00" , minutes: "00" , seconds: "00" ,
    }); return; } const days=Math.floor(distance / (1000 * 60 * 60 * 24)); const hours=Math.floor( (distance % (1000 *
    60 * 60 * 24)) / (1000 * 60 * 60) ); const minutes=Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); const
    seconds=Math.floor((distance % (1000 * 60)) / 1000); setTimeLeft({ days: days.toString().padStart(2, "0" ), hours:
    hours.toString().padStart(2, "0" ), minutes: minutes.toString().padStart(2, "0" ), seconds:
    seconds.toString().padStart(2, "0" ), }); }, 1000); return ()=> clearInterval(interval);
    }, [targetDate]);

    return (
        <div className="contador">
            <div className="contador_content">
                <div className="contador_title-container">
                    <span className="contador_title">Proximo Partido</span>
                </div>
            </div>

            <div className="contador_clock">
                {["days", "hours", "minutes", "seconds"].map((unit, i) => (
                <div key={unit} className={`contador_clock-item ${unit} ${ timeLeft[unit]==="00" ? "is-zero" : "" }`}>
                    <div className="contador_count">
                        <span className="contador_value">{timeLeft[unit]}</span>
                        {unit !== "seconds" }
                    </div>
                    <div className="contador_count-label">
                        {unit === "days"
                        ? "días"
                        : unit === "hours"
                        ? "horas"
                        : unit === "minutes"
                        ? "min"
                        : "s"}
                    </div>
                </div>
                ))}
            </div>
        </div>
    );
    }

    export default ProximoPartido;