import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright ⓒ {year} RT Productions</p>
      <p>Made with ❤ by #laszlodev</p>
    </footer>
  );
}

export default Footer;