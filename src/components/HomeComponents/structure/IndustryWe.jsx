import React, { useState } from 'react'
import { Col, Row, Image, Space, Typography, Flex, Card } from 'antd'
import { IndustryData } from '../../../Data'
const {Title, Text}= Typography

function IndustryWe() {

    const [industrydata, setIndustryData] = useState(IndustryData)
    const [selectindustry, setSelectIndustry] = useState(0)
  return (
    <div className='pad-common intro'>
        <div className='container'> 
            <Row gutter={[24,34]}>
                <Col lg={{span:24}} xs={{span:24}}>
                    <Flex justify='center' vertical align='center' gap={5}>
                        <Text className='text-brand head-font text-uppercase fs-18'>
                            {industrydata[selectindustry]?.subtitle}
                        </Text>
                        <Title level={1} className='head-font fw-700 text-white m-0'>{industrydata[selectindustry]?.title}</Title>
                    </Flex>
                </Col>
                <Col span={24}>
                    <Row gutter={[32,32]}>
                        {
                            industrydata[selectindustry]?.listItem?.map((industry,i)=>
                            <Col lg={{span:8}} md={{span:12}} xs={{span:24}} key={i}>
                                <div className='industries rounded-12 h-100'>
                                    <div className='one animation brand-bg'></div>
                                    <div className='two animation brand-bg'></div>
                                    <Card className='three animation bg-transparent border0'>
                                        <Flex vertical align='center' gap={10} >
                                            <img src={'/assets/images/industry/'+industry?.iconBrand} width='90px' className='iconBrand animation mb-2'/>
                                            <img src={'/assets/images/industry/'+industry?.iconWhite} width='90px' className='iconWhite animation mb-2'/>
                                            <Title level={4} className='text-white'>{industry?.title}</Title>
                                            <Text className='text-center text-white'>
                                                {
                                                    industry?.desc
                                                }
                                            </Text>
                                        </Flex>
                                    </Card>
                                </div>
                            </Col>
                            )
                        }
                    </Row>
                </Col>
            </Row>
        </div>
    </div>
  )
}

export {IndustryWe}