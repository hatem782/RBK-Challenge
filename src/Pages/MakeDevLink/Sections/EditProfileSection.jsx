import React, { useEffect, useRef } from "react";
import styles from "../MakeDevLink.module.scss";

import Button from "../../../Components/Button/Button";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import img_icon from "../../../Assets/Svgs/img.svg";
import {
  SaveAllToLocalStorage,
  setUserData,
} from "../../../Redux/all_data.reducer";

import Input from "../../../Components/Input/Input";
import toast from "react-hot-toast";

const EditProfileSection = () => {
  const dispatch = useDispatch();
  const user_data = useSelector((state) => state.data);

  const input_ref = useRef(null);

  const [img64, setImg64] = React.useState(null);
  const [form, setForm] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handle_change = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const ClickImgUpload = () => {
    if (input_ref.current) {
      input_ref.current.click();
    }
  };

  const onImgChange = (e) => {
    const file = e.target.files[0];

    const img64_file = (window.URL ? URL : window.webkitURL).createObjectURL(
      file
    );
    setImg64(img64_file);
  };

  const handle_submit = () => {
    const name_regex = /^[A-Za-z\s'-]+$/;
    const mail_regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (img64 === null) {
      toast.error("Please upload an image");
      return;
    }

    if (!name_regex.test(form.firstName)) {
      toast.error("First name is not valid");
      return;
    }

    if (!name_regex.test(form.lastName)) {
      toast.error("Last name is not valid");
      return;
    }

    if (!mail_regex.test(form.email)) {
      toast.error("Email is not valid");
      return;
    }

    dispatch(setUserData({ ...form, img: img64 }));
    dispatch(SaveAllToLocalStorage());
    toast.success("Profile Data saved successfully");
  };

  useEffect(() => {
    if (user_data.user_img) {
      setImg64(user_data.user_img);
    }
    if (
      user_data.user_firstname &&
      user_data.user_last_name &&
      user_data.user_email
    ) {
      setForm({
        firstName: user_data.user_firstname,
        lastName: user_data.user_last_name,
        email: user_data.user_email,
      });
    }
  }, [user_data]);

  return (
    <div className={styles.edit_section}>
      <div className={styles.edit_links_parts}>
        <h1>Profile Details</h1>
        <p>Add your details to create a personal touch to your profile.</p>

        <div className={styles.img_uploader}>
          <div className={styles.left}>
            <span>Profile picture</span>
          </div>
          <div className={styles.right}>
            <div className={styles.img_input} onClick={ClickImgUpload}>
              <img src={img_icon} alt="" />
              <span> {img64 ? "Image Uploaded" : "+ Upload Image"}</span>
              <input type="file" ref={input_ref} onChange={onImgChange} />
            </div>
            <span>Image must be below 1024x1024px. Use PNG or JPG format.</span>
          </div>
        </div>

        <div className={styles.form}>
          <div className={styles.input_section}>
            <div className={styles.left}>
              <span>First name*</span>
            </div>
            <div className={styles.right}>
              <Input
                placeholder="exemple : Hatem"
                name="firstName"
                value={form.firstName}
                onChange={handle_change}
              />
            </div>
          </div>

          <div className={styles.input_section}>
            <div className={styles.left}>
              <span>Last name*</span>
            </div>
            <div className={styles.right}>
              <Input
                placeholder="exemple : Ben Echikh"
                name="lastName"
                value={form.lastName}
                onChange={handle_change}
              />
            </div>
          </div>

          <div className={styles.input_section}>
            <div className={styles.left}>
              <span>Email*</span>
            </div>
            <div className={styles.right}>
              <Input
                placeholder="exemple : hatembenechikh@gmail.com"
                name="email"
                value={form.email}
                onChange={handle_change}
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_for_save}>
        <Button type="filled" onClick={handle_submit}>
          Save
        </Button>
      </div>
    </div>
  );
};

export default EditProfileSection;
