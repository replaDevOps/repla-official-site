import React from 'react'
import { Button, Col, Flex, Row, Typography } from 'antd'

const { Title, Text } = Typography
const GeneralNewsLetter = () => {
  return (
    <div className=''>
        <div className='container'>
            <div className='whychoose'>
                <div className='newsletter'>
                    <Row gutter={[24,24]} justify={'center'}>
                        <Col lg={{span: 12}} md={{span:24}} sm={{span: 24}} xs={{span:24}}>
                            <Flex vertical gap={55} className='text-center' align='center'>
                                <Title level={1} className='head-font fw-700 text-white m-0'>
                                    Let’s develop something innovative together
                                </Title>
                                <Flex justify='center'>
                                    <Button type='primary' className="metaverse-btn" >
                                        <span className="metaverse-btn-text">Let's connect with us</span>
                                        <span className="metaverse-btn-glow"></span>
                                    </Button>
                                </Flex>
                            </Flex>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    </div>
  )
}

export {GeneralNewsLetter}