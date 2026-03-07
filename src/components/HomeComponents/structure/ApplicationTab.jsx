import React from 'react';
import { applicationData } from '../../../Data';
import Slider from 'react-slick';
import { Card, Flex } from 'antd';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ApplicationTab = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed:500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {applicationData?.map((items, index) => (
        <div key={index} >
          <Card className="card-shadow border0 h-100 bg-transparent">
            <Flex vertical  align="center">
              <div className="video-container">
                <video
                  autoPlay
                  loop
                  muted
                  className="w-100 video-fixed-height"
                >
                  <source
                    src={'/assets/images/videos/' + items?.video}
                    type="video/mp4"
                  />
                </video>
              </div>
            </Flex>
          </Card>
        </div>
      ))}
    </Slider>
  );
};

export { ApplicationTab };
