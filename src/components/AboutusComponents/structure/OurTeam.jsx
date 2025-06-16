import React from 'react'
import { Button, Card, Col, Flex, Image, Row, Space, Typography } from 'antd'
import { testimonialData } from '../../../Data';
import Slider from 'react-slick';

const { Title, Text } = Typography
const OurTeam = () => {

    const sliderRef = React.useRef(null);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
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
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
        ]
      };

    const data = [
        {
            img: 'team-m-1.png',
            title:'Muhammad Usman',
            subtitle:'CEO',
        },
        {
            img: 'team-f-1.png',
            title:'Mam Mudessra',
            subtitle:'Project Manager',
        },
        {
            img: 'team-m-2.png',
            title:'Abdul Hanan',
            subtitle:'CTO & Mern Stack Developer',
        },
        {
            img: 'team-m-3.png',
            title:'Shujat Ali',
            subtitle:'Senior Back-End Developer',
        },
        {
            img: 'team-m-4.png',
            title:'Muhammad Azeem',
            subtitle:'Senior Front End Developer',
        },
        {
            img: 'team-m-5.png',
            title:'Sheeraz Khan',
            subtitle:'Senior Front End Developer',
        },
        {
            img: 'team-m-6.png',
            title:'Zeeshan Hussain',
            subtitle:'Graphic & UI Designer',
        },
    ]

    return (
        <div className='pad-common intro'>
            <div className='container'>
                <Row gutter={[24,44]} align={'middle'} justify={'space-between'}>
                    <Col lg={12} md={24} xs={24} sm={24}>
                        <Flex vertical gap={15}>
                            <Text className='text-brand para-font fs-18'>
                                Our team
                            </Text>
                            <Title level={1} className='head-font fw-700 text-white m-0'>
                                Team of Experienced Professionals
                            </Title>
                        </Flex>
                    </Col>
                    <Col lg={12} md={24} xs={24} sm={24}>
                        <Flex justify="flex-end" gap={16}>
                            <Button 
                                
                                icon={<Image src="/assets/icons/prev.png" alt="Previous" preview={false} width={25} />} 
                                onClick={() => sliderRef.current.slickPrev()}
                                className="slider-arrow"
                            />
                            <Button 
                                icon={<Image src="/assets/icons/next.png" alt="Next" preview={false} width={25} />} 
                                onClick={() => sliderRef.current.slickNext()}
                                className="slider-arrow"
                            />
                        </Flex>
                    </Col>

                    <Col span={24}>
                        <Slider ref={sliderRef} {...settings} className="professional-testimonial-slider">
                            {data.map((team) => (
                            <div key={team.id} className="px-3 h-100">
                                <Card className="card-team bg-transparent border0 h-100">
                                    <img src={"/assets/images/"+team?.img} width={'100%'} className='rounded-12'  alt="" />
                                    <div className='mt-2 description-team'>
                                        <Flex vertical gap={5}>
                                            <Title level={5} className='m-0 head-font text-white'>{team?.title}</Title>
                                            <Text className='para-font text-gray'>{team?.subtitle}</Text>
                                        </Flex>
                                    </div>
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

export {OurTeam}