import React from "react";
import "./footer.css";

const Footer = () => (
  <footer className="footer">
    <div className="sectionShell footerInner">
      <span>© {new Date().getFullYear()} Will Kimball</span>
      <span>AI engineering · Data systems · Product</span>
      <a href="#intro">Back to top ↑</a>
    </div>
  </footer>
);

export default Footer;
