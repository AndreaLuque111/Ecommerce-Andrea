import React, { useState } from "react";
import "./css/Menu.css";

export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="nav_menu">
      <div className={`container_nav ${isOpen ? "show-nav" : ""}`}>
        <div className="circle-container">
          <div className="circle">
            <button id="close" onClick={toggle}>
              <i className="fas fa-times"></i>
            </button>
            <button onClick={toggle} id="open">
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </div>
      <nav className={`nav ${isOpen ? "show-nav" : ""}`}>
        <ul>
          <li>
            <i className="fas fa-home"></i> <a href="#">Home</a>
          </li>
          <li>
            <i className="fas fa-user-alt"></i>
            <a href="#">Contact</a>
          </li>
          <li>
          <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </nav>
  );
}
