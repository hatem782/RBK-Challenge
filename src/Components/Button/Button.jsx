import React from "react";
import styles from "./Button.module.scss";

function Button({
  type = "filled", // filled, outlined, text
  children = "",
  className = "",
  onClick = () => {},
  icon = null,
}) {
  return (
    <button
      className={`${styles.main} ${styles[type]} ${className}`}
      onClick={onClick}
    >
      {icon}
      {children}
    </button>
  );
}

export default Button;
