import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  //nav scroll effect
  const [isScrolled, setScrolled] = useState(false);

  const manageScroll = () => {
    if (window.scrollY === 0) setScrolled(false);
    else setScrolled(true);
  };

  useEffect(() => {
    document.addEventListener("scroll", manageScroll);
    return () => {
      document.removeEventListener("scroll", manageScroll);
    };
  }, []);

  //links management
  const [current, setCurrent] = useState(1);

  const links = [
    { id: 0, label: "Home", to: "/", transparent: true },
    { id: 1, label: "Campaigns", to: "/Campaigns", transparent: false },
    { id: 2, label: "Oranizations", to: "/Organizations", transparent: false },
    // { id: 3, label: "Sponsors", to: "/Sponsors", transparent: false },
    { id: 4, label: "About", to: "/About", transparent: false },
    { id: 5, label: "Contact", to: "/Contact", transparent: false },
  ];

  useEffect(() => {
    links.forEach(({ id, to }) => {
      if (to === window.location.pathname) {
        setCurrent(id);
      }
    });

    //scroll to top of page
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [window.location.pathname]);

  const renderLinks = () => {
    return links.map(({ id, label, to }) => (
      <div
        key={id}
        className={`nav-link  ${
          id === current ? "nav-link-selected" : undefined
        }`}
        onClick={() => {
          navigate(to);
        }}
      >
        {label}
      </div>
    ));
  };

  return (
    <nav
      className={`${isScrolled && "scrolled white"} ${
        !links[current].transparent && "white"
      }`}
    >
      <div className="nav-container">
        <div className="nav-logo">
          <h1>Logo</h1>
        </div>
        <div className="nav-links">{renderLinks()}</div>
      </div>
    </nav>
  );
};

export default Navbar;
