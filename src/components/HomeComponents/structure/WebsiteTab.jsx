import React from 'react'
import { websiteData } from '../../../Data'
import Slider from 'react-slick'
import { Card, Flex, Space, Typography } from 'antd'

const { Title } = Typography

const WebsiteTab = () => {
    const Websites = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 991, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 767, 
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }

    return (
        <div>
            <Slider {...Websites}>
                {
                    websiteData?.map((items, index) =>
                        <div className='px-3' key={index}>
                            <Space direction='vertical' size={20} className='h-100 w-100'>
                                <img src={`assets/images/portfolio/website/${items?.img}`} className='rounded-12' width='100%' />
                                <Flex vertical gap={5}>
                                    <Title level={4} className='head-font text-white m-0 px-3'>
                                        {items?.title}
                                    </Title>
                                    <Title level={5} className='head-font text-white fw-400 m-0 px-3 fs-16'>
                                        {items?.subtitle}
                                    </Title>
                                </Flex>
                            </Space>
                        </div>
                    )
                }
            </Slider>
        </div>
    )
}

export { WebsiteTab }
