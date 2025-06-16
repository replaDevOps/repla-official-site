import React from 'react'
import { Avatar, Card, Col, Flex, Image, Rate, Row, Space, Typography } from 'antd'
import Slider from 'react-slick';
import { testimonialData } from '../../../Data';

const { Text, Title } = Typography
const TestimonialSlider = () => {

    
    
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        arrows:false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    

    return (
        <div className='pad-common intro'>
            <div className='container'> 
                <Row gutter={[24,34]} justify={'center'}>
                    <Col lg={{span:14}} xs={{span:24}}>
                        <Flex justify='center' vertical align='center' gap={15}>
                            <Text className='text-brand para-font text-center fs-18'>
                                Feedback
                            </Text>
                            <Title level={1} className='head-font fw-700 text-white m-0'>
                                What our clients are saying?
                            </Title>
                        </Flex>
                    </Col>
                    <Col span={24}>
                        <Slider {...settings} className="professional-testimonial-slider">
                            {testimonialData.map((testimonial) => (
                            <div key={testimonial.id} className="px-3 h-100">
                                <Card className="bg-secondary border0 h-100">
                                    <div className="quote-icon quote-left" >
                                        <img src="/assets/icons/quote-left.png"  alt="" />
                                    </div>
                                    <div className="text-white testimonial-content mb-2 h-100">
                                        <p>{testimonial.content}</p>
                                    </div>
                                    <Space size={20} className='h-100'>
                                        <Avatar src={testimonial.avatar} size={50} />
                                        <Flex vertical gap={5}>
                                            <Title level={5} className='m-0 head-font text-white'>
                                                {
                                                    testimonial?.name
                                                }
                                            </Title>
                                            <Text className='para-font text-white fs-13'>
                                                {
                                                    testimonial?.role
                                                }
                                            </Text>
                                        </Flex>
                                    </Space>
                                </Card>
                            </div>
                            ))}
                        </Slider>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export {TestimonialSlider}