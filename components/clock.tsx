import React, { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    const formattedHours = hours % 12 || 12;

    return {
      hours: formattedHours.toString().padStart(2, "0"),
      minutes: minutes.toString().padStart(2, "0"),
      ampm
    };
  };

  const { hours, minutes, ampm } = formatTime(time);

  return (
    <div className="flex items-center gap-1">
      <span className="text-sm font-medium tabular-nums">
        {hours}:{minutes}
      </span>
      <Badge variant="secondary" className="text-xs px-1 py-0">
        {ampm}
      </Badge>
    </div>
  );
};

export default Clock;
