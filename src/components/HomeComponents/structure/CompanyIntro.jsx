import { Button, Col, Flex, Row, Space, Typography } from "antd";
import { CompanyIntroMarquee } from "./CompanyIntroMarquee";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const CompanyIntro = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <div className="pad-common intro">
      <div className="container">
        <Row gutter={[24, 24]} align={"middle"} justify={"space-between"}>
          <Col lg={8} md={12} xs={24} sm={24}>
            <CompanyIntroMarquee />
          </Col>
          <Col lg={14} md={12} xs={24} sm={24}>
            <Space direction="vertical" size={30}>
              <Title level={3} className="head-font fw-700 text-white m-0">
                {t("Who We Are")}
              </Title>
              <Flex vertical gap={20}>
                <Text className="text-white fw-normal para-font fs-18">
                  {t(
                    "At REPLA Technologies, we are driven by innovation and powered by purpose. We specialize in cutting-edge Artificial Intelligence and Web3 solutions that transform how modern businesses operate, scale, and connect. From smart automation to decentralized ecosystems, we don’t just build products — we engineer the future of digital experiences",
                  )}
                </Text>
              </Flex>
              <Button
                type="primary"
                className="metaverse-btn"
                onClick={() => navigate("/aboutus")}
              >
                <span className="metaverse-btn-text">{t("Know more")}</span>
                <span className="metaverse-btn-glow"></span>
              </Button>
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export { CompanyIntro };
