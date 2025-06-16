import React from 'react'
import { Row, Col, Flex, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
const { Text, Title } = Typography
const Mainsection = () => {
  return (
    <section className='padding-main'>
      <div className='container'>
        <Row gutter={[24, 24]}>
          <Col xs={{span:24}} sm={{span:24}} md={{span:10}} lg={{span:10}} xl={{span:10}}>
            <div className='singleviewimg'>
            <img src='/assets/images/ai.webp'/>
            </div>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 14 }} lg={{ span: 14 }} xl={{ span: 14 }}>
            <Flex vertical gap={10}>
              <Title level={5} className='m-0 text-brand'>Digital Marketing</Title>
              <Title className='head-color head-family m-0' level={2}>Repla is transforming Business Through AI & ML Solutions</Title>
              <Title level={5} className='para-color head-family m-0'>
                AI and ML solutions are transforming industries, offering businesses smarter, data-driven solutions to optimize operations, enhance decision-making, and open up new opportunities.
              </Title>
              <Text className='fs-14 para-color para-family'>
                They enhance decision-making by processing vast amounts of data to uncover valuable insights that human analysts may overlook, allowing business leaders to make informed and accurate choices. One of the most powerful advantages is automation, as AI systems can automate repetitive tasks, improving productivity, reducing human error, and driving cost savings.
              </Text>
              <Text className='fs-14 para-color para-family'>
                At REPLA Technologies, we understand the growing demand for AI based solutions to improve data analysis, automation, enabling businesses to derive actionable insights from large volumes of structured and unstructured data to improve strategies, services, and products. We have created multiple AI based solutions ranging from chatbots to AI based platforms and websites.
              </Text>
              <Flex>
                <NavLink to={'/'} className='bg-transparent border0 fs-15 head-color head-family'>Request Our Services</NavLink>
              </Flex>
            </Flex>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export { Mainsection } 