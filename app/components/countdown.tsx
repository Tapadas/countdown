"use client";
import { useEffect, useState } from "react";
import CountdownDisplay from "./countdown-display";
import { Orbitron } from "next/font/google";
import { Grid } from "@mui/material";
import moment from "moment";

const orbitron = Orbitron({ subsets: ["latin"] });

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  function calculateTimeLeft(): TimeLeft {
    const endDate = moment("2024-09-20");
    const currentDate = moment(new Date());
    const difference = endDate.diff(currentDate);
    const duration = moment.duration(difference);

    return {
      days: Math.floor(duration.asDays()),
      hours: duration.hours(),
      minutes: duration.minutes(),
      seconds: duration.seconds(),
    };
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
