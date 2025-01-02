"use client";
import Link from "next/link";
import React, { useState } from "react";

export default function MenuToggler() {
  const [menuOpen, setMenuOpen] = useState(false);

  // function that toggles the menu
  const toggleMenu = () => setMenuOpen(!menuOpen);

  // function for closing the menu when the link is clicked
  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="">
      {/* Toggle Button */}
      <button
        onClick={toggleMenu}
        className="text-3xl font-bold pl-2 cursor-pointer"
      >
        {menuOpen ? (
          <i className="ri-close-large-line"></i> /* Close icon */
        ) : (
          <i className="ri-menu-3-line"></i> /* Menu icon */
        )}
      </button>

      {/* Responsive Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-gray-100 shadow-lg border-t-[1px] rounded-b-md h-fit w-full z-50 p-6 flex flex-col space-y-6 mt-24 border-b-2">

          <ul className="space-y-6 text-center">
            <li>
              <Link
                href="/"
                onClick={closeMenu}
                className="text-lg font-semibold text-gray-800 hover:text-blue-500"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/watches"
                onClick={closeMenu}
                className="text-lg font-semibold text-gray-800 hover:text-blue-500"
              >
                Watches
              </Link>
            </li>
            <li>
              <Link
                href="/shoes"
                onClick={closeMenu}
                className="text-lg font-semibold text-gray-800 hover:text-blue-500"
              >
                Shoes
              </Link>
            </li>
          </ul>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Search..."
              className="w-full px-4 py-2 border rounded-md"
            />
            <button className="w-full px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Sign In
            </button>
          </div>

        </div>

      )}
    </div>
  );
}
