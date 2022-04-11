import { useState } from "react";

interface IntervalFilter {}

interface intervalArray {
  title: string;
  interval: string;
  selected: boolean;
}

export const useIntervalFilter = () => {
  const intervals: intervalArray[] = [
    { title: "1 H", interval: "h1", selected: false },
    { title: "6 H", interval: "h6", selected: false },
    { title: "1 D", interval: "d1", selected: true },
    { title: "1 M", interval: "m1", selected: false },
    { title: "5 M", interval: "m5", selected: false },
    { title: "15 M", interval: "m15", selected: false },
  ];
  const [interval, setInterval] = useState("d1");

  const filterOnPressHandler = (interval: string): void => {
    setInterval(interval);
  };

  return [interval, intervals, filterOnPressHandler];
};
