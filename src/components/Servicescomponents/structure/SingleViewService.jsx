import React from 'react'
import { useParams } from 'react-router-dom'
import { Breadcrumb } from '../../Breadcrumb'
import { Mainsection } from './Mainsection'
import { servicesData } from '../../../Data'
import { Faq } from './Faq'
const SingleViewService = () => {
  const service_id = useParams();
  const singleServicedata =  servicesData.find(item => item.key == service_id)
  return (
    <div className='m-top-110'>
    <Breadcrumb title='Services' pageName='Services' breadcrumb={[{to:'/',name:'Servcices'}]}/>
    <Mainsection/>
    <Faq/>
    </div>
  )
}

export {SingleViewService} 