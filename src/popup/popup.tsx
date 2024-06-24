import React, { useState, useEffect } from "react";
import "./popup.css";

// Axios
import axios from "axios";

// Config
import { config } from "../config/config";

// Context
import { usePopup } from "../context/popupContext";

// Components
import LoginScreen from "../components/popup/LoginScreen";
import Main from "../components/popup/main/Main";
import AccessCodeScreen from "../components/popup/AccessCodeScreen";
import LoadingScreen from "../components/popup/LoadingScreen";
import Welcome from "../components/popup/welcome/FirefoxWelcome";

const Popup = () => {
  const { userInfo, setUserInfo, accessCodeRequired, setAccessCodeRequired } =
    usePopup();
  const [loading, setLoading] = useState(true);

  // Errors
  const [crossOriginPolicyError, setCrossOriginPolicyError] = useState(false);

  useEffect(() => {
    axios
      .get(
        `${
          config.environment === "development"
            ? config.developmentAPIURL
            : config.productionAPIURL
        }/auth/me`,
        { withCredentials: true }
      )
      .then((res) => {
        setUserInfo(res.data);
        setLoading(false);
      })
      .catch((e) => {
        // check if it's a cross origin policy error
        setCrossOriginPolicyError(true);
        setLoading(false);
      });

    axios
      .get(
        `${
          config.environment === "development"
            ? config.developmentAPIURL
            : config.productionAPIURL
        }/auth/access-code-required`
      )
      .then((res) => {
        setAccessCodeRequired(res.data.data);
      })
      .catch((e) => {
        // check if it's a cross origin policy error
        setCrossOriginPolicyError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="popup-container">
      {loading ? (
        <LoadingScreen />
      ) : crossOriginPolicyError ? (
        <Welcome />
      ) : userInfo ? (
        !accessCodeRequired || userInfo?.hasAccess ? (
          <Main />
        ) : (
          <AccessCodeScreen />
        )
      ) : (
        <LoginScreen />
      )}
    </div>
  );
};

export default Popup;
