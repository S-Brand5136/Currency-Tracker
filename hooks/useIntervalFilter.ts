import { useState } from "react";

interface IntervalFilter {}

export default () => {
  const intervals = [
    { title: "1 H", interval: "h1" },
    { title: "6 H", interval: "h6" },
    { title: "1 D", interval: "d1" },
    { title: "1 M", interval: "m1" },
    { title: "5 M", interval: "m5" },
    { title: "15 M", interval: "m15" },
  ];

  const [interval, setInterval] = useState("d1");

  const filterOnPressHandler = (interval: string): void => {
    return setInterval(interval);
  };

  return [interval, intervals, filterOnPressHandler] as const;
};
