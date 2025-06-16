import React, { useEffect, useState } from 'react'
import './index.css'
import { Row, Col, Image, Space, Typography, Divider, Flex, message } from 'antd'
import { Link, NavLink } from 'react-router-dom'

const { Title, Text } = Typography
const Footer = () => {




    const data = [
        {
            heading:'Quick Links',
            listdetail: [
                {
                    to:'/',
                    text:'Home'
                },
                {
                    to:'/aboutus',
                    text:'About Repla Technologies'
                },
                // {
                //     to:'/',
                //     text:"Careers In Repla"
                // },
                // {
                //     to:'/',
                //     text:"Our Portfolio"
                // },
                {
                    to:'/contactus',
                    text:"Contact Us"
                },
                {
                    to:'/privacypolicy',
                    text:"Privacy Policy"
                },
                {
                    to:'/termsconditions',
                    text:"Terms and Conditions"
                }
            ],
        },
        {
            heading:'Services',
            listdetail: [
                {
                    to:'/',
                    text:'Artificial Intelligence'
                },
                {
                    to:'/',
                    text:'Internet of things (IOT)'
                },
                {
                    to:'/',
                    text:"Web3 & Blockchain"
                },
                {
                    to:'/',
                    text:"Custom Software Development"
                },
                {
                    to:'/',
                    text:"Mobile App development"
                },
                {
                    to:'/',
                    text:"WEB app development"
                },
                {
                    to:'/',
                    text:"UI/UX"
                },
            ],
        },
    ]

    
    const contactinfo = [
        {
            id: 1,
            icon:'mail.png',
            link1:'info@replatechnologies.co.uk',
            linked1:'mailto:info@replatechnologies.co.uk',
            link2:'hr.replatech@gmail.com',
            linked2:'mailto:hr.replatech@gmail.com'
        },
        {
            id: 2,
            icon:'call.png',
            link1:'+92 335 0970604 (HR)',
            linked1:'tel:+923350970604',
            link2:'+92 336 3334161 (Talk to our Representative)',
            linked2:'tel:+923363334161'
        },
        {
            id: 3,
            icon:'map.png',
            link1: "Riyadh - Taif Road, RIYADH, 'Asir SA, Riyadh, Saudi Arabia",
            linked1:'https://maps.app.goo.gl/waMNEr3jfExSyemn9',
        },
    ]
  return (
    <div className='footer'>
        <div className='inner-footer'>
            <div className='container'>
                <Row gutter={[24,12]} justify={'space-between'}>
                    <Col lg={{span: 6}} md={{span: 24}} xs={{span: 24}} sm={{span: 24}}>
                        <Space direction='vertical' size={50} className='w-100'>
                            <Flex vertical gap={20}>
                                <Link to={'/'}>
                                    <img src='/assets/images/logo.png' width={90} height={90} />
                                </Link>
                                <Text className='text-gray text-15'>
                                    Leading IT company that specializes in delivering top-quality services to clients across different industries.
                                </Text>
                            </Flex>
                            
                            <Flex vertical gap={30}>
                                <Title level={5} className='text-white m-0 head-font fs-18'>Follow Up</Title>
                                <Space size={10} className='social-media'>
                                    <Link to='' target="_blank" rel="noopener noreferrer">
                                        <Image src='/assets/icons/fb.png' width={'13px'} style={{display:'flex'}} preview={false} />
                                    </Link>
                                    <Link to="#" target="_blank" rel="noopener noreferrer">
                                        <Image src='/assets/icons/inst.png' width={'13px'} style={{display:'flex'}} preview={false} />
                                    </Link>
                                    <Link to="#" target="_blank" rel="noopener noreferrer">
                                        <Image src='/assets/icons/lk.png' width={'13px'} style={{display:'flex'}} preview={false} />
                                    </Link>
                                    <Link to="#" target="_blank" >
                                        <Image src='/assets/icons/tw.png' width={'13px'} style={{display:'flex'}} preview={false} />
                                    </Link>
                                    <Link to="#" target="_blank" >
                                        <Image src='/assets/icons/yt.png' width={'13px'} style={{display:'flex'}} preview={false} />
                                    </Link>
                                </Space>
                            </Flex>
                        </Space>
                    </Col>
                    
                    {
                        data?.map((items, index)=>
                        <Col lg={{span: 6}} md={{span: 24}} xs={{span: 24}} sm={{span: 24}} key={index}>
                            <Space direction='vertical' size={30}>
                                <Title className='text-white m-0 head-font fs-18' level={5}>
                                    {
                                        items?.heading
                                    }
                                </Title>
                                <ul className='ul-f m-0'>
                                    {
                                        items?.listdetail?.map((list,i)=>
                                            <li key={'menu'+ i}>
                                                 <NavLink 
                                                        to={list?.to} 
                                                        >
                                                        {list?.text}
                                                    </NavLink>
                                            </li>
                                        )
                                    }
                                </ul>
                            </Space>
                        </Col>
                        )
                    }

                    <Col lg={{span: 6}} md={{span: 24}} xs={{span: 24}} sm={{span: 24}}>
                        <Space direction='vertical' size={30}>
                            <Title className='text-white m-0 head-font fs-18' level={5}>
                                Contact Info
                            </Title>
                            {
                                contactinfo?.map((details,index)=>
                                    <Space direction='vertical' size={5} key={index}>
                                        <img src={"/assets/icons/"+details?.icon} width={20} alt="" />
                                        {
                                            details?.id === 3 ? 
                                            <Link to={details?.linked1} className='a'>{details?.link1}</Link>
                                            :
                                            <>
                                                <Link to={details?.linked1} className='a'>{details?.link1}</Link>
                                                <Link to={details?.linked2} className='a'>{details?.link2}</Link>
                                            </>
                                        }
                                    </Space>
                                )
                            }
                        </Space>
                    </Col>
                    <Col span={24}>
                        <Divider className='my-2 bg-gray'/>
                        <Flex justify='center' wrap  className='w-100 pt-2' gap={20}>
                            <Typography.Text className='text-15'>
                                Repla Technologies All right reserved. © 2025
                            </Typography.Text>
                        </Flex>
                    </Col>
                </Row>
            </div>
        </div>
    </div>
  )
}

export {Footer}