import React from 'react'
import { Row, Col, Typography, Flex, Card, Image } from 'antd'
import { servicesData } from '../../../Data';
import { NavLink } from 'react-router-dom';
const { Text, Title } = Typography;
const Ourservices = () => {
  return (
    <section className='padding-main'>
      <div className='container'>
        <Row justify={'center'}>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 18 }} lg={{ span: 12 }}>
            <Flex vertical gap={20}>
              <Title className='head-color text-center head-family m-0' level={2}>Our Services</Title>
              <Text className='para-color text-center fs-14 para-family'>At Repla, our mission is to provide comprehensive digital solutions, prioritizing user experience, search engine optimization, and cutting-edge technology to drive growth and success for our clients.</Text>
              <Flex justify='center'>
              <NavLink to={'/'} className='bg-transparent border0 fs-15 head-color head-family'>Request Our Services</NavLink>
              </Flex>
            </Flex>
          </Col>
        </Row>
        <Row gutter={[24,24]} className='mt-2'>
        {
          servicesData?.map((sdata, index) => (
            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }} key={index}>
              <NavLink to={``}>
              <div className='bordereffect h-100'>
                <Card className='card-shadow border0 h-100 bg-black'>
                  <Flex vertical gap={10}>
                    <span>
                      <Image src={`/assets/images/${sdata?.img}`} preview={false} />
                    </span>
                    <Title className='m-0 head-color head-family' level={4}>{sdata?.heading}</Title>
                    <Text className='para-color fs-14 para-family'>{sdata?.desc}</Text>
                  </Flex>
                </Card>
              </div>
              </NavLink>
            </Col>
          ))
        }
        </Row>
      </div>
    </section>
  )
}

export { Ourservices }