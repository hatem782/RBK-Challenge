import React, { useEffect, useState, useRef } from "react";
import styles from "./Select.module.scss";

import down_icon from "../../Assets/Svgs/down.svg";
import useOutsideEvent from "../../Hooks/UseOutside";

function Select({
  label = "",
  name = "",
  value = null,
  onChange = () => {},
  options = [],
}) {
  const [isOpen, setIsOpen] = useState("");
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);

  const handle_open = () => {
    setIsOpen(isOpen === "open" ? "" : "open");
  };

  useOutsideEvent(ref, () => {
    setIsOpen("");
  });

  useEffect(() => {
    if (selected) {
      onChange({ target: { name, value: selected.title } });
    }
  }, [selected]);

  return (
    <div className={styles.main}>
      <label>{label}</label>
      <div className={`${styles.select} ${styles[isOpen]}`} ref={ref}>
        <div className={styles.header} onClick={handle_open}>
          <div className={styles.left}>
            {selected && <img src={selected.icon} alt="" />}
            {selected && <span>{selected.title}</span>}
          </div>
          <div className={styles.right}>
            <img src={down_icon} alt="" />
          </div>
        </div>
        <div className={styles.dropdown}>
          {options.map((item, index) => {
            return (
              <div
                className={`
              ${styles.item} 
              ${selected?.title === item.title && styles.selected}
              `}
                key={index}
                onClick={() => {
                  setSelected(item);
                  setIsOpen("");
                }}
              >
                <img src={item.icon} alt="" />
                <span>{item.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Select;
