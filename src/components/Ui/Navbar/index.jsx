import React, { useState, useEffect } from "react";
import { Button, Flex, Dropdown, Space } from "antd";
import { Link } from "react-router-dom";
import { GlobalOutlined, DownOutlined } from "@ant-design/icons";
import { MobileMenu } from "./MobileMenu";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { actionsApi } from "../../../shared";
import "./index.css";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [visible, setVisible] = useState(true);
  const [mobileMenu, setMobileMenu] = useState(false);

  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en";
    i18n.changeLanguage(lang);
    document.body.dir = i18n.dir();
    dispatch(actionsApi.changeLanguage(lang));
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 10);
      setVisible(currentScrollY <= lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLanguageChange = ({ key }) => {
    localStorage.setItem("lang", key);
    i18n.changeLanguage(key);
    document.body.dir = i18n.dir(key);
    dispatch(actionsApi.changeLanguage(key));
  };

  const languageMenu = {
    items: [
      { key: "ar", label: "العربية" },
      { key: "en", label: "English" },
    ],
    onClick: handleLanguageChange,
  };

  return (
    <div>
      <nav
        className={`navbar ${isScrolled ? "scrolled" : ""} ${visible ? "visible" : "hidden"}`}
      >
        <div className="container">
          <div className="repla-navbar">
            <div className="navbar-logo">
              <Link to="/">
                <img src="/assets/images/logo.png" width={80} alt="logo" />
              </Link>
            </div>

            <div className="navbar-items w-100">
              <ul>
                <li>
                  <Link to="/">{t("HOME")}</Link>
                </li>
                <li>
                  <Link to="/aboutus">{t("ABOUT US")}</Link>
                </li>
                <li>
                  <Link to="/services">{t("SERVICES")}</Link>
                </li>
                <li>
                  <Link to="/contactus">{t("CONTACT US")}</Link>
                </li>
              </ul>
            </div>

            <Dropdown
              menu={languageMenu}
              trigger={["click"]}
              placement="bottomRight"
            >
              <Button type="text" className="lang-dropdown-btn">
                <Space>
                  <GlobalOutlined />
                  Language
                  <DownOutlined />
                </Space>
              </Button>
            </Dropdown>

            <div className="menu-bar">
              <Button
                type="primary"
                className="bg-transparent border0 p-0"
                onClick={() => setMobileMenu(true)}
              >
                <img src="/assets/icons/menu.webp" width={35} alt="menu" />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <MobileMenu visible={mobileMenu} onClose={() => setMobileMenu(false)} />
    </div>
  );
};

export { Navbar };
