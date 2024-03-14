import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-03-31`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <>
    <div className="banner">
      <table>
        <tbody>
          <tr>
            <td>{formatTime(timeLeft.days)}</td>
            <td>:</td>
            <td>{formatTime(timeLeft.hours)}</td>
            <td>:</td>
            <td>{formatTime(timeLeft.minutes)}</td>
            <td>:</td>
            <td>{formatTime(timeLeft.seconds)}</td>
          </tr>
          <tr>
            <td>DÍAS</td>
            <td> </td>
            <td>HORAS</td>
            <td> </td>
            <td>MINUTOS</td>
            <td> </td>
            <td>SEGUNDOS</td>
          </tr>
        </tbody>
      </table>
      <h1>YA VIENE LO NUEVO</h1>
    </div>
    </>
  );
};

export default Banner;
