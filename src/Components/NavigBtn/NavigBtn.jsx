import React from "react";
import styles from "./NavigBtn.module.scss";

function NavigBtn({ active = false, data, onClick = () => {} }) {
  return (
    <div
      className={`${styles.link} ${active && styles.active}`}
      onClick={onClick}
    >
      <img src={data.icon} alt="" className={styles.icon} />
      <span>{data.name}</span>
    </div>
  );
}

export default NavigBtn;
