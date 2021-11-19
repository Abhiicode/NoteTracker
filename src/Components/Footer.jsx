import React from "react";

const Footer = () => {
  const year = new Date();
  return (
    <div>
      <footer className="foot">
        <p>copyright Ⓒ {year.getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Footer;
