import React from "react";

function Footer() {
  const years = new Date().getFullYear();
  return (
    <>
      <footer>
        <p>copyright ©️ {years}</p>
      </footer>
    </>
  );
}

export default Footer;
