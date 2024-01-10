import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { PieChart } from "./PieChart";
import { Table } from "./Table";

export const VerticalBarChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");

    const data = {
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      datasets: [
        {
          label: "Emissions-2023",
          type: "bar",
          backgroundColor: "blue",
          borderWidth: 1,
          hoverBackgroundColor: "rgb(75, 192, 192)",
          data: [
            1790, 2205, 2345, 1503, 4634, 4634, 3487, 5258, 4524, 3332, 3535,
            2452,
          ],
          yAxisID: "left-y-axis",
        },
        {
          label: "Emissions-2022",
          type: "bar",
          backgroundColor: "green",
          borderWidth: 1,
          hoverBackgroundColor: "#32CD32",
          data: [
            2108, 2251, 1602, 3456, 3245, 3543, 5445, 4343, 3434, 3464, 2324,
          ],
          yAxisID: "left-y-axis",
        },
        {
          label: "R/E-2023",
          type: "line",
          borderColor: "rgba(255, 205, 86, 1)",
          borderWidth: 2,
          fill: false,
          data: [
            137, 99.8, 122.6, 130, 124.2, 124.2, 165.1, 131.2, 128, 157.4,
            163.2, 144.6,
          ],
        },
        {
          label: "R/E-2022",
          type: "line",
          borderColor: "rgba(54, 162, 235, 1)",
          borderWidth: 2,
          fill: false,
          data: [
            96.5, 109.1, 112.3, 134.4, 143.1, 131.1, 118.2, 130, 150.4, 157.8,
            147.8,
          ],
        },
      ],
    };

    new Chart(ctx, {
      type: "bar",
      data: data,
      options: {
        scales: {
          leftYAxis: {
            type: "linear",
            position: "left",
            beginAtZero: true,
          },
          x: {
            type: "category",
            beginAtZero: true,
            grid: {
              drawBorder: false, // Hide x-axis grid lines
              display: false, // Hide vertical grid lines
            },
            ticks: {
              maxTicksLimit: 12, // Display only one tick on the x-axis
            },
          },
        },
      },
    });
  }, []);

  return (
    <div>
      <div
        style={{
          width: "80%",
          marginLeft: "3%",
          borderRadius: "12px",
          border: "1px solid #EBEBEB",
          background: "#FFF",
          boxShadow:
            "0px 0.599px 5.32px 0px rgba(0, 0, 0, 0.01), 0px 2.01px 17.869px 0px rgba(0, 0, 0, 0.01), 0px 9px 80px 0px rgba(0, 0, 0, 0.02)",
        }}
      >
        <p>Emission/Revenue</p>
        <canvas ref={chartRef} width="946px" height="447px"></canvas>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          marginTop: "20px",
        }}
      >
        <div style={{ width: "90%", margin: "auto" }}>
          <PieChart />
        </div>
        <div
          style={{
            width: "100%",
            borderRadius: "12px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <Table />
        </div>
      </div>
    </div>
  );
};
