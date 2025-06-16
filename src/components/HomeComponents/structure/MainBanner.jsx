import { Flex, Space, Typography } from 'antd'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const { Title, Text } = Typography
const MainBanner = () => {

    const navigate = useNavigate()

  return (
    <div className='main-banner'>
        <div className='banner-overlay'></div>
        <div className='container'>
            <Space direction='vertical' size={80}>
                <Space direction='vertical' size={25}>
                    <Text className='text-brand head-font text-uppercase fs-18'>Repla Technologies Pvt. Ltd</Text>
                    <Title level={1} className='head-font fs-65 fw-700 text-white m-0 mb-2'>
                        Innovative <span className='text-brand'>Digital Solutions</span> <br /> for Modern Business
                    </Title>
                    <Text className='text-white fw-400 para-font fs-18'>
                        Leading IT company that specializes in delivering top-quality services to clients across different industries.
                    </Text>
                </Space>
                <Link to={'https://calendly.com/hr-replatech'} className="metaverse-btn para-font" target='_blank'>
                    <span className="metaverse-btn-text">Apply For Meeting</span>
                    <span className="metaverse-btn-glow"></span>
                </Link>
                <Link to="#" className="cs-down_btn"></Link>
            </Space>
        </div>
    </div>
  )
}

export {MainBanner}