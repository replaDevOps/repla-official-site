import React from 'react'
import { Breadcrumb, GeneralNewsLetter, OurCoreValue, OurTeam, Partners, Whoweare } from '../../components'

const Aboutus = () => {
  return (
    <div className='m-top-110'>
      <Breadcrumb title='About Us' pageName='About Us' breadcrumb={[{to:'/',name:'REPLA Technologies Pvt Ltd'}]}/>
      <Whoweare />
      <OurCoreValue />
      <OurTeam />
      <Partners />
      <GeneralNewsLetter/>
    </div>
  )
}

export {Aboutus}