import React from "react";
import styles from "./Mobile.module.scss";
import mobile_img from "../../Assets/Svgs/mobile-border.svg";
import Skeleton from "@mui/material/Skeleton";

function Mobile({}) {
  return (
    <div className={styles.mobile}>
      <img src={mobile_img} alt="mobile" />
      <div className={styles.mobile_data}>
        <div className={styles.mobile_img}>
          <Skeleton
            variant="circular"
            animation="pulse"
            className={styles.circle_skeleton}
          />
        </div>
        <div className={styles.mobile_full_name}>
          <Skeleton
            variant="rounded"
            animation="pulse"
            className={styles.full_name_skeleton}
          />
        </div>
        <div className={styles.mobile_email}>
          <Skeleton
            variant="rounded"
            animation="pulse"
            className={styles.email_skeleton}
          />
        </div>

        <div className={styles.mobile_link}>
          <Skeleton
            variant="rounded"
            animation="pulse"
            className={styles.link_skeleton}
          />
        </div>

        <div className={styles.mobile_link}>
          <Skeleton
            variant="rounded"
            animation="pulse"
            className={styles.link_skeleton}
          />
        </div>

        <div className={styles.mobile_link}>
          <Skeleton
            variant="rounded"
            animation="pulse"
            className={styles.link_skeleton}
          />
        </div>

        <div className={styles.mobile_link}>
          <Skeleton
            variant="rounded"
            animation="pulse"
            className={styles.link_skeleton}
          />
        </div>

        <div className={styles.mobile_link}>
          <Skeleton
            variant="rounded"
            animation="pulse"
            className={styles.link_skeleton}
          />
        </div>
      </div>
    </div>
  );
}

export default Mobile;
