import React from 'react'
import { Col, Row, Typography, Flex, Tabs } from 'antd'
import { WebsiteTab } from './WebsiteTab'
import { ApplicationTab } from './ApplicationTab'
import { MoreTab } from './MoreTab'

const { Title, Text } = Typography

function PortfolioComponent() {
    const [activeKey, setActiveKey] = React.useState('1')

    const singleTab = [
        {
            key: '1',
            label: <Text strong className='text-white'>Website</Text>,
            children: <WebsiteTab />,
        },
        {
            key: '2',
            label: <Text strong className='text-white'>Application</Text>,
            children: <ApplicationTab />,
        },
        {
            key: '3',
            label: <Text strong className='text-white'>More</Text>,
            children: <MoreTab />,
        },
    ]

    return (
        <div className='pad-common intro'>
            <div className='container'> 
                <Row gutter={[24, 24]}>
                    {/* Title Section - 12 columns */}
                    <Col span={12}>
                        <Flex justify='start' vertical gap={5}>
                            <Text className='text-brand head-font text-uppercase fs-18'>
                                Some recent work
                            </Text>
                            <Title level={1} className='head-font fw-700 text-white m-0'>
                                Our Portfolios
                            </Title>
                        </Flex>
                    </Col>                    
                    <Col span={12}>
                        <Flex justify='end' align='flex-end' style={{ height: '100%' }}>
                            <Tabs 
                                activeKey={activeKey}
                                onChange={setActiveKey}
                                items={singleTab.map(tab => ({
                                    key: tab.key,
                                    label: tab.label
                                }))}
                            />
                        </Flex>
                    </Col>
                    <Col span={24}>
                        <div>
                            {singleTab.find(tab => tab.key === activeKey)?.children}
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export { PortfolioComponent }