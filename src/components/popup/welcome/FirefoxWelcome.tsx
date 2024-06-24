import React, { useEffect, useState } from "react";
import "./FirefoxWelcome.css";

// Components
import Logo from "../../../assets/general/Logo";

export default function Welcome() {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowWarning(true);
    }, 4000);
  }, []);

  return (
    <div className="welcome-screen-container">
      <>
        <div className="welcome-screen-welcome-container">
          <Logo color="#fff" />
        </div>
        <div className="welcome-screen-main-container">
          <p className="welcome-screen-heading">
            Welcome to Universal Notes for Firefox.
          </p>
          <p className="welcome-screen-text">
            Learn how to enable the necessary permissions for this extension
            below.
          </p>
          <a
            href="https://www.universalnotes.org/firefox"
            className="welcome-screen-button"
          >
            Get Started
          </a>
        </div>
      </>
    </div>
  );
}
