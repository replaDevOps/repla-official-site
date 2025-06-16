import React from 'react'
import { Button, Col, Flex, Row, Space, Typography } from 'antd'

const { Title, Text } = Typography
const Whoweare = () => {
  return (
    <div className='pad-common intro'>
        <div className='container'>
            <Row gutter={[24,24]} align={'middle'} justify={'space-between'}>
                <Col lg={10} md={24} xs={24} sm={24}>
                    <div className='div-ab'>
                        <div className='left-ab'>
                            <img src="/assets/images/ab.webp" className='rounded-12 w-100' alt="" />
                        </div>
                    </div>
                </Col>
                <Col lg={12} md={24} xs={24} sm={24}>
                    <Space direction='vertical' size={30}>
                        <Flex vertical gap={15}>
                            <Text className='text-brand para-font fs-18'>
                                Repla Technologies
                            </Text>
                            <Title level={1} className='head-font fw-700 text-white m-0'>
                                Who we are?
                            </Title>
                        </Flex>
                        <Flex vertical gap={20}>
                            <Text className='text-white fw-400 para-font fs-18'>
                                Repla a leading software development company delivering customized digital solutions to clients worldwide. Our team of over 200+ expert developers, designers, and innovators has designed and delivered over 2000+ digital solutions. This allows us to launch next-generation applications and solutions that are both efficient and secure.
                            </Text>
                            <Text className='text-white fw-400 para-font fs-18'>
                                Our team of developers, designers, and innovators are located across the globe, ensuring that we can deliver exceptional solutions to our clients.
                            </Text>
                        </Flex>
                        <Button type='primary' className="metaverse-btn" >
                            <span className="metaverse-btn-text">Let's Start</span>
                            <span className="metaverse-btn-glow"></span>
                        </Button>
                    </Space>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export {Whoweare}