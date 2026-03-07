import { Flex, Space, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { actionsApi } from "../../../shared";

const { Title, Text } = Typography;

const titleVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const MainBanner = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [language, setLanguage] = useState(null);

  useEffect(() => {
    let storedLang = localStorage.getItem("lang");

    if (!storedLang) {
      storedLang = "en"; // default to Arabic
      localStorage.setItem("lang", "en");
    }

    setLanguage(storedLang);
    i18n.changeLanguage(storedLang);
    dispatch(actionsApi?.changeLanguage(storedLang));
    document.body.dir = i18n.dir(storedLang);
    document.documentElement.lang = storedLang;
  }, []);

  const handleChange = (value) => {
    setLanguage(value);
    localStorage.setItem("lang", value);
    i18n.changeLanguage(value);
    dispatch(actionsApi?.changeLanguage(value));
    document.body.dir = i18n.dir(value);
    document.documentElement.lang = value;
  };

  const items = [
    { label: "Arabic", key: 1, onClick: () => handleChange("ar") },
    { label: "English", key: 0, onClick: () => handleChange("en") },
  ];

  // Optional: prevent render until language is set
  if (!language) return null;

  return (
    <div className="main-banner">
      <div className="banner-overlay"></div>
      <div className="container">
        <Space direction="vertical" size={80}>
          <Space direction="vertical" size={25}>
            <Text className="text-brand head-font text-uppercase fs-18">
              {t("Repla Technologies Pvt. Ltd")}
            </Text>
            <motion.div
              variants={titleVariants}
              initial="hidden"
              animate="visible"
            >
              <Title
                level={1}
                className="head-font fs-65 fw-700 text-white m-0 mb-2"
              >
                {t("Artificial Intelligence / Web3")}{" "}
                <motion.span
                  className="text-brand"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  {t("Solutions")}
                </motion.span>
                <motion.span
                  style={{ paddingLeft: "15px" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  {t("for Modern Business")}
                </motion.span>
              </Title>
            </motion.div>

            <Text className="text-white fw-400 para-font fs-18">
              {t(
                "A premier IT firm dedicated to providing top-tier, customized technology solutions for clients across a wide range of industries.",
              )}
            </Text>
          </Space>
          <Link
            to={"https://calendly.com/hr-replatech"}
            className="metaverse-btn para-font"
            target="_blank"
          >
            <span className="metaverse-btn-text">{t("Apply For Meeting")}</span>
          </Link>
        </Space>
      </div>
    </div>
  );
};

export { MainBanner };
