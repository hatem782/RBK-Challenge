import React from "react";
import styles from "./MakeDevLink.module.scss";
import Navbar from "../../Layouts/Navbar/Navbar";

import Mobile from "../../Components/Mobile/Mobile";
import Button from "../../Components/Button/Button";
import AddIcon from "@mui/icons-material/Add";

function MakeDevLink() {
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
        </div>
      </div>
    </div>
  );
}

export default MakeDevLink;
