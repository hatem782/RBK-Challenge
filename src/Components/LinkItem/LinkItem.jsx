import React from "react";
import styles from "./LinkItem.module.scss";
import drag_icon from "../../Assets/Svgs/drag.svg";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function LinkItem({ item }) {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <div ref={setNodeRef} {...attributes} style={style} className={styles.main}>
      <div className={styles.header}>
        <div className={styles.dragger}>
          <img src={drag_icon} alt="" {...listeners} />
          <span>Link #{item}</span>
        </div>
        <span className={styles.remove}>Remove</span>
      </div>
    </div>
  );
}

export default LinkItem;
