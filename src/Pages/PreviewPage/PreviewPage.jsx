import React from "react";
import styles from "./PreviewPage.module.scss";
import NavbarShare from "../../Layouts/NavbarShare/NavbarShare";
import Mobile from "../../Components/Mobile/Mobile";

function PreviewPage() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <NavbarShare />
      </div>
      <div className={styles.body}>
        <Mobile className={styles.mobile} no_mobile_shape />
      </div>
    </div>
  );
}

export default PreviewPage;
