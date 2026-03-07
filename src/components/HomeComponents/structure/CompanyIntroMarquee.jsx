import React, { useState, useEffect } from 'react';
import { Card, Col, Image, Row, Typography } from 'antd';
import Marquee from 'react-easy-marquee';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { actionsApi } from '../../../shared';

const { Title } = Typography;

const logos = [
  { img: 'js.png' },
  { img: 'html.png' },
  { img: 'Rust.png' },
  { img: 'react.png' },
  { img: 'angular.png' },
  { img: 'Node.png' },
  { img: 'bit.png' },
  { img: 'Ai.png' },
  { img: 'figma.png' },
  { img: 'flutter.png' },
  { img: 'iot.png' },
  { img: 'Solidity.png' },
];

const CompanyIntroMarquee = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [language, setLanguage] = useState();

  useEffect(() => {
    const lang = localStorage.getItem('lang') || 'en';
    setLanguage(lang);
    i18n.changeLanguage(lang);
    dispatch(actionsApi?.changeLanguage(lang));
    document.body.dir = i18n.dir(lang);
  }, [dispatch, i18n]);

  const handleChange = (value) => {
    setLanguage(value);
    localStorage.setItem('lang', value);
    i18n.changeLanguage(value);
    document.body.dir = i18n.dir(value);
    dispatch(actionsApi?.changeLanguage(value));
  };

  const services = [
    { title: t('Software'), subtitle: t('Development') },
    { title: t('Website'), subtitle: t('Development') },
    { title: t('Mobile App'), subtitle: t('Development') },
    { title: t('Blockchains'), subtitle: t('Development') },
    { title: t('UI / UX'), subtitle: t('Designing') },
  ];

  return (
    <div className='marquee-shadow'>
      <Row gutter={[24, 24]}>
        <Col span={16}>
          <Marquee
            duration={10000}
            height="600px"
            width="100%"
            axis="Y"
            pauseOnHover={false}
            reverse={false}
          >
            {services.map((service, index) => (
              <Card key={index} className='card-marq w-100'>
                <Title level={5} className='fs-18 head-font text-white m-0'>
                  {service.title}
                </Title>
                <Title level={5} className='fs-18 head-font text-white m-0'>
                  {service.subtitle}
                </Title>
              </Card>
            ))}
          </Marquee>
        </Col>
        <Col span={8}>
          <Marquee
            duration={10000}
            height="600px"
            width="100%"
            axis="Y"
            pauseOnHover={false}
            reverse={true}
          >
            {logos.map((logo, i) => (
              <div key={i} style={{ paddingBottom: 20 }}>
                <Image
                  src={`/assets/images/${logo.img}`}
                  preview={false}
                  width={100}
                  style={{ borderRadius: '10px' }}
                />
              </div>
            ))}
          </Marquee>
        </Col>
      </Row>
    </div>
  );
};

export { CompanyIntroMarquee };
