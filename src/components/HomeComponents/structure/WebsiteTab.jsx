import React from 'react'
import { websiteData } from '../../../Data'
import { Col, Row } from 'antd'

const WebsiteTab = () => {
    return (
        <Row gutter={[24, 24]}>
            {
                websiteData?.map((items, index) =>
                    <Col lg={{ span: 6 }} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }} key={index}>
                        <div className="image-container">
                            <img
                                src={`assets/images/portfolio/website/${items?.img}`}
                                alt={items?.title || 'Website image'}
                                className='w-100 image-fixed-height'
                            />
                        </div>
                    </Col>
                )
            }
        </Row>
    )
}

export { WebsiteTab }
