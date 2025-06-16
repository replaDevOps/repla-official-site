import React from 'react'
import { Breadcrumb,Ourservices } from '../../components'

const Services = () => {
  return (
    <div className='m-top-110'>
      <Breadcrumb title='Services' pageName='Services' breadcrumb={[{to:'/',name:'REPLA Technologies Pvt Ltd'}]}/>
      <Ourservices/>
    </div>
  )
}

export {Services} 