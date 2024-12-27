"use client";
import React from "react";
import { useState } from "react";

export default function MenuToggler() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  const menuToggler = () => setMenuOpen(!menuOpen);

  return (
    <div>
      <i
        className={`${menuOpen ? "ri-close-large-line" : "ri-menu-3-line"} text-3xl font-bold pl-2`}
        onClick={menuToggler}
      ></i>
    </div>
  );
}
