import React, { useEffect } from "react";
import styles from "./Mobile.module.scss";
import mobile_img from "../../Assets/Svgs/mobile-border.svg";
import Skeleton from "@mui/material/Skeleton";
import { useSelector } from "react-redux";

import arrow_icon from "../../Assets/Svgs/arrow.svg";

import { data as list_medias } from "../../Assets/Data/Links";

function Mobile({ className = "", no_mobile_shape = false }) {
  const global_links = useSelector((state) => state.data.global_links);
  const user_img = useSelector((state) => state.data.user_img);
  const user_firstname = useSelector((state) => state.data.user_firstname);
  const user_last_name = useSelector((state) => state.data.user_last_name);
  const user_email = useSelector((state) => state.data.user_email);

  console.log(user_img);

  return (
    <div className={`${styles.mobile_cont} ${className}`}>
      <div className={styles.mobile}>
        <img
          src={mobile_img}
          alt="mobile"
          className={no_mobile_shape ? styles.no_mobile_shape : ""}
        />
        <div
          className={`${styles.mobile_data} ${
            no_mobile_shape ? styles.mobile_data_reduces : ""
          }`}
        >
          <div className={styles.mobile_img}>
            {user_img ? (
              <img src={user_img} alt="user" className={styles.user_img} />
            ) : (
              <Skeleton
                variant="circular"
                animation="pulse"
                className={styles.circle_skeleton}
              />
            )}
          </div>
          <div className={styles.mobile_full_name}>
            {user_firstname && user_last_name ? (
              <h3>
                {user_firstname} {user_last_name}
              </h3>
            ) : (
              <Skeleton
                variant="rounded"
                animation="pulse"
                className={styles.full_name_skeleton}
              />
            )}
          </div>
          <div className={styles.mobile_email}>
            {user_email ? (
              <p>{user_email}</p>
            ) : (
              <Skeleton
                variant="rounded"
                animation="pulse"
                className={styles.email_skeleton}
              />
            )}
          </div>

          {global_links.map((item, key) => {
            return (
              <div key={key} className={styles.mobile_link}>
                {item.platform ? (
                  <MyLink data={item} />
                ) : (
                  <Skeleton
                    variant="rounded"
                    animation="pulse"
                    className={styles.link_skeleton}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

const MyLink = ({ data }) => {
  const [custom_link, setCustomLink] = React.useState({
    title: "",
    icon: "",
    color: "#fff",
  });

  useEffect(() => {
    if (data.platform) {
      const custom_link = list_medias.find(
        (item) => item.title === data.platform
      );
      setCustomLink(custom_link);
    }
  }, [data]);

  const GoTo = () => {
    window.open(data.link);
  };

  return (
    <div
      onClick={GoTo}
      className={styles.MyLink}
      style={{ backgroundColor: custom_link.color }}
    >
      <div className={styles.left}>
        <img src={custom_link.icon} alt={data.platform} />
        <span className={styles.platform}>{data.platform}</span>
      </div>
      <div className={styles.right}>
        <img src={arrow_icon} alt="go" />
      </div>
    </div>
  );
};

export default Mobile;
