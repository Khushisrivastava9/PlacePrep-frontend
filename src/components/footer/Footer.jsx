import React from "react";
import "./footer.css";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 PlacePrep Platform. All rights reserved. <br /> Made
          with ❤️ <a href="https://github.com/Khushisrivastava9">Khushi Srivastava</a>
        </p>
        <div className="social-links">
        <a href="https://www.linkedin.com/in/khushi-srivastava-ab029621b/">
            <FaLinkedin />
          </a>
          <a href="mailto:srivastavakhushi582@gmail.com">
            <IoIosMail />
          </a>
          <a href="https://x.com/KhushiSriv91812">
            <FaTwitter />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
