import React from "react";
import styles from "../MakeDevLink.module.scss";

import Button from "../../../Components/Button/Button";
import AddIcon from "@mui/icons-material/Add";
import LinkItem from "../../../Components/LinkItem/LinkItem";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { useDispatch, useSelector } from "react-redux";
import {
  SaveAllToLocalStorage,
  changelocalLinksOrder,
  saveLinks,
} from "../../../Redux/all_data.reducer";
import toast from "react-hot-toast";

import { data as media_links } from "../../../Assets/Data/Links";
import { useNavigate } from "react-router-dom";

const EditLinksSection = () => {
  const dispatch = useDispatch();
  const local_links = useSelector((state) => state.data.local_links);
  const navigate = useNavigate();

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = local_links.findIndex((item) => item.id === active.id);
      const newIndex = local_links.findIndex((item) => item.id === over.id);
      const newItems = [...local_links];
      newItems.splice(oldIndex, 1);
      newItems.splice(newIndex, 0, local_links[oldIndex]);
      dispatch(changelocalLinksOrder(newItems));
    }
  };

  const AddLink = () => {
    if (local_links.length > 4) {
      toast.error("You can't add more than 5 links");
    } else {
      let new_id;
      if (local_links.length === 0) {
        new_id = 0;
      } else {
        new_id = local_links[0].id;
        for (let i = 0; i < local_links.length; i++) {
          if (local_links[i].id > new_id) {
            new_id = local_links[i].id;
          }
        }
      }
      const new_link = {
        id: new_id + 1,
        platform: "",
        link: "",
      };
      dispatch(changelocalLinksOrder([...local_links, new_link]));
    }
  };

  const handle_save_links_to_mobile = () => {
    let contin = true;

    local_links.forEach((item) => {
      // ################### To check if the platform is right ###################
      if (item.platform === "" && contin) {
        contin = false;
        toast.error(`Please select a platform for the Link #${item.id}`);
      }

      // ################### To check if the url is right ###################
      const urlPattern =
        /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
      if (!urlPattern.test(item.link) && contin) {
        contin = false;
        toast.error(`Please enter a valid url for the Link #${item.id}`);
      }

      // ################### To check if the url match with the platform ###################
      let valid_match = media_links.find(
        (item2) => item2.title === item.platform
      );

      if (valid_match && valid_match.valid !== "personal" && contin) {
        if (!item.link.includes(valid_match.valid) && contin) {
          contin = false;
          toast.error(
            `The url for the Link #${item.id} doesn't match with the platform "${item.platform}"`
          );
        }
      }
    });

    if (!contin) return;
    dispatch(saveLinks([...local_links]));
    dispatch(SaveAllToLocalStorage());
    toast.success("Links saved successfully");
  };

  return (
    <div className={styles.edit_section}>
      <div className={styles.edit_links_parts}>
        <h1>Customize your links</h1>
        <p>
          Add/edit/remove links below and then share all your profiles with the
          world!
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
      <div className={styles.footer_for_save}>
        <Button type="filled" onClick={handle_save_links_to_mobile}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditLinksSection;
