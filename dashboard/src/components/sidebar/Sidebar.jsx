import {
  faHome,
  faFolder,
  faGear,
  faUsers,
  faBuilding,
  faBullhorn,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ProfileIcon from "../profileIcon/ProfileIcon";

import "./sidebar.css";

import SidebarLink from "./sidebarLink/sidebarLink";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <ProfileIcon />

      <div className="sidebar-links">
        <SidebarLink
          to="/"
          icon={<FontAwesomeIcon icon={faHome} />}
          label="Home"
          tooltip={true}
        />
        <SidebarLink
          icon={<FontAwesomeIcon icon={faFolder} />}
          label="Items"
          tooltip={true}
        >
          <SidebarLink
            to="/users"
            icon={<FontAwesomeIcon icon={faUsers} />}
            label="Users"
          />
          <SidebarLink
            to="/organizations"
            icon={<FontAwesomeIcon icon={faBuilding} />}
            label="Organizations"
          />
          <SidebarLink
            to="/campaigns"
            icon={<FontAwesomeIcon icon={faBullhorn} />}
            label="Campaigns"
          />
        </SidebarLink>
      </div>

      <div className="sidebar-settings">
        <SidebarLink
          to="/settings"
          icon={<FontAwesomeIcon icon={faGear} />}
          label="Settings"
          tooltip={true}
        />
      </div>
    </div>
  );
};

export default Sidebar;
