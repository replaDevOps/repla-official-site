import React, { useState, useEffect } from 'react';
import { Card, Col, Flex, Row, Typography } from 'antd';

const { Title, Text } = Typography
const OurCoreValue = () => {
//   const [activeIndex, setActiveIndex] = useState(-1);

//   useEffect(() => {
//     const handleScroll = () => {
//       const stackArea = document.querySelector('.stack-area');
//       const distance = window.innerHeight * 0.5;
//       const topVal = stackArea.getBoundingClientRect().top;
//       const index = Math.floor(-1 * (topVal / distance + 1));
      
//       setActiveIndex(Math.max(-1, Math.min(index, 3)));
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

    const [activeIndex, setActiveIndex] = useState(-1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial check
    checkIfMobile();
    
    // Add resize listener
    window.addEventListener('resize', checkIfMobile);
    
    // Only add scroll listener for desktop
    if (!isMobile) {
      const handleScroll = () => {
        const stackArea = document.querySelector('.stack-area');
        const distance = window.innerHeight * 0.5;
        const topVal = stackArea?.getBoundingClientRect().top || 0;
        const index = Math.floor(-1 * (topVal / distance + 1));
        
        setActiveIndex(Math.max(-1, Math.min(index, 3)));
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', checkIfMobile);
      };
    }

    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [isMobile]);

  const cards = [
    {
        color:'#000',
        sub: 'Our Mission',
        content: 'We are dedicated to delivering innovative solutions that help businesses achieve their goals.'
    },
    {
        color:'#000',
        sub: 'Our Vision',
        content: 'Our vision is to empower youth by giving them IT opportunities.'
    },
    {
        color:'#000',
        sub: 'Our History',
        content: 'We work with innovative organizations to help them accelerate their growth and achieve their goals.'
    },
  ];

  return (
    <div className="intro">
        <div className='container'>
            <div className='stack-area '>
                <div className='left'>
                    <Flex vertical gap={20}>
                        <Title level={1} className='head-font fw-700 text-white m-0'>Our Core Values</Title>
                        <Text className='text-white fw-400 para-font fs-18'>
                            We are committed to simplifying the way people find and hire experts by offering a reliable platform that promotes quality work, honest communication, and lasting results. Whether it's a home renovation, a commercial build, or a quick repair, we aim to match every client with the right pro for the job—quickly and confidently.
                        </Text>
                    </Flex>
                </div>
                <div className="right">
                    {cards.map((card, index) => (
                    <Card 
                        key={index}
                        className={`card-stack ${index <= activeIndex ? 'away' : ''}`}
                        style={{
                            backgroundColor: card.color,
                            transform: index <= activeIndex 
                                ? 'translateY(-120vh) rotate(-48deg)' 
                                : `rotate(${-10 * index}deg)`,
                            zIndex: cards.length - index
                        }}
                    >
                        <Title level={1} className='head-font fw-700 text-white m-0'>{card.sub}</Title>
                        <Text className='text-white fw-400 para-font fs-18'>
                            {card.content}
                        </Text>
                    </Card>
                    ))}
                </div>
            </div>
        </div>
    </div>
  );
};

export {OurCoreValue};