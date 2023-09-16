import React from "react";
import styles from "./MakeDevLink.module.scss";
import Navbar from "../../Layouts/Navbar/Navbar";

import Mobile from "../../Components/Mobile/Mobile";

import EditLinksSection from "./EditLinksSection";
import { Navigate, Route, Routes } from "react-router-dom";

function MakeDevLink() {
  return (
    <div className={styles.main}>
      <Navbar />

      <div className={styles.container}>
        <div className={styles.mobile_section}>
          <Mobile />
        </div>

        <Routes>
          <Route path="/edit-links" element={<EditLinksSection />} />
          <Route path="/edit-profile" element={<h1> </h1>} />
          <Route
            path="/*"
            element={<Navigate to="/make-profile/edit-links" />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default MakeDevLink;
