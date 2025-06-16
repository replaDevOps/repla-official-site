import React from 'react'
import { Row, Col, Card, Space, Typography, Image } from 'antd'
import { NavLink } from 'react-router-dom';
import { servicesData } from '../../../Data';
const { Text } = Typography
const Faqsider = () => {
    return (
        <div>
            <Card className='card-shadow border0 h-100 bg-black'>
                <Row gutter={[24, 24]}>
                    {
                        servicesData?.map((service, index) => (
                            <Col span={24} key={index}>
                                <NavLink>
                                    <Space>
                                        <Image src='/assets/icons/copy.png' width={25} preview={false}/>
                                        <Text className='para-color para-family fs-15'>{service?.heading}</Text>
                                    </Space>
                                </NavLink>
                            </Col>
                        ))
                    }
                </Row>
            </Card>
        </div>
    )
}

export { Faqsider } 