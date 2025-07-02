"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { HelpCircle, ChevronDown, Equal } from "lucide-react";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(false);
  const pathname = usePathname();

  const isLoginPage = pathname === "/";

  const handleProfileClick = () => {
    setOpenDropdown(!openDropdown);
  }

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 1.5rem",
        height: 48,
        backgroundColor: "#1d1d1d",
        color: "white",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Left section - Apple logo, App name and navigation */}
      <div style={{ display: "flex", alignItems: "center" }} className="ml-[-10px]">
        {/* Apple Logo */}
        <Equal />
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-menu-icon lucide-menu"><path d="M4 12h16" /><path d="M4 18h16" /><path d="M4 6h16" /></svg> */}
        <svg width="16" height="16" viewBox="0 0 814 1000" fill="currentColor" className="mb-1 mr-2 ml-4">
          <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76.5 0-103.7 40.8-165.9 40.8s-105.6-57-155.5-127c-54.7-77.4-96.7-194.1-96.7-313.1 0-200.8 130.4-306.1 259.3-306.1 67.9 0 124.1 44.3 166.7 44.3 40.8 0 103.9-47.6 181.2-47.6 29.3 0 106.7 2.6 157.6 78.9-3.9 2.6-91.8 52.9-91.8 158.6M579.8 123.4c35.2-42.9 58.9-102.6 58.9-162.2 0-8.4-.8-16.8-2.1-24.7-56.1 2.1-123.4 37.7-166.3 82.6-31.2 32.4-57.8 74.7-57.8 135.4 0 9.9 1.7 19.5 2.6 22.5 4.2.6 8.6 1.1 13 1.1 50.2 0 114.8-33.7 151.6-54.7" />
        </svg>

        <div style={{ fontWeight: "500", fontSize: 18, color: "white", display: "flex", cursor: "pointer" }}>
          Clear To Build
          <ChevronDown size={16} style={{ marginLeft: 4, color: "#9ca3af" }} className="mt-1" />
        </div>

        <div className="text-[gray] ml-4" style={{ cursor: "pointer" }}>
          Dashboard
        </div>

        {/* {!isLoginPage && (
          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            {[...Array(5)].map((_, index) => (
              <a
                key={index}
                href="#"
                style={{
                  color: "#9ca3af",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: "500",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => e.target.style.color = "white"}
                onMouseLeave={(e) => e.target.style.color = "#9ca3af"}
              >
                Navitem
              </a>
            ))}
          </div>
        )} */}
      </div>

      {/* Right section */}
      {isLoginPage ? (
        <button
          style={{
            backgroundColor: "white",
            color: "#1f2937",
            padding: "2px 10px",
            border: "none",
            borderRadius: 4,
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => alert("Request Access clicked!")}
        >
          Request Access
        </button>
      ) : (
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Icons section */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.15rem" }}>
            {/* <button
              style={{
                background: "none",
                border: "none",
                color: "#9ca3af",
                cursor: "pointer",
                padding: "4px",
                transition: "color 0.2s",
              }}
              // onMouseEnter={(e) => e.target.style.color = "white"}
              // onMouseLeave={(e) => e.target.style.color = "#9ca3af"}
            >
              <Search size={20} />
            </button> */}
            {/* <button
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                padding: "4px",
                transition: "color 0.2s",
              }}
            // onMouseEnter={(e) => e.target.style.color = "white"}
            // onMouseLeave={(e) => e.target.style.color = "#9ca3af"}
            >
              <Bell size={20} />
            </button> */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#fff" width="20" height="30" style={{ cursor: "pointer" }}>
              <path d="M12 2C10.34 2 9 3.34 9 5V6.29C6.72 7.17 5 9.42 5 12V17L3 19V20H21V19L19 17V12C19 9.42 17.28 7.17 15 6.29V5C15 3.34 13.66 2 12 2ZM12 22C13.1 22 14 21.1 14 20H10C10 21.1 10.9 22 12 22Z" />
            </svg>
            <button
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                padding: "4px",
                transition: "color 0.2s",
              }}
            // onMouseEnter={(e) => e.target.style.color = "white"}
            // onMouseLeave={(e) => e.target.style.color = "#9ca3af"}
            >
              <HelpCircle size={20} />
            </button>
            <div className="text-[gray] ml-4">|</div>
            {/* <button
              style={{
                background: "none",
                border: "none",
                color: "#9ca3af",
                cursor: "pointer",
                padding: "4px",
                transition: "color 0.2s",
              }}
              // onMouseEnter={(e) => e.target.style.color = "white"}
              // onMouseLeave={(e) => e.target.style.color = "#9ca3af"}
            >
              <Settings size={20} />
            </button> */}
          </div>

          {/* User profile */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              padding: "0.5rem 0.75rem",
              borderRadius: "0.5rem",
              transition: "background-color 0.2s",
            }}
            onClick={handleProfileClick}
          // onMouseEnter={(e) => e.target.style.backgroundColor = "#374151"}
          // onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
          >
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                backgroundColor: "black",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: "500",
                marginRight: 8,
              }}
              className="outline"
            >
              TP
            </div>
            <span style={{ fontSize: 14, fontWeight: "500" }}>Tejas</span>
            <ChevronDown size={16} style={{ marginLeft: 4, color: "#9ca3af" }} />
            <div className="dropdown-menu" style={{ display: openDropdown ? 'block' : 'none' }}>
              <p className="dropdown-title">
                Signed in as Tejas Patil
              </p>
              <hr className="dropdown-divider" />
              <p className="dropdown-subtitle">Role Selection</p>
              <div className="region-list">
                {/* {userList.map((name) => ( */}
                <div
                  // key={name}
                  className={`dropdown-item ${openDropdown ? 'selected' : ''}`}
                  onClick={() => ''}
                >
                  <span className="checkmark">
                    {openDropdown && '✔'}
                  </span>
                  {/* {name} */}Tejas
                </div>
                {/* ))} */}
              </div>
              <hr className="dropdown-divider" />
              <div className="logout" onClick={() => ''}>Sign Out</div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}