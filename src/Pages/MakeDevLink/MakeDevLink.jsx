import React from "react";
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
import { useDispatch, useSelector } from "react-redux";
import { changelocalLinksOrder } from "../../Redux/all_data.reducer";
import toast from "react-hot-toast";

function MakeDevLink() {
  const dispatch = useDispatch();

  const local_links = useSelector((state) => state.data.local_links);

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = local_links.findIndex((item) => item.id === active.id);
      const newIndex = local_links.findIndex((item) => item.id === over.id);
      const newItems = [...local_links];
      newItems.splice(oldIndex, 1);
      newItems.splice(newIndex, 0, local_links[oldIndex]);
      console.log(newItems);
      dispatch(changelocalLinksOrder(newItems));
    }
  };

  const AddLink = () => {
    if (local_links.length > 4) {
      toast.error("You can't add more than 5 links");
    } else {
      let new_id;
      if (local_links.length === 0) {
        new_id = 1;
      } else {
        new_id = local_links[local_links.length - 1].id + 1;
      }
      const new_link = {
        id: new_id,
        platform: "",
        link: "",
      };
      dispatch(changelocalLinksOrder([...local_links, new_link]));
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

          <Button
            type="outlined"
            icon={<AddIcon />}
            className={styles.btn_fw}
            onClick={AddLink}
          >
            Add new Link
          </Button>

          <DndContext
            collisionDetection={closestCenter}
            onDragEnd={onDragEnd}
            className={styles.links}
          >
            <SortableContext
              items={local_links}
              strategy={verticalListSortingStrategy}
            >
              {local_links.map((item, key) => (
                <LinkItem key={item.id} item={item} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
      </div>
    </div>
  );
}

export default MakeDevLink;
