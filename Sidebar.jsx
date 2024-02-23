import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "./logo1.png";


const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaTh />,
    },
    {
      path: "/about",
      name: "AboutMe",
      icon: <FaUserAlt />,
    },
    {
      path: "/analytics",
      name: "Project",
      icon: <FaRegChartBar />,
    },
    {
      path: "/comment",
      name: "Skills",
      icon: <FaCommentAlt />,
    },
    {
      path: "/product",
      name: "ContactMe",
      icon: <FaShoppingBag />,
    },
  ];
  return (
    <div className="container" >
      <div style={{ width: isOpen ? "200px" : "50px" } } className="sidebar">
        <div className="top_section">
          <img   style={{ display: isOpen ? "block" : "none" }} className="logo"/ >
          
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassname="active"
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
