import React, { useEffect, useState } from "react";
import "./navbar.css";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { to: "intro", label: "Home" },
  { to: "experience", label: "Experience" },
  { to: "skills", label: "Expertise" },
  { to: "works", label: "Work" },
];

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => event.key === "Escape" && setShowMenu(false);
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="siteHeader">
      <nav className="navbar" aria-label="Primary navigation">
        <Link className="wordmark" to="intro" smooth duration={500} onClick={() => setShowMenu(false)}>
          <span>WK</span>
          <span className="wordmarkText">Will Kimball</span>
        </Link>

        <div className="desktopMenu">
          {navItems.map((item) => (
            <Link key={item.to} activeClass="active" to={item.to} spy smooth offset={-90} duration={500} className="desktopMenuListItem">
              {item.label}
            </Link>
          ))}
        </div>

        <Link className="navCta" to="contact" smooth offset={-70} duration={500}>
          Let's talk <span aria-hidden="true">↗</span>
        </Link>

        <button className="mobileMenuButton" type="button" aria-label={showMenu ? "Close navigation" : "Open navigation"} aria-expanded={showMenu} onClick={() => setShowMenu((open) => !open)}>
          {showMenu ? <FaTimes /> : <FaBars />}
        </button>

        {showMenu && (
          <div className="navMenu">
            {[...navItems, { to: "contact", label: "Contact" }].map((item) => (
              <Link key={item.to} to={item.to} smooth offset={-80} duration={500} className="mobileNavItem" onClick={() => setShowMenu(false)}>
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
