import React from "react";
import styles from "./Input.module.scss";

function Input({
  label = "",
  name = "",
  value = "",
  placeholder = "",
  onChange = () => {},
}) {
  return (
    <div className={styles.main}>
      <label>{label}</label>
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
