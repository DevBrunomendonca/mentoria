"use client";

import { ArrowUpRight } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

const Header = () => {
  const initialTime = 15 * 60;
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          clearInterval(intervalId);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <header className="bg-black px-4 py-2">
      <div className="flex items-center justify-center w-full gap-3">
        <span className="bg-[#F50056] px-[11px] py-1 rounded-3xl text-white text-xs">
          {formatTime(timeLeft)}
        </span>
        <p className="text-white text-xs ">Oferta Especial 2025 50% off</p>
        <a href="#sale-section">
          <Button className="text-white text-xs p-0 font-light" variant="link">
            Garantir agora
            <ArrowUpRight size={16} />
          </Button>
        </a>
      </div>
    </header>
  );
};

export default Header;
