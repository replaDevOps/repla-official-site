import React from 'react';
import { Breadcrumb } from '../../components';
import { Card, Flex, Typography } from 'antd';
import { getPrivacyData } from '../../Data'; // Updated to dynamic function
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

const PrivacyPolicy = () => {
  const { t } = useTranslation();
  const privacyData = getPrivacyData(t); // now uses the translated content

  return (
    <div className="m-top-80">
      <Breadcrumb
        title={t('Privacy Policy')}
        pageName={t('Privacy Policy')}
        breadcrumb={[{ to: '/', name: t('REPLA Technologies Pvt Ltd') }]}
      />
      <div className="pad-common">
        <div className="container">
          <Card className="bg-transparent py-3 border0">
            {privacyData?.map((dat, index) => (
              <Flex vertical gap={10} className="mb-3" key={index}>
                <Title level={4} className="text-white m-0">
                  {dat?.title}
                </Title>
                <Text className="text-gray">{dat?.desc}</Text>
              </Flex>
            ))}
          </Card>
        </div>
      </div>
    </div>
  );
};

export { PrivacyPolicy };
