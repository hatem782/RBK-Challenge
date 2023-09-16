import React, { useEffect } from "react";
import styles from "./Navbar.module.scss";

import logo from "../../Assets/Svgs/logo.svg";
import logo_mobile from "../../Assets/Svgs/logo-img.svg";
import see_icon from "../../Assets/Svgs/see.svg";

import link_icon from "../../Assets/Svgs/link.svg";
import user_icon from "../../Assets/Svgs/user.svg";
import { useNavigate } from "react-router-dom";
import NavigBtn from "../../Components/NavigBtn/NavigBtn";
import Button from "../../Components/Button/Button";

import { useMediaQuery } from "react-responsive";

function Navbar() {
  const isMobile = useMediaQuery({
    query: "(max-width: 599px)",
  });

  const links = [
    { name: "Links", icon: link_icon, url: "/make-profile/edit-links" },
    {
      name: "Profile Details",
      icon: user_icon,
      url: "/make-profile/edit-profile",
    },
  ];

  const navig = useNavigate();
  const location = window.location.pathname;

  const handle_naviate = (item) => {
    navig(item.url);
  };

  return (
    <div className={styles.main}>
      <img src={isMobile ? logo_mobile : logo} alt="" className={styles.logo} />

      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <NavigBtn
              key={index}
              data={item}
              active={item.url === location}
              onClick={() => handle_naviate(item)}
            />
          );
        })}
      </div>

      <div className={styles.preview}>
        <Button type="outlined" onClick={() => navig("/preview")}>
          {isMobile ? (
            <img src={see_icon} alt="" className={styles.see_icon} />
          ) : (
            "Preview"
          )}
        </Button>
      </div>
    </div>
  );
}

export default Navbar;
