import React from 'react'
import { Button, Col, Flex, Row, Space, Typography } from 'antd'
import { CompanyIntroMarquee } from './CompanyIntroMarquee'

const { Title, Text } = Typography
const CompanyIntro = () => {
  return (
    <div className='pad-common intro'>
        <div className='container'>
            <Row gutter={[24,24]} align={'middle'} justify={'space-between'}>
                <Col lg={8} md={12} xs={24} sm={24}>
                    <CompanyIntroMarquee />
                </Col>
                <Col lg={14} md={12} xs={24} sm={24}>
                    <Space direction='vertical' size={30}>
                        <Title level={1} className='head-font fw-700 text-white m-0'>Company Introduction</Title>
                        <Flex vertical gap={20}>
                            <Text className='text-white fw-700 para-font fs-18'>
                                Repla – Innovative and Adaptable Digital Solutions for Modern Business
                            </Text>
                            <Text className='text-white fw-normal para-font fs-18'>
                                Repla is a leading IT company that specializes in delivering top-quality services to clients across different industries. Our extensive experience in diverse sectors enables us to offer valuable insights and innovative solutions that guarantee customer satisfaction.
                            </Text>
                            <Text className='text-white fw-normal para-font fs-18'>
                                At Repla we specialize in providing innovative and adaptable digital solutions that empower businesses to compete in today’s fast-paced market and unlock new opportunities for growth.
                            </Text>
                        </Flex>
                        <Button type='primary' className="metaverse-btn" >
                            <span className="metaverse-btn-text">Know more</span>
                            <span className="metaverse-btn-glow"></span>
                        </Button>
                    </Space>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export {CompanyIntro}