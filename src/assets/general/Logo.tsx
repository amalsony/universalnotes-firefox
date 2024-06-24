import React from "react";
import "./Logo.css";
import LogoSVG from "../svgs/Logo";

export default function Logo({ color, ...props }) {
  return (
    <div>
      <a
        href="https://www.universalnotes.org"
        target="_blank"
        rel="noreferrer"
        className="logo-container"
      >
        <LogoSVG width={22} height={22} color={color} />
        <h1 className="logo-title" style={{ color: color }}>
          UniversalNotes
        </h1>
      </a>
    </div>
  );
}
