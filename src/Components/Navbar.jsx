import React, { useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../Style/Navbar.css";


function Navbar() {
  const navRef = useRef();
  const [language, setLanguage] = useState("RU");
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showBurger, setShowBurger] = useState(false);

  const ShowNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
    setShowBurger(!showBurger);
  };

  const handleChangeLanguage = (newLanguage) => {
    setLanguage(newLanguage);
    setDropdownVisible(false);
  };

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header className="header1">
      <div className="logo">
        <img
          src="https://download.logo.wine/logo/Ethereum/Ethereum-Logo.wine.png"
          alt="logo"
          width={100}
          height={70}
        />
      </div>

      <nav ref={navRef} className="nav-backgr">
        <NavLink to='/' >
        Главная</NavLink>
          
        <NavLink to="/about">
         О компании
        </NavLink>

        <NavLink to="/My-work">
          Мои работы
        </NavLink>

        <NavLink to="/contact">
          Контакты
        </NavLink>
        {/* change language */}
        <div className="language-switcher">
          <button className="button-lang" onClick={toggleDropdown}>
            {language}
          </button>
          <div className={`dropdown ${dropdownVisible ? "show" : ""}`}>
            <button onClick={() => handleChangeLanguage("RU")}>RU</button>
            <button onClick={() => handleChangeLanguage("EN")}>EN</button>
            <button onClick={() => handleChangeLanguage("RO")}>RO</button>
          </div>
        </div>
        {/* change lang end  */}
        <button className="nav-btn nav-close-btn" onClick={ShowNavbar}>
          <FaTimes />
        </button>
      </nav>

      <button
        className={`nav-btn ${showBurger ? "invisible" : ""}`}
        onClick={ShowNavbar}
      >
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
