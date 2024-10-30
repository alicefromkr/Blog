import React from "react";
import { Navbar } from "nextra-theme-docs";

const CustomNavbar = ({ items }) => {
  return (
    <div className="bg-sky-400 dark:bg-blue-400">
      <Navbar items={items} />
    </div>
  );
};

export default CustomNavbar;
