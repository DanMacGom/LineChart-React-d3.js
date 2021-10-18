import { useState, useEffect } from "react";
import { csv } from "d3";

const csvUrl =
  "https://gist.githubusercontent.com/curran/3f2ff2e32652397de94d406460e240ce/raw/9351d158bbf87ddc3508cbf4e7023c454f3b5af2/week_temperature_sf.csv";

export const useData = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const row = (d) => {
      d.temperature = +d.temperature;
      d.timestamp = new Date(d.timestamp);
      return d;
    };

    csv(csvUrl, row).then((data) => {
      setData(data);
    });
  }, []);

  return data;
};
