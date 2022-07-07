import "./userCard.css";

import defaultPfp from "../../assets/images/defaultPfp.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/auth/AuthContext";

const UserCard = ({
  user: { username, id, firstName, lastName, pfp, phonenumber, isAdmin },
}) => {
  const {
    user: { isAdmin: currentAdmin, id: currentId },
  } = useContext(AuthContext);

  const info = [
    { label: "first name", value: firstName },
    { label: "last name", value: lastName },
    // { label: "phone number", value: phonenumber },
  ];

  const renderInfo = () =>
    info.map(({ label, value }, index) => (
      <div key={index} className="user-info-item">
        <div className="user-info-item-label">{label} :</div>
        <div className="user-info-item-value">{value ? value : "none"}</div>
      </div>
    ));

  const [isEdit, setEdit] = useState();

  return (
    <div className="userCard">
      <img className="user-pfp" src={pfp ? pfp : defaultPfp} alt="user pfp" />
      <div className="user-username">
        {username ? username : firstName}
        {currentId === id && <div className="user-you user-flag">You</div>}
      </div>
      <div className="user-info">{renderInfo()}</div>
      <div className="user-footer">
        {currentAdmin && <div className="user-edit user-flag">Edit User</div>}

        {isAdmin && <div className="user-admin user-flag">Admin</div>}
      </div>
    </div>
  );
};

export default UserCard;
