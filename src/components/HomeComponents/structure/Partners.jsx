import React from 'react'
import { Col, Row, Typography } from 'antd'
import { partnerData } from '../../../Data'
import Marquee from 'react-fast-marquee'

const { Title } = Typography
const Partners = () => {
  return (
    <div className='pad-common'>
        <div className='container'>
            <Row gutter={[24,34]} justify={'center'} align={'middle'}>
                <Col lg={{span: 8}} md={{span: 8}} sm={{span: 24}} xs={{span: 24}}>
                    <Title level={1} className='head-font fw-700 text-white m-0'>
                        Our Business Partners
                    </Title>
                </Col>
                <Col lg={{span: 16}} md={{span: 16}} sm={{span: 24}} xs={{span: 24}}>
                    <Marquee 
                        gradientWidth={200} 
                        gradient={true} 
                        gradientColor='rgba(17, 17, 17, 1), rgba(17, 17, 17, 0)'
                        direction='right'
                    >
                        {
                            partnerData?.map((items,index) =>
                                <div className='mx-2' key={index}>
                                    <img src={'/assets/images/'+items?.img} className='rounded-12' width={200} alt='' />
                                </div>
                            )
                        }
                    </Marquee>
                </Col> 
            </Row>
        </div>
    </div>
  )
}

export {Partners}