import React from "react";
import style from "./header.module.scss";
import pattern from "../../assets/patern.png";
import LanguageSelect from "../../UI/LanguageSelect/LanguageSelect";

const Header = () => {
  return (
    <div className={style.container}>
      <nav>
        <h1>Uzbekistan</h1>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Tours</li>
          <li>Hotels</li>
          <li>Transport</li>
        </ul>
        <LanguageSelect />
      </nav>
      <main>
        <img src={pattern} alt="" />
        <div>
          <h1>Uzbekistan Tours</h1>
          <p>Embark on a journey to Uzbekistan, the land of ancient wonders.</p>
        </div>
      </main>
    </div>
  );
};

export default Header;
