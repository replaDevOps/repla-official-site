import React, { useEffect } from 'react';
import { Button, Card, Col, Flex, Image, Row, Typography } from 'antd';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import { getServicesData } from '../../../Data';
import { useSelector } from 'react-redux';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { Text, Title } = Typography;

const ServicesMarquee = () => {
  const { t, i18n } = useTranslation();
  const { language } = useSelector((state) => state?.app);

  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'en';
    i18n.changeLanguage(lang);
    document.body.dir = i18n.dir();
  }, []);

  const servicesData = getServicesData(t);

  const settings = {
    dots: false,
    
  arrows: false,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    rtl: language === 'ar',
    autoplay: true,
    autoplaySpeed:1500,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 992,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="pad-common intro">
      <div className="container">
        <Row gutter={[24, 34]} justify="center">
          <Col lg={14} xs={24}>
            <Flex justify="center" vertical align="center" gap={15}>
              <Title level={1} className="head-font fw-700 text-white m-0">
                {t('Our Services')}
              </Title>
              <Text className="text-white para-font text-center fs-16">
                {t(
                  'At Repla, our mission is to provide comprehensive digital solutions, prioritizing user experience, search engine optimization, and cutting-edge technology to drive growth and success for our clients.'
                )}
              </Text>
            </Flex>
          </Col>

          <Col span={24}>
            <Slider {...settings}>
              {servicesData.map((sdata, index) => (
                <div key={index} style={{ padding: '0 10px' }}>
                  <Card className="card-shadow border0 h-100 bg-black mx-2">
                    <Flex vertical gap={10} align="center">
                      <Image
                        src={`/assets/images/${sdata.img}`}
                        preview={false}
                        alt={sdata.heading}
                      />
                      <Title className="m-0 head-color head-family" level={5}>
                        {sdata.heading}
                      </Title>
                    </Flex>
                  </Card>
                </div>
              ))}
            </Slider>
          </Col>

          <Col span={24}>
            <Flex justify="center">
              <Button type="primary" className="metaverse-btn para-font">
                <span className="metaverse-btn-text">{t('Request Our Services')}</span>
                <span className="metaverse-btn-glow"></span>
              </Button>
            </Flex>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export { ServicesMarquee };
