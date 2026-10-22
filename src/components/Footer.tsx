import type React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
const Footer: React.FC = () => {
  const navlinks = [
    { title: "Portfolio", path: "/profile" },
    { title: "Expense", path: "/" },
    { title: "Report", path: "/dashboard" },
    { title: "LogIn", path: "/login" },
    { title: "SignUp", path: "/signup" },
    { title: "Gallery", path: "/gallery" },
  ];

  const socialMediaStyle = "hover:scale-110 transition-transform";
  const socialMediaIcons = [
    {
      url: "https://facebook.com",
      target: "_blank",
      re: "noopener noreferrer",
    },
    { url: "https://twitter.com", target: "_blank", re: "noopener noreferrer" },
    {
      url: "https://in.linkedin.com",
      target: "_blank",
      re: "noopener noreferrer",
    },
    {
      url: "https://youtube.com/abcrob",
      target: "_blank",
      re: "noopener noreferrer",
    },
  ];

  return (
    <div
      className="
    bg-blue-950/50 flex flex-col text-center items-center gap-2 max-w-300 ml-auto mr-auto
    sm:grid sm:grid-cols-3
    "
    >
      <div className="w-full h-50 max-w-120">
        <img
          className="w-full h-full object-cover transform translate-y-3"
          src={logo}
          alt="logo"
        />
      </div>
      <div
        className="
      grid grid-cols-2 mb-4
      "
      >
        {navlinks.map((links, index) => (
          <Link key={index} to={links.path} className="link-style">
            {links.title}
          </Link>
        ))}
      </div>

      <div
        className="
      flex flex-row gap-5 justify-center mb-5 w-fit ml-auto mr-auto
      sm:grid sm:grid-cols-2 sm:gap-5  
      "
      >
        {socialMediaIcons.map((icon, index) => (
          <SocialIcon
            key={index}
            url={icon.url}
            target={icon.target}
            rel={icon.re}
            className={socialMediaStyle}
            style={{ height: 40, width: 40 }}
          />
        ))}
      </div>
    </div>
  );
};
export default Footer;
