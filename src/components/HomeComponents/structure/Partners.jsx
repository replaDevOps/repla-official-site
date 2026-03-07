import React from 'react';
import { Col, Row, Typography } from 'antd';
import { partnerData } from '../../../Data';
import Slider from 'react-slick';
import { useTranslation } from 'react-i18next';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const { Title } = Typography;

const Partners = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.dir() === 'rtl';

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: isRTL,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="pad-common">
      <div className="container">
        <Row gutter={[24, 34]} justify="center" align="middle">
          <Col lg={8} md={8} sm={24} xs={24}>
            <Title level={1} className="head-font fw-700 text-white m-0">
              {t('Our Business Partners')}
            </Title>
          </Col>
          <Col lg={16} md={16} sm={24} xs={24}>
            <Slider {...settings}>
              {partnerData?.map((items, index) => (
                <div key={index} className="px-2">
                  <img
                    src={`/assets/images/${items?.img}`}
                    className="rounded-12"
                    width={200}
                    alt="partner-logo"
                    style={{ margin: 'auto' }}
                  />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export { Partners };
