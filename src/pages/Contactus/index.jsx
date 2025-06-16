import React from 'react'
import { Breadcrumb, Formsection } from '../../components'
import { Col, Row } from 'antd'

const Contactus = () => {
  return (
    <div className='m-top-80'>
      <Breadcrumb title='Contact Us' pageName='Contact Us' breadcrumb={[{to:'/',name:'REPLA Technologies Pvt Ltd'}]}/>
      <Formsection />
      <Row>
        <Col span={24}>
          <div className='iframe'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9582117.683645044!2d-15.01291801618464!3d54.102392749083535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x25a3b1142c791a9%3A0xc4f8a0433288257a!2sUnited%20Kingdom!5e0!3m2!1sen!2s!4v1733487787998!5m2!1sen!2s" width="100%" height="450" style={{ border: 0, borderRadius: 12 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export {Contactus}