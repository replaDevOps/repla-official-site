import React from 'react';
import { Typography } from 'antd';
import { useTranslation } from 'react-i18next';

const { Title } = Typography;

const logos = [
  { name: 'Clutch', src: '/assets/images/clutch.png' },
  { name: 'GoodFirms', src: '/assets/images/goodfirms.jpg' },
  { name: 'DesignRush', src: '/assets/images/designrush.png' },
  { name: 'Tech Behemoths', src: '/assets/images/techbehemoths.png' },
  { name: 'TopDevelopers', src: '/assets/images/topdevelopers.png' },
  { name: 'BusinessFirms', src: '/assets/images/businessfirms.png' },
  { name: 'Crunchbase', src: '/assets/images/crunchbase.png' },
  { name: 'Upwork', src: '/assets/images/upwork.png' },
  { name: 'Fiverr', src: '/assets/images/fiverr.jpg' },
  { name: 'Freelancer', src: '/assets/images/freelancer.png' },
  { name: 'LinkedIn', src: '/assets/images/linkedin.png' },
];

const BrandTrustSection = () => {
  const { t } = useTranslation();

  return (
    <div className='intro'>
      <Title level={2} style={{ fontWeight: 'bold', color: 'white', textAlign: 'center' }}>
        {t('World-Renowned Brands Trust')}{' '}
        <span style={{ color: '#9D2B2A' }}>{t('Repla Technolagy')}</span>
      </Title>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '24px',
          marginTop: '40px',
        }}
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            style={{
              width: '230px',
              height: '100px',
              border: '1px solid #f0f0f0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '10px',
              backgroundColor: '#fff',
            }}
          >
            <img
              src={logo.src}
              alt={t(logo.name)} // translated alt text
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export { BrandTrustSection };
