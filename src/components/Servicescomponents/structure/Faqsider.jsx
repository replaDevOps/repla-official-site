import React from "react";
import { Row, Col, Card, Space, Typography, Image } from "antd";
import { NavLink } from "react-router-dom";
import { getServicesData } from "../../../Data";
import { useTranslation } from "react-i18next";

const { Text } = Typography;

const Faqsider = () => {
  const { t } = useTranslation();
  const servicesData = getServicesData(t);
  return (
    <div>
      <Card className="card-shadow border0 h-100 bg-black">
        <Row gutter={[16, 16]}>
          {servicesData?.map((service, index) => (
            <Col span={24} key={index}>
              <NavLink to="#">
                {" "}
                {/* Replace '#' with actual route if needed */}
                <Space>
                  <Image
                    src="/assets/icons/copy.webp"
                    width={25}
                    preview={false}
                    alt="service-icon"
                  />
                  <Text className="para-color para-family fs-15">
                    {t(service?.heading || "Service")}
                  </Text>
                </Space>
              </NavLink>
            </Col>
          ))}
        </Row>
      </Card>
    </div>
  );
};

export { Faqsider };
