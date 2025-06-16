import React from 'react'
import Marquee from 'react-fast-marquee'
import { servicesData } from '../../../Data'
import { Button, Card, Col, Flex, Image, Row, Typography } from 'antd'
import { Link } from 'react-router-dom'

const { Text, Title } = Typography
const ServicesMarquee = () => {
  return (
    <div className='pad-common intro'>
        <div className='container'> 
            <Row gutter={[24,34]} justify={'center'}>
                <Col lg={{span:14}} xs={{span:24}}>
                    <Flex justify='center' vertical align='center' gap={15}>
                        <Title level={1} className='head-font fw-700 text-white m-0'>Our Services</Title>
                        <Text className='text-white para-font text-center fs-16'>
                            At Repla, our mission is to provide comprehensive digital solutions, prioritizing user experience, search engine optimization, and cutting-edge technology to drive growth and success for our clients.
                        </Text>
                    </Flex>
                </Col>
                <Col span={24}>
                    <Row gutter={24}>
                        <Col span={24}>
                            <Marquee
                                gradientWidth={300}
                                gradient={true}
                                gradientColor="rgba(23, 19, 19, 1), rgba(23, 19, 19, .2)"
                                className="marquee-cs"
                            >
                                {
                                    servicesData?.map((sdata, index) => (
                                        <div className='bordereffect h-100 py-2' key={index}>
                                            <Card className='card-shadow border0 h-100 bg-black'>
                                                <Flex vertical gap={10} align='center'>
                                                    <Image src={`/assets/images/${sdata?.img}`} preview={false} />
                                                    <Title className='m-0 head-color head-family' level={5}>{sdata?.heading}</Title>
                                                </Flex>
                                            </Card>
                                        </div>
                                    ))
                                } 
                            </Marquee>
                        </Col>
                        <Col span={24}>
                            <Marquee
                                gradientWidth={300}
                                gradient={true}
                                gradientColor="rgba(23, 19, 19, 1), rgba(23, 19, 19, .2)"
                                className="marquee-cs"
                                direction='right'
                            >
                                {
                                    servicesData?.map((sdata, index) => (
                                        <div className='bordereffect h-100 py-2' key={index}>
                                            <Card className='card-shadow border0 h-100 bg-black'>
                                                <Flex vertical gap={10} align='center'>
                                                    <Image src={`/assets/images/${sdata?.img}`} preview={false} />
                                                    <Title className='m-0 head-color head-family' level={5}>{sdata?.heading}</Title>
                                                </Flex>
                                            </Card>
                                        </div>
                                    ))
                                } 
                            </Marquee>
                        </Col>
                    </Row>
                </Col>
                <Col span={24}>
                    <Flex justify='center'>
                        <Button type='primary' className="metaverse-btn para-font">
                            <span className="metaverse-btn-text">Request Our Services</span>
                            <span className="metaverse-btn-glow"></span>
                        </Button>
                    </Flex>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export {ServicesMarquee}