import React, { useState, useEffect } from 'react'
import { Col, Row, Typography, Flex, Card } from 'antd'
import { getIndustryData } from '../../../Data'
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { actionsApi } from '../../../shared';

const { Title, Text } = Typography;

function IndustryWe() {
  const { t, i18n } = useTranslation();
  const dispatch = useDispatch();

  const [language, setLanguage] = useState();
  const [selectindustry, setSelectIndustry] = useState(0);

  useEffect(() => {
    let lang = localStorage.getItem("lang");
    setLanguage(lang || 'en');
    i18n.changeLanguage(lang || 'en');
    dispatch(actionsApi?.changeLanguage(lang || 'en'));
    document.body.dir = i18n.dir();
  }, []);

  const handleChnage = (value) => {
    setLanguage(value);
    localStorage.setItem("lang", value);
    i18n?.changeLanguage(value);
    document.body.dir = i18n.dir(value);
    dispatch(actionsApi?.changeLanguage(value));
  };

  const items = [
    { label: 'Arabic', key: 1, onClick: () => handleChnage('ar') },
    { label: 'Eng', key: 0, onClick: () => handleChnage('en') },
  ];

  const industrydata = getIndustryData(t);

  // Check that industrydata exists and has data
  const selectedIndustry = industrydata?.[selectindustry];

  return (
    <div className='pad-common intro'>
      <div className='container'>
        <Row gutter={[24, 34]}>
          <Col span={24}>
            <Flex justify='center' vertical align='center' gap={5}>
              <Text className='text-brand head-font text-uppercase fs-18'>
                {selectedIndustry?.subtitle || ""}
              </Text>
              <Title level={1} className='head-font fw-700 text-white m-0'>
                {selectedIndustry?.title || ""}
              </Title>
            </Flex>
          </Col>
          <Col span={24}>
            <Row gutter={[32, 32]}>
              {selectedIndustry?.listItem?.map((industry, i) => (
                <Col lg={8} md={12} xs={24} key={i}>
                  <div className='industries rounded-12 h-100'>
                    <div className='one animation brand-bg'></div>
                    <div className='two animation brand-bg'></div>
                    <Card className='three animation bg-transparent border0'>
                      <Flex vertical align='center' gap={10}>
                        <img
                          src={`/assets/images/industry/${industry.iconBrand}`}
                          width='90px'
                          className='iconBrand animation mb-2'
                        />
                        <img
                          src={`/assets/images/industry/${industry.iconWhite}`}
                          width='90px'
                          className='iconWhite animation mb-2'
                        />
                        <Title level={4} className='text-white'>{industry.title}</Title>
                        <Text className='text-center text-white'>
                          {industry.desc}
                        </Text>
                      </Flex>
                    </Card>
                  </div>
                </Col>
              )) || null}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export { IndustryWe };
