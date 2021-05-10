import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map(({ value }) => value);
  const totalMaximum = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {props.dataPoints.map(({ value, label }) => (
        <ChartBar
          key={label}
          value={value}
          maxValue={totalMaximum}
          label={label}
        />
      ))}
    </div>
  );
};

export default Chart;
