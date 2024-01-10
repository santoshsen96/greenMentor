import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "../css/Progressbar.css"; // Import your CSS file for styling

const ProgressBar = ({ data, text, color }) => {
  const [progress, setProgress] = useState(0);
  const maxValue = 123;

  useEffect(() => {
    setProgress((data / maxValue) * 100);
  }, [data]);

  return (
    <div className="progress-bar-container">
      <div
        className="progress-bar"
        style={{ width: `${progress}%`, backgroundColor: color }}
      ></div>
      <div className="progress-text">{text}</div>
    </div>
  );
};

ProgressBar.propTypes = {
  data: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default ProgressBar;
