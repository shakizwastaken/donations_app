import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sidebarLink.css";

const SidebarLink = ({ to, icon, label, tooltip, children }) => {
  const navigate = useNavigate();

  const [clicked, setClicked] = useState(false);

  const handleClose = (e) => {
    if (e.key !== "Escape") return;
    setClicked(false);
  };

  const handleClick = () => {
    if (children) {
      setClicked(!clicked);
      return;
    }
    if (to) navigate(to);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleClose);

    return () => {
      document.removeEventListener("keydown", handleClose);
    };
  }, []);

  return (
    <>
      <div className="sidebar-link" onClick={handleClick}>
        {icon}

        {!tooltip && label}

        {clicked ? (
          <div className="sidebar-link-children">{children}</div>
        ) : (
          tooltip && <div className="sidebar-link-info">{label}</div>
        )}
      </div>
    </>
  );
};

export default SidebarLink;
