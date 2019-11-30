import React from "react";
import Star from "./Star";

import styles from "../../styles/Stars.style.css";

const Stars = ({ count, handleClick }) => (
  <span className={styles.stars}>
    {[...Array(5).keys()].map(i => (
      <Star key={i} isFull={i < count} onClick={() => handleClick(i + 1)} />
    ))}
  </span>
);

Stars.defaultProps = {
  count: 1,
  handleClick: e => e
};

export default Stars;
