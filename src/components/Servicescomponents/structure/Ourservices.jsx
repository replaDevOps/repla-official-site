import React from 'react';
import { Row, Col, Typography, Flex, Card, Image } from 'antd';
import { getServicesData } from '../../../Data'; // ✅ Corrected name
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // ✅ Translation hook

const { Text, Title } = Typography;

const Ourservices = () => {
  const { t } = useTranslation();
  const servicesData = getServicesData(t); // ✅ Dynamically generate translations

  return (
    <section className='padding-main'>
      <div className='container'>
        <Row justify='center'>
          <Col xs={24} sm={24} md={18} lg={12}>
            <Flex vertical gap={20}>
              <Title className='head-color text-center head-family m-0' level={2}>
                {t('Our Services')}
              </Title>
              <Text className='para-color text-center fs-14 para-family'>
                {t('At Repla, our mission is to provide comprehensive digital solutions, prioritizing user experience, search engine optimization, and cutting-edge technology to drive growth and success for our clients.')}
              </Text>
              <Flex justify='center'>
                <NavLink to='/' className='bg-transparent border0 fs-15 head-color head-family'>
                  {t('Request Our Services')}
                </NavLink>
              </Flex>
            </Flex>
          </Col>
        </Row>

        <Row gutter={[24, 24]} className='mt-2'>
          {servicesData?.map((sdata, index) => (
            <Col xs={24} sm={24} md={12} lg={6} key={index}>
              <NavLink to='#'> {/* 🔁 Replace '#' with actual route if needed */}
                <div className='bordereffect h-100'>
                  <Card className='card-shadow border0 h-100 bg-black'>
                    <Flex vertical gap={10}>
                      <Image src={`/assets/images/${sdata?.img}`} preview={false} />
                      <Title className='m-0 head-color head-family' level={4}>
                        {sdata?.heading}
                      </Title>
                      {sdata?.desc && (
                        <Text className='para-color fs-14 para-family'>
                          {sdata?.desc}
                        </Text>
                      )}
                    </Flex>
                  </Card>
                </div>
              </NavLink>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export { Ourservices };
