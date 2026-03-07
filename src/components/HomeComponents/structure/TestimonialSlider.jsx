import React, { useEffect, useState } from "react";
import { Avatar, Card, Col, Flex, Row, Space, Typography } from "antd";
import Slider from "react-slick";
import { getTestimonialData } from "../../../Data";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { actionsApi } from "../../../shared";

const { Text, Title } = Typography;

const TestimonialSlider = () => {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();
  const [language, setLanguage] = useState();

  useEffect(() => {
    const lang = localStorage.getItem("lang") || "en";
    setLanguage(lang);
    i18n.changeLanguage(lang);
    dispatch(actionsApi?.changeLanguage(lang));
    document.body.dir = i18n.dir();
  }, []);

  const testimonialData = getTestimonialData(t);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    rtl: i18n.dir() === "rtl",
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="pad-common intro">
      <div className="container">
        <Row gutter={[24, 34]} justify="center">
          <Col lg={14} xs={24}>
            <Flex justify="center" vertical align="center" gap={15}>
              <Text className="text-brand para-font text-center fs-18">
                {t("Feedback")}
              </Text>
              <Title level={1} className="head-font fw-700 text-white m-0">
                {t("What our clients are saying?")}
              </Title>
            </Flex>
          </Col>

          <Col span={24}>
            <Slider {...settings} className="professional-testimonial-slider">
              {testimonialData?.map((testimonial) => (
                <div key={testimonial.id} className="px-3 h-100">
                  <Card className="bg-secondary border0 h-100">
                    <div className="quote-icon quote-left">
                      <img src="/assets/icons/quote-left.webp" alt="quote" />
                    </div>
                    <div className="text-white testimonial-content mb-2 h-100">
                      <p>{testimonial.content}</p>
                    </div>
                    <Space size={20} className="h-100">
                      <Avatar src={testimonial.avatar} size={50} />
                      <Flex vertical gap={5}>
                        <Title level={5} className="m-0 head-font text-white">
                          {testimonial.name}
                        </Title>
                        <Text className="para-font text-white fs-13">
                          {testimonial.role}
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
  );
};

export { TestimonialSlider };
