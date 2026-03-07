import React from "react";
import { Row, Col, Flex, Card, Form, Typography, Image, Button } from "antd";
import { motion } from "framer-motion";
import { MyInput } from "../../Forms";
import { useTranslation } from "react-i18next";
import "./index.css";

const { Title, Text } = Typography;

const Formsection = () => {
  const { t } = useTranslation();

  return (
    <section className="pad-common">
      <div className="container">
        <Row gutter={[16, 16]}>
          {/* Left Contact Info */}
          <Col xs={24} sm={24} md={12} lg={12}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeInOut" }}
              viewport={{ once: false }}
            >
              <Flex vertical gap={25}>
                <Flex vertical gap={20}>
                  <Title level={1} className="head-font fw-700 text-white m-0">
                    {t("Continue your journey")}
                  </Title>
                  <Text className="text-white fw-400 para-font fs-18">
                    {t("To")} <span className="text-brand">{t("explore")}</span>
                    , <span className="text-brand">{t("learn")}</span>,{" "}
                    {t("and")}{" "}
                    <span className="text-brand">{t("succeed")}</span>{" "}
                    {t("with us!")}
                  </Text>
                </Flex>

                {/* Call Us */}
                <Flex className="w-100" gap={10} align="center">
                  <span className="contact-badge">
                    <Image
                      src="assets/icons/call.webp"
                      width={25}
                      preview={false}
                    />
                  </span>
                  <Flex vertical gap={0}>
                    <Title level={5} className="m-0 text-white">
                      {t("Call Us")}
                    </Title>
                    <Title level={4} className="m-0 text-white">
                      +92 335 0970604 (HR)
                    </Title>
                  </Flex>
                </Flex>

                {/* Email Us */}
                <Flex className="w-100" gap={10} align="center">
                  <span className="contact-badge">
                    <Image
                      src="assets/icons/mail.webp"
                      width={25}
                      preview={false}
                    />
                  </span>
                  <Flex vertical gap={0}>
                    <Title level={5} className="m-0 text-white">
                      {t("Email Us")}
                    </Title>
                    <Title level={4} className="m-0 text-white">
                      hr.replatech@gmail.com
                    </Title>
                  </Flex>
                </Flex>

                {/* Location */}
                <Flex className="w-100" gap={10} align="center">
                  <span className="contact-badge">
                    <Image
                      src="assets/icons/location.webp"
                      width={25}
                      preview={false}
                    />
                  </span>
                  <Flex vertical gap={0}>
                    <Title level={5} className="m-0 text-white">
                      {t("Head Office")}
                    </Title>
                    <Title level={4} className="m-0 text-white">
                      Repla Technologies Inc. 1372 Fisher Ave. Burlington, ON
                      L7P 2L6 Canada
                    </Title>
                  </Flex>
                </Flex>
              </Flex>
            </motion.div>
          </Col>

          {/* Right Form */}
          <Col xs={24} sm={24} md={12} lg={12}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
              viewport={{ once: false }}
            >
              <Card className="h-100 contact-card shadow-c">
                <Form layout="vertical">
                  <Row gutter={[16, 16]}>
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <MyInput
                        label={t("First name")}
                        name="firstName"
                        placeholder={t("Enter first name")}
                      />
                    </Col>
                    <Col xs={24} sm={24} md={12} lg={12}>
                      <MyInput
                        label={t("Last name")}
                        name="lastName"
                        placeholder={t("Enter last name")}
                      />
                    </Col>
                    <Col xs={24}>
                      <MyInput
                        label={t("Subject")}
                        name="subject"
                        placeholder={t("Enter subject")}
                      />
                    </Col>
                    <Col xs={24}>
                      <MyInput
                        textArea
                        label={t("Message")}
                        name="note"
                        placeholder={t("Enter your message here...")}
                        rows={4}
                      />
                    </Col>
                    <Col xs={24}>
                      <Flex justify="end">
                        <Button type="primary" className="metaverse-btn">
                          <span className="metaverse-btn-text">
                            {t("Submit")}
                          </span>
                          <span className="metaverse-btn-glow"></span>
                        </Button>
                      </Flex>
                    </Col>
                  </Row>
                </Form>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export { Formsection };
