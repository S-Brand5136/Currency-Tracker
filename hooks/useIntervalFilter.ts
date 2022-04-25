import { useState } from "react";

export default () => {
  const intervals = [
    { title: "1 H", interval: "h1" },
    { title: "2 H", interval: "h2" },
    { title: "6 H", interval: "h6" },
    { title: "12 H", interval: "h12" },
    { title: "1 D", interval: "d1" },
  ];
  const [interval, setInterval] = useState("d1");

  return [interval, setInterval, intervals] as const;
};
