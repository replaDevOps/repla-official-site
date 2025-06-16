import React, { useRef, useState } from 'react'
import { Card, Col, Collapse, Flex, Row, Space, Typography, theme, } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Faqsider } from './Faqsider'

const { Text, Title } = Typography
const { useToken } = theme
const { Panel } = Collapse;
const Faq = () => {
    const { token } = useToken()
    const [currentPanel, setCurrentPanel] = useState(['0'])
    const data = [
        {
            heading: 'What AI solutions does Repla Technologies offer?',
            desc: 'Repla Technologies provides AI solutions such as natural language processing (NLP), machine learning (ML) algorithms, predictive analytics, computer vision, and AI-powered automation tools.'
        },
        {
            heading: 'How can AI benefit my business?',
            desc: 'AI can benefit your business by improving operational efficiency, enhancing customer engagement through personalized experiences, optimizing decision-making processes, and unlocking new revenue streams through innovative AI-driven products and services.'
        },
        {
            heading: 'Is AI implementation complex for businesses?',
            desc: 'Repla Technologies simplifies AI implementation for businesses by offering tailored solutions, comprehensive training, and ongoing support to ensure a seamless integration and adoption of AI technologies.'
        },
    ]

    return (
        <div className='padding-main'>
            <div className='container'>
                <Card className='bg-transparent border0' >
                    <Row gutter={[24, 32]} justify={'center'}>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 10 }} lg={{ span: 10 }} xl={{ span: 10 }}>
                            <Faqsider />
                        </Col>
                        <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 14 }} lg={{ span: 14 }} xl={{ span: 14 }}>
                            <Space direction='vertical' style={{ width: '100%' }} size={25}>
                                <Collapse
                                    defaultActiveKey={['0']}
                                    onChange={(keys) => { setCurrentPanel(keys) }}
                                    ghost
                                >
                                    {
                                        data?.map((faq, f) =>
                                            <Panel className={currentPanel.includes(String(f)) ? 'panel-active panel' : 'panel'} showArrow={false} header={<Title level={4} className='m-0' style={{ color: token?.colorTextLightSolid }}>{faq?.heading}</Title>} key={f}
                                                extra={((currentPanel?.findIndex(x => x == f)) > -1) ?
                                                    <PlusOutlined
                                                        style={{ transform: "rotate(45deg)", color: token?.colorTextLightSolid, transition: 'transform 0.2s ease-in-out', fontSize: 20 }} />
                                                    :
                                                    <PlusOutlined
                                                        style={{ transform: "rotate(0deg)", color: token?.colorTextLightSolid, transition: 'transform 0.2s ease-in-out', fontSize: 20 }} />}
                                            >
                                                <div>
                                                    <Text className='fs-16' style={{ color: token?.colorTextLightSolid }}>
                                                        {faq?.desc}
                                                    </Text>
                                                </div>
                                            </Panel>
                                        )
                                    }
                                </Collapse>
                            </Space>
                        </Col>
                    </Row>
                </Card>
            </div>
        </div>
    )
}

export { Faq }