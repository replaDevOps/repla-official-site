import React, { useRef } from 'react';
import { Col, Flex, Row, Typography } from 'antd';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useTranslation } from 'react-i18next';

const { Title, Text } = Typography;

const WhyChooseUs = () => {
  const { t } = useTranslation();
  const targetRef = useRef(null);
  const isInView = useInView(targetRef, { once: true });

  const data = [
    {
      duration: 14,
      title: t('Years of Experience'),
    },
    {
      duration: 50,
      title: t('Industries Served'),
    },
    {
      duration: 500,
      title: t('Long-standing Clients'),
    },
    {
      duration: 1000,
      title: t('Successful Projects'),
    },
  ];

  return (
    <div ref={targetRef}>
      <div className='container'>
        <div className='whychoose'>
          <div className='whyinner'>
            <Row gutter={[24, 24]} align='middle'>
              <Col lg={12} md={24} sm={24} xs={24}>
                <Flex vertical gap={5}>
                  <Title level={1} className='head-font fw-700 text-white m-0'>
                    {t('Why Choose Us?')}
                  </Title>
                  <Text className='text-para head-font fs-18'>
                    {t('We just meet your expectations.')}
                  </Text>
                </Flex>
              </Col>
              <Col lg={12} md={24} sm={24} xs={24}>
                <Row gutter={[24, 64]}>
                  {data?.map((item, index) => (
                    <Col span={12} key={index}>
                      <Flex align='center' wrap gap={20}>
                        <Title level={2} className='para-font fw-700 text-white m-0'>
                          {isInView ? <CountUp duration={2} end={item.duration} /> : 0}
                        </Title>
                        <Flex vertical gap={0}>
                          <span className='cs-accent_color'>+</span>
                          <Text className='text-para head-font fs-18'>
                            {item.title}
                          </Text>
                        </Flex>
                      </Flex>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export { WhyChooseUs };
