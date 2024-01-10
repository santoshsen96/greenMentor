import React from "react";
import { Pie } from "react-chartjs-2";

export const PieChart = () => {
  const data = {
    labels: ["Adani", "Reliance", "Rezicure", "Ruzzet"],
    datasets: [
      {
        data: [60, 40, 30, 20], // You can adjust the percentages as needed
        backgroundColor: ["#FF6384", "#36A2EB", "violet", "yellow"],
        hoverBackgroundColor: ["red", "blue", "pink", "gold"],
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "50%", // Adjust the cutout to control the size of the circular sections
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        padding: 50,
      },
      tooltip: {
        enabled: false, // Disable default tooltip
        custom: function (tooltipModel) {
          // Custom tooltip logic
          let tooltipEl = document.getElementById("chartjs-tooltip");

          if (!tooltipEl) {
            tooltipEl = document.createElement("div");
            tooltipEl.id = "chartjs-tooltip";
            tooltipEl.style.position = "absolute";
            tooltipEl.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
            tooltipEl.style.color = "white";
            tooltipEl.style.padding = "10px";
            tooltipEl.style.borderRadius = "5px";
            document.body.appendChild(tooltipEl);
          }

          if (tooltipModel.opacity === 0) {
            tooltipEl.style.opacity = 0;
            return;
          }

          const dataset = data.datasets[tooltipModel.datasetIndex];
          const currentValue = dataset.data[tooltipModel.index];
          const total = dataset.data.reduce((acc, value) => acc + value, 0);
          const percentage = ((currentValue / total) * 100).toFixed(2);

          tooltipEl.style.opacity = 1;
          tooltipEl.style.left = `${tooltipModel.caretX}px`;
          tooltipEl.style.top = `${tooltipModel.caretY}px`;
          tooltipEl.innerHTML = `<div>${
            data.labels[tooltipModel.index]
          }</div><div>${percentage}% (${currentValue})</div>`;
        },
      },
    },
  };

  return (
    <div
      style={{
        width: "100%",
        height: "50vh",
        margin: "auto",
        border: "1px solid #ddd",
        borderRadius: "2%",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <p style={{ marginRight: "70%" }}>Emission by Supplier</p>
      <div style={{ width: "100%", height: "35vh" }}>
        {data.datasets[0].data.length > 0 ? (
          <Pie data={data} options={options} />
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};
