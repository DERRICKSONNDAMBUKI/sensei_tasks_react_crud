import React from "react";
import Button from "./Button";

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <div>
      <header className="header">
        <h1 style={{ color: "green" }}>{title}</h1>
        <Button
          color={showAdd?'red':'green'}
          text={showAdd ? "Close" : "Add"}
          onClick={onAdd}
        />
      </header>
    </div>
  );
};

// Header.defaultProps={
//     title:'Sensei React'
// }

export default Header;
