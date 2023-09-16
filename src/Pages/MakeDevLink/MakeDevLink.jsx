import React, { useState } from "react";
import styles from "./MakeDevLink.module.scss";
import Navbar from "../../Layouts/Navbar/Navbar";

import Mobile from "../../Components/Mobile/Mobile";
import Button from "../../Components/Button/Button";
import AddIcon from "@mui/icons-material/Add";
import LinkItem from "../../Components/LinkItem/LinkItem";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

function MakeDevLink() {
  const [items, setItems] = useState([1, 2, 3, 4, 5]);

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = items.indexOf(active.id);
      const newIndex = items.indexOf(over.id);
      const newItems = [...items];
      newItems.splice(oldIndex, 1);
      newItems.splice(newIndex, 0, active.id);
      setItems(newItems);
    }
  };

  return (
    <div className={styles.main}>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.mobile_section}>
          <Mobile />
        </div>
        <div className={styles.edit_section}>
          <h1>Customize your links</h1>
          <p>
            Add/edit/remove links below and then share all your profiles with
            the world!
          </p>

          <Button type="outlined" icon={<AddIcon />} className={styles.btn_fw}>
            Add new Link
          </Button>

          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={onDragEnd}
            className={styles.links}
          >
            <SortableContext
              items={items}
              strategy={verticalListSortingStrategy}
            >
              {items.map((item) => (
                <LinkItem key={item} item={item} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
}

export default MakeDevLink;
