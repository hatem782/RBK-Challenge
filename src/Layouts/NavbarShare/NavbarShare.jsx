import React from "react";
import styles from "./NavbarShare.module.scss";
import Button from "../../Components/Button/Button";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

function NavbarShare() {
  const navig = useNavigate();

  const GoToEdit = () => {
    navig("/make-profile/edit-links");
  };

  const ShareLink = () => {
    toast.error("This feature is not available yet");
  };

  return (
    <div className={styles.main}>
      <Button type="outlined" onClick={GoToEdit}>
        Back To Edit
      </Button>

      <Button type="filled" color="primary" onClick={ShareLink}>
        Share Link
      </Button>
    </div>
  );
}

export default NavbarShare;
