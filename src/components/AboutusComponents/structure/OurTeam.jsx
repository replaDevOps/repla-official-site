import React, { useState } from "react";
import { Button, Card, Col, Flex, Image, Row, Space, Typography } from "antd";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { DownOutlined, UpOutlined } from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const OurTeam = () => {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState(null);
  const data = [
    { img: "team-m-1.jpg", title: t("Tyler Siple"), subtitle: t("President") },
    {
      img: "team-f-1.jpg",
      title: t("Maribel Siple"),
      subtitle: t("Sales Head"),
    },
    // { img: 'team-m-2.jpg', title: t('Mohammed Alwehaibi'), subtitle: t('Vice President') },
    // { img: 'team-m-3.jpg', title: t('Aamal (Sam)'), subtitle: t('Operational Manager') },
    // { img: 'team-m-4.jpg', title: t('Abdul Hanan'), subtitle: t('CTO & Full Stack Engineer') },
    // { img: 'team-m-5.jpg', title: t('Abdul Ahad'), subtitle: t('MERN Stack Engineer') },
    // { img: 'team-m-6.jpg', title: t('Uzair Afzal'), subtitle: t('Sales Executive') },
    // { img: 'team-m-7.jpg', title: t('Hammad Ahmed'), subtitle: t('Business Developer') },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="pad-common intro" style={{ padding: "60px 0" }}>
      <div className="container">
        <Row gutter={[24, 44]} align="middle">
          <Col lg={12} md={24}>
            <Flex vertical gap={15}>
              <Text className="text-brand para-font fs-18">
                {t("Our team")}
              </Text>
              <Title level={1} className="head-font fw-700 text-white m-0">
                {t("Our Team of Experienced Professionals")}
              </Title>
            </Flex>
          </Col>
        </Row>

        <Row gutter={[24, 32]} justify="center" style={{ marginTop: 40 }}>
          {data.map((member, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <motion.div
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                <Card
                  hoverable
                  className="team-card"
                  style={{
                    background: "#1a1d22",
                    borderRadius: 16,
                    border: "1px solid #2b2e34",
                    padding: 12,
                    textAlign: "center",
                    transition: "0.3s ease-in-out",
                  }}
                >
                  <Image
                    src={`/assets/images/${member.img}`}
                    alt={member.title}
                    width="100%"
                    preview={false}
                    style={{ borderRadius: 12, marginBottom: 16 }}
                  />
                  <Title level={5} style={{ color: "#fff", margin: 0 }}>
                    {member.title}
                  </Title>
                  <Text style={{ color: "#aaa" }}>{member.subtitle}</Text>
                  <Flex justify="center">
                    <Button
                      ghost
                      className="border0"
                      onClick={() =>
                        setExpanded(expanded === index ? null : index)
                      }
                    >
                      {expanded === index ? <UpOutlined /> : <DownOutlined />}
                    </Button>
                  </Flex>
                  {expanded === index && (
                    <Flex vertical gap={5} align="flex-start" className="mt-2">
                      <Text className="text-white" strong>
                        Details:
                      </Text>
                      <Paragraph className="text-gray text-left m-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Neque exercitationem corrupti iure similique.
                      </Paragraph>
                      <Space size={10} className="social-media mt-2">
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
                      </Space>
                    </Flex>
                  )}
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export { OurTeam };
