import React from 'react'
import { morreAppData } from '../../../Data'
import { Col, Row } from 'antd'
import Slider from 'react-slick'

const MoreTab = () => {

    const MoreItem = {
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
        <>
            <Slider {...MoreItem}>
                {
                    morreAppData?.map((items, index) =>
                        <div className='px-3' key={index}>
                            <div className="video-container">
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    className='w-100 video-fixed-height'
                                >
                                    <source
                                        src={'assets/images/videos/' + items?.video}
                                        type="video/mp4"
                                    />
                                </video>
                            </div>
                        </div>
                    )
                }
            </Slider>
        </>
    )
}

export { MoreTab }
