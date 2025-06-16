import React from 'react';
import { Card, Col, Image, Row, Typography } from 'antd';
import Marquee from 'react-easy-marquee';

const { Title } = Typography;

const services = [
  { title: 'Software ', subtitle: 'Development' },
  { title: 'Website ', subtitle: 'Development' },
  { title: 'Mobile App', subtitle: 'Development' },
  { title: 'Digital', subtitle: 'Marketing' },
  { title: 'Blockchains', subtitle: 'Development' },
  { title: 'Game', subtitle: 'Development' },
  { title: 'UI / UX', subtitle: 'Designing' },
];

const logos = [
  { img: 'js.png' },
  { img: 'html.png' },
  { img: 'react.png' },
  { img: 'angular.png' },
  { img: 'bit.png' },
  { img: 'figma.png' },
  { img: 'flutter.png' },
];

const CompanyIntroMarquee = () => {
  return (
    <div className='marquee-shadow'>
      <Row gutter={[24, 24]}>
        <Col span={16}>
          <div>
            <Marquee
              duration={10000}
              height="600px"
              width="100%"
              axis="Y"
              pauseOnHover={false}
              reverse={false}
            >
              {services?.map((service, index) => (
                <Card 
                  key={index} 
                  className='card-marq w-100'
                >
                  <Title level={5} className='fs-18 head-font text-white m-0'>
                    {service.title}
                  </Title>
                  <Title level={5} className='fs-18 head-font text-white m-0'>
                    {service.subtitle}
                  </Title>
                </Card>
              ))}
            </Marquee>
          </div>
        </Col>
        <Col span={8}>
          <div>
            <Marquee
              duration={10000}
              height="600px"
              width="100%"
              axis="Y"
              pauseOnHover={false}
              reverse={true}
            >
              {logos?.map((logo, i) => (
                <div key={i} style={{ paddingBottom: 20 }}>
                  <Image 
                    src={`/assets/images/${logo.img}`}
                    preview={false}
                    width={100}
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export { CompanyIntroMarquee };