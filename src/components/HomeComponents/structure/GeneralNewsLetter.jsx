import React from 'react';
import { Button, Col, Flex, Row, Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

const GeneralNewsLetter = () => {
  const { t } = useTranslation();

  return (
    <div className="">
      <div className="container">
        <div className="whychoose">
          <div className="newsletter">
            <Row gutter={[24, 24]} justify="center">
              <Col lg={12} md={24} sm={24} xs={24}>
                <Flex vertical gap={55} className="text-center" align="center">
                  <Title level={1} className="head-font fw-700 text-white m-0">
                    {t("Let’s develop something innovative together")}
                  </Title>
                  <Flex justify="center">
                    <Button type="primary" className="metaverse-btn">
                      <span className="metaverse-btn-text">
                        {t("Let's connect with us")}
                      </span>
                      <span className="metaverse-btn-glow"></span>
                    </Button>
                  </Flex>
                </Flex>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export { GeneralNewsLetter };
