import React from "react";
import "../css/Table.css"; // Import your CSS file for styling

export const Table = () => {
  const monthArr = [
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
  ];
  const emissionArr = [
    1790, 2205, 2345, 1503, 4634, 4634, 3487, 5258, 4524, 3332, 3535, 2452,
  ];
  const revEmiArr = [
    137, 99.8, 122.6, 130, 124.2, 124.2, 165.1, 131.2, 128, 157.4, 163.2, 144.6,
  ];
  const ratioArr = [15, 3, 12, 16, -8, -13, 26, 11, -2, 5, 3, -2];

  const generateData = () => {
    const data = [];
    for (let i = 0; i < monthArr.length; i++) {
      const isPositive = ratioArr[i] >= 0;
      data.push({
        id: i,
        column1: monthArr[i],
        column2: emissionArr[i],
        column3: revEmiArr[i],
        column4: ratioArr[i],
        isPositive: isPositive,
      });
    }
    return data;
  };

  const tableData = generateData();

  const downloadTableData = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      tableData.map((row) => Object.values(row).join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "table_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="table-container">
      <div style={{ display: "flex", flexDirection: "row", gap: "60%" }}>
        <div>
          <p style={{ fontWeight: "2px" }}>Supplier-wise</p>
        </div>
        <div>
          <button onClick={downloadTableData}>Download</button>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>MONTH</th>
            <th>EMISSIONS(IN CO2E)</th>
            <th>REVENUE/EMISSION RATIO</th>
            <th>YOY R/E CHANGE</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row) => (
            <tr key={row.id}>
              <td>{row.column1}</td>
              <td>{row.column2}</td>
              <td>{row.column3}</td>
              <td
                className={
                  row.isPositive ? "positive upward" : "negative downward"
                }
              >
                {row.column4}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
