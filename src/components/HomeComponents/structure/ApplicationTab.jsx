import React from 'react'
import { applicationData } from '../../../Data'
import { Col, Row } from 'antd'

const ApplicationTab = () => {
    return (
        <Row gutter={[24, 24]}>
            {
                applicationData?.map((items, index) =>
                    <Col lg={{ span: 6 }} md={{ span: 8 }} sm={{ span: 12 }} xs={{ span: 24 }} key={index}>
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
                    </Col>
                )
            }
        </Row>
    )
}

export { ApplicationTab }
