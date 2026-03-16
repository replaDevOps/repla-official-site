import React, { useEffect, useState } from "react";
import { Row, Col, Image, Space, Typography, Divider, Flex } from "antd";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { actionsApi } from "../../../shared";
import "./index.css";

const { Title, Text } = Typography;

const Footer = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [langReady, setLangReady] = useState(false);

  useEffect(() => {
    let lang = localStorage.getItem("lang");
    if (!lang) {
      lang = "en";
      localStorage.setItem("lang", lang);
    }

    i18n.changeLanguage(lang).then(() => {
      document.documentElement.lang = lang;
      document.body.dir = i18n.dir(lang);
      dispatch(actionsApi?.changeLanguage(lang));
      setLangReady(true);
    });
  }, []);

  if (!langReady) return null; // optional: wait for language before render

  const data = [
    {
      heading: t("Quick Links"),
      listdetail: [
        { to: "/", text: t("Home") },
        { to: "/aboutus", text: t("About Repla Technologies") },
        { to: "/contactus", text: t("Contact Us") },
        { to: "/privacypolicy", text: t("Privacy Policy") },
        { to: "/termsconditions", text: t("Terms and Conditions") },
      ],
    },
    {
      heading: t("Services"),
      listdetail: [
        { to: "/", text: t("Artificial Intelligence") },
        { to: "/", text: t("Internet of things (IOT)") },
        { to: "/", text: t("Web3 & Blockchain") },
        { to: "/", text: t("Custom Software Development") },
        { to: "/", text: t("Mobile App development") },
        { to: "/", text: t("WEB app development") },
        { to: "/", text: t("UI/UX") },
      ],
    },
  ];

  const contactinfo = [
    {
      id: 1,
      icon: "mail.webp",
      link1: "info@replatechnologies.co.uk",
      linked1: "mailto:info@replatechnologies.co.uk",
      link2: "hr.replatech@gmail.com",
      linked2: "mailto:hr.replatech@gmail.com",
    },
    {
      id: 2,
      icon: "call.webp",
      // link1: '+92 335 0970604 (HR)',
      link1: "tel:+923350970604",
      // link2: '+92 336 3334161 (Talk to our Representative)',
      linked2: "tel:+923363334161",
    },
    {
      id: 3,
      icon: "map.webp",
      // link1: "شارع الأمير أحمد, Alkurnaish, Dammam 22252",
      link1:
        "Repla Technologies Inc. 1372 Fisher Ave. Burlington, ON L7P 2L6 Canada",
      linked1: "https://maps.app.goo.gl/waMNEr3jfExSyemn9",
    },
  ];

  return (
    <div className="footer">
      <div className="inner-footer">
        <div className="container">
          <Row gutter={[24, 12]} justify="space-between">
            <Col lg={6} md={24} xs={24}>
              <Space direction="vertical" size={50} className="w-100">
                <Flex vertical gap={20}>
                  <Link to="/">
                    <img
                      src="/assets/images/logo.png"
                      width={90}
                      height={90}
                      alt="logo"
                    />
                  </Link>
                  <Text className="text-gray text-15">
                    {t(
                      "Leading IT company that specializes in delivering top-quality services to clients across different industries.",
                    )}
                  </Text>
                </Flex>
                <Flex vertical gap={30}>
                  <Title level={5} className="text-white m-0 head-font fs-18">
                    {t("Follow Up")}
                  </Title>
                  <Space size={10} className="social-media">
                    <Link to="" target="_blank">
                      <img
                        src="/assets/icons/fb.webp"
                        width="13px"
                        preview={false}
                      />
                    </Link>
                    <Link to="" target="_blank">
                      <img
                        src="/assets/icons/lk.webp"
                        width="13px"
                        preview={false}
                      />
                    </Link>
                    <Link to="" target="_blank">
                      <img
                        src="/assets/icons/discord.webp"
                        width="13px"
                        preview={false}
                      />
                    </Link>
                    <Link
                      to="https://www.instagram.com/replacanada/"
                      target="_blank"
                    >
                      <img
                        src="/assets/icons/inst.webp"
                        width="13px"
                        preview={false}
                      />
                    </Link>
                    <Link to="https://x.com/replacanada" target="_blank">
                      <img
                        src="/assets/icons/tw.webp"
                        width="13px"
                        preview={false}
                      />
                    </Link>
                    <Link to="" target="_blank">
                      <img
                        src="/assets/icons/reddit.webp"
                        width="13px"
                        preview={false}
                      />
                    </Link>
                    <Link to="" target="_blank">
                      <img
                        src="/assets/icons/github.webp"
                        width="13px"
                        preview={false}
                      />
                    </Link>
                    <Link to="" target="_blank">
                      <img
                        src="/assets/icons/yt.webp"
                        width="13px"
                        preview={false}
                      />
                    </Link>
                  </Space>
                </Flex>
              </Space>
            </Col>

            {data.map((items, index) => (
              <Col lg={6} md={24} xs={24} key={index}>
                <Space direction="vertical" size={30}>
                  <Title className="text-white m-0 head-font fs-18" level={5}>
                    {items.heading}
                  </Title>
                  {items?.heading === "Services" ? (
                    <ul className="ul-f m-0">
                      {items.listdetail.map((list, i) => (
                        <li key={"menu" + i} style={{ listStyle: "none" }}>
                          {/* <NavLink to={list.to}></NavLink> */}
                          <Text className="text-white">{list.text}</Text>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <ul className="ul-f m-0">
                      {items.listdetail.map((list, i) => (
                        <li key={"menu" + i} style={{ listStyle: "none" }}>
                          <NavLink to={list.to}>{list.text}</NavLink>
                        </li>
                      ))}
                    </ul>
                  )}
                </Space>
              </Col>
            ))}

            <Col lg={6} md={24} xs={24}>
              <Space direction="vertical" size={30}>
                <Title className="text-white m-0 head-font fs-18" level={5}>
                  {t("Contact Info")}
                </Title>
                {contactinfo.map((details, index) => (
                  <Space direction="vertical" size={5} key={index}>
                    <img
                      src={`/assets/icons/${details.icon}`}
                      width={20}
                      alt=""
                    />
                    {details.id === 3 ? (
                      <Link to={details.linked1} className="a">
                        {details.link1}
                      </Link>
                    ) : (
                      <>
                        <Link to={details.linked1} className="a">
                          {details.link1}
                        </Link>
                        <Link to={details.linked2} className="a">
                          {details.link2}
                        </Link>
                      </>
                    )}
                  </Space>
                ))}
              </Space>
            </Col>

            <Col span={24}>
              <Divider className="my-2 bg-gray" />
              <Flex justify="center" wrap className="w-100 pt-2" gap={20}>
                <Text className="text-15">
                  {t("Repla Technologies All right reserved.")} ©{" "}
                  {new Date().getFullYear()}
                </Text>
              </Flex>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export { Footer };
