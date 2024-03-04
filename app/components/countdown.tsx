"use client";
import { useEffect, useState } from "react";
import CountdownDisplay from "./countdown-display";
import { Orbitron } from "next/font/google";
import { Grid } from "@mui/material";

const orbitron = Orbitron({ subsets: ["latin"] });

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft(): TimeLeft {
    const endDate = new Date("2024-09-20T00:00:00");
    const now = new Date();
    const gap = endDate.getTime() - now.getTime();

    const days = Math.floor(gap / (1000 * 60 * 60 * 24));
    const hours = Math.floor((gap % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((gap % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((gap % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
  }

  return (
    <Grid
      container
      gap={3}
      padding={2}
      style={{
        top: "50%",
        left: "50%",
        position: "fixed",
        transform: "translate(-50%, -50%)",
        background: "rgb(6,10,13,0.5)",
        borderRadius: 10,
        width: "85%",
      }}
    >
      <Grid
        item
        xs={12}
        textAlign={"center"}
        style={{
          fontSize: "6vw",
          fontWeight: "bold",
          color: "#FCFDF6",
        }}
      >
        Countdown To Rome:
      </Grid>
      <Grid
        item
        xs={12}
        className={orbitron.className}
        fontSize="3.5vw"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          fontWeight: "bold",
          color: "#FCFDF6",
        }}
      >
        <CountdownDisplay label="Days" value={timeLeft.days} />:
        <CountdownDisplay label="Hours" value={timeLeft.hours} />:
        <CountdownDisplay label="Minutes" value={timeLeft.minutes} />:
        <CountdownDisplay label="Seconds" value={timeLeft.seconds} />
      </Grid>
    </Grid>
  );
};

export default Countdown;
