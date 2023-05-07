import React from "react";
import "./nav.css";
import img from "../../assets/icons/img.jpg";
import notification from "../../assets/icons/noticon.png";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header_logo" onClick={() => navigate("/")}>
        <img className="logo_img" src={img} alt="logo" />
        <p>UpLevel</p>
      </div>

      <div className="header_right">
        <img className="noti_img" src={notification} alt="notification" />
        <img className="profile_img" src={img} alt="profile" /> :
      </div>
    </div>
  );
};

export default Header;
