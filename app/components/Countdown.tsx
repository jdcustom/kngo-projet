"use client";

import { useEffect, useState } from "react";

type Props = {
  targetDate: string;
};

export default function Countdown({ targetDate }: Props) {
  const [timeLeft, setTimeLeft] = useState("Loading...");

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const target = new Date(targetDate).getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft("Closed");
        clearInterval(interval);
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <p className="text-yellow-400 font-semibold">
      ⏳ Closes in: {timeLeft}
    </p>
  );
}
