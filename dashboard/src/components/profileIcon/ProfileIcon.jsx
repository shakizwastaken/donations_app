import "./profileIcon.css";

import defaultPfp from "../../assets/images/defaultPfp.png";
import { useContext } from "react";

import { AuthContext } from "../../context/auth/AuthContext";

const ProfileIcon = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="profileIcon">
      {user.pfp ? (
        <img src={user.pfp} alt="user pfp" />
      ) : (
        <img src={defaultPfp} alt="default pfp" />
      )}
    </div>
  );
};

export default ProfileIcon;
