import React from 'react'
import { Col, Flex, Image, Row, Typography } from 'antd'

const { Title, Text } = Typography
const OurHistory = () => {
  return (
    <div className='pad-common intro'>
            <div className='container'>
            <Row gutter={[64, 24]} align={'middle'}>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                    <div>
                        <Image src="assets/images/history.svg" preview={false} width={'70%'} className='rounded-12' alt="" />
                    </div>
                </Col>
                <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                    <Flex vertical gap={20}>
                        <Title level={1} className='head-font fw-700 text-white m-0'>Our History</Title>
                        <Text className='text-white fw-400 para-font fs-18'>
                            We are committed to simplifying the way people find and hire experts by offering a reliable platform that promotes quality work, honest communication, and lasting results. Whether it's a home renovation, a commercial build, or a quick repair, we aim to match every client with the right pro for the job—quickly and confidently.
                        </Text>
                    </Flex>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export {OurHistory}