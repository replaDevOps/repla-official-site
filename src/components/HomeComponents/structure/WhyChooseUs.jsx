import React, { useRef } from 'react'
import { Col, Flex, Row, Typography } from 'antd'
import CountUp from "react-countup";
import { useInView } from "framer-motion";

const { Title, Text } = Typography
const WhyChooseUs = () => {
    const targetRef = useRef(null);
    const isInView = useInView(targetRef, { once: true });

    const data = [
        {
            duration: 14,
            title:'Years of Experience'
        },
        {
            duration: 100,
            title:'Industries Served'
        },
        {
            duration: 500,
            title:'Long-standing Clients'
        },
        {
            duration: 1000,
            title:'Successful Projects'
        },
    ]

  return (
    <div className='' ref={targetRef}>
        <div className='container'>
            <div className='whychoose'>
                <div className='whyinner'>
                    <Row gutter={[24,24]} align={'middle'}>
                        <Col lg={{span: 12}} md={{span:24}} sm={{span: 24}} xs={{span:24}}>
                            <Flex vertical gap={5}>
                                <Title level={1} className='head-font fw-700 text-white m-0'>Why Choose Us?</Title>
                                <Text className='text-para head-font fs-18'>
                                    We just meet your expectations.
                                </Text>
                            </Flex>
                        </Col>
                        <Col lg={{span: 12}} md={{span:24}} sm={{span: 24}} xs={{span:24}}>
                            <Row gutter={[24,64]}>
                                {
                                    data?.map((counDetail,index)=>
                                        <Col span={12} key={index}>
                                            <Flex align='center' wrap gap={20}>
                                                <Title level={2} className='para-font fw-700 text-white m-0'>
                                                    {isInView ? (
                                                        <CountUp duration={2} end={counDetail?.duration} />
                                                        ) : (
                                                        0
                                                    )}
                                                </Title>
                                                <Flex vertical gap={0}>
                                                    <span className="cs-accent_color">+</span>
                                                    <Text className='text-para head-font fs-18'>
                                                        {
                                                            counDetail?.title
                                                        }
                                                    </Text>
                                                </Flex>
                                            </Flex>
                                        </Col>
                                    )
                                }
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
  )
}

export {WhyChooseUs}