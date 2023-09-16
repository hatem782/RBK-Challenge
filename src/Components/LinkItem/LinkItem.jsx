import React, { useEffect, useState } from "react";
import styles from "./LinkItem.module.scss";
import drag_icon from "../../Assets/Svgs/drag.svg";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Select from "../Select/Select";

import { data as list_medias } from "../../Assets/Data/Links";
import Input from "../Input/Input";
import { useDispatch, useSelector } from "react-redux";
import { removeLocalLink, updateById } from "../../Redux/all_data.reducer";

function LinkItem({ item }) {
  const local_links = useSelector((state) => state.data.local_links);
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: item.id });
  const dispatch = useDispatch();

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  const handle_change = (e) => {
    let newData = { ...item, [e.target.name]: e.target.value };
    dispatch(updateById(newData));
  };

  const handle_delete = () => {
    console.log(item.id);
    dispatch(removeLocalLink(item.id));
  };

  return (
    <div ref={setNodeRef} {...attributes} style={style} className={styles.main}>
      <div className={styles.header}>
        <div className={styles.dragger}>
          <img src={drag_icon} alt="" {...listeners} />
          <span>Link #{item.id}</span>
        </div>
        <span className={styles.remove} onClick={handle_delete}>
          Remove
        </span>
      </div>
      <div className={styles.body}>
        <Select
          label="Platform"
          name="platform"
          value={item.platform}
          options={list_medias.filter((media) => {
            let selected_platforms = local_links.map((ll) => ll.platform);
            return !selected_platforms.includes(media.title);
          })}
          all_options={list_medias}
          onChange={handle_change}
        />

        <Input
          label="Link"
          placeholder="URL HERE"
          name="link"
          value={item.link}
          onChange={handle_change}
        />
      </div>
    </div>
  );
}

export default LinkItem;
