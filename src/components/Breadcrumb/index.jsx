import React from 'react'
import { Flex, Typography } from 'antd'
import { NavLink } from 'react-router-dom'
import './index.css'

const { Title, Text } = Typography

const Breadcrumb = ({title,pageName,breadcrumb}) => {
  return (
    <div className='breadcrumb-cs'>
        <div className='container' >
            <Flex justify='center' className='mb-2'>
                <Title level={1} className='head-font fw-700 text-white m-0'>{title}</Title>
            </Flex>
            <Flex justify='center'>
                {
                    breadcrumb.map(
                        (breadCrumb,index)=> 
                            <Text strong key={'bread-crumb-'+index}>
                                <NavLink to={breadCrumb?.to} className='text-para fs-18 para-font text-gray fw-400'>{breadCrumb?.name}</NavLink>
                                <span className="mx-2 text-white">/</span>
                            </Text>
                        )
                }
                <Text className="text-para fs-18 para-font fw-400">{pageName}</Text>
            </Flex>
        </div>
    </div>
  )
}

export {Breadcrumb}