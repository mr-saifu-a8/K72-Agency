import React, { useEffect, useState } from "react";
import { PiGlobeThin } from "react-icons/pi";

export default function MontrealTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const montrealTime = now.toLocaleString("en-CA", {
        timeZone: "America/Montreal",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false, // 12-hour format; agar 24-hour chahiye to false kar do
      });
      setTime(montrealTime);
    };

    updateTime(); // initial call
    const interval = setInterval(updateTime, 1000); // har 1 second me update
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-[2.6vh] flex items-center gap-3 font-[font2] uppercase">
      <div>
        <PiGlobeThin size={39} />
      </div>
      <div>Montreal_{time}</div>
    </div>
  );
}
