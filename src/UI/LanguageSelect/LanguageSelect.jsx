import React, { useState } from "react";

const languageOptions = [
  {
    id: "en",
    name: "English",
    flagimg:
      "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg",
  },
  {
    id: "ru",
    name: "Русский",
    flagimg:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1280px-Flag_of_Russia.svg.png",
  },
  {
    id: "de",
    name: "Deutsch",
    flagimg: "https://cdn-icons-png.flaticon.com/512/552/552040.png",
  },
];

const defaultLangFlag = (
  <img
    src={languageOptions[0].flagimg}
    height="30"
    width="30"
    style={{ position: "relative" }}
    alt="nope"
  />
);

const LanguageSelect = () => {
  const [cssDisplay, setCssDisplay] = useState("none");
  const [langFlag, setLangFlag] = useState(defaultLangFlag);

  const showDropdown = () => {
    if (cssDisplay === "none") {
      setCssDisplay("block");
    } else {
      setCssDisplay("none");
    }
  };

  const selectListItem = (event) => {
    handleLanguageChange(event);
    setCssDisplay("none");
    setLangFlag(
      <img src={event.target.src} height="30" width="30" alt="nope" />
    );
  };

  const handleLanguageChange = (event) => userLanguageChange(event);
  const userLanguageChange = (event) => {
    console.log("Here grab event.target.id and propagate lang change to app");
  };

  return (
    <div>
      <button
        style={{
          border: "none",
          backgroundColor: "transparent",
          cursor: "pointer",
        }}
        onClick={showDropdown}
      >
        {langFlag}
      </button>
      <ul style={{ display: cssDisplay, position: "absolute", zIndex: "1" }}>
        {languageOptions.map((lang) => (
          <li
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              marginBottom: "5px",
            }}
            id={lang.id}
            key={lang.id}
            disabled
          >
            <img
              onClick={selectListItem}
              src={lang.flagimg}
              height="30"
              width="30"
              alt="flagpic"
              id={lang.id}
              style={{ cursor: "pointer" }}
            />
            {lang.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageSelect;
