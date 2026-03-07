import React from 'react';
import { Col, Row, Typography, Flex } from 'antd';
import { ApplicationTab } from './ApplicationTab';
import { useTranslation } from 'react-i18next';
import { WebsiteTab } from './WebsiteTab';

const { Title, Text } = Typography;

function PortfolioComponent() {
  const { t } = useTranslation();
  const [activeKey, setActiveKey] = React.useState('1');

  return (
    <div className="pad-common intro">
      <div className="container">
        <Row gutter={[24, 24]}>
          <Col span={12}>
            <Flex justify="start" vertical gap={5}>
              <Text className="text-brand head-font text-uppercase fs-18">
                {t('Some recent work')}
              </Text>
              <Title level={1} className="head-font fw-700 text-white m-0">
                {t('Our Portfolios')}
              </Title>
            </Flex>
          </Col>

          <Col span={24}>
            <div>
              <ApplicationTab />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export { PortfolioComponent };
