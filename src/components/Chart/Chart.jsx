import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

import { fetchDailyData } from "../../api";
import styles from "./Chart.module.css";

const Chart = () => {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const receivedData = await fetchDailyData();

      //Reverse array to beautify chart
      setDailyData(receivedData.reverse());
    };

    fetchAPI();
  });

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ last_update }) =>
          new Date(last_update).toLocaleDateString()
        ),
        datasets: [
          {
            data: dailyData.map(({ total_cases }) => total_cases),
            label: "Infected",
            borderColor: "#2929fd",
            fill: true,
          },
          {
            data: dailyData.map(({ total_recovered }) => total_recovered),
            label: "Recovered",
            borderColor: "#21ff2c",
            backgroundColor: "rgba(0, 255, 0, 0.5)",
            fill: true,
          },
          {
            data: dailyData.map(({ total_deaths }) => total_deaths),
            label: "Deaths",
            borderColor: "#ff2121",
            backgroundColor: "rgba(255, 0, 0, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className={styles.container}>{lineChart}</div>;
};

export default Chart;
