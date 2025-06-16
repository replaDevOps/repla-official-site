import React from 'react'
import { CompanyIntro, GeneralNewsLetter, IndustryWe, MainBanner, Partners, PortfolioComponent, ServicesMarquee, TestimonialSlider, WhyChooseUs } from '../../components'

const Home = () => {
  return (
    <div>
      <MainBanner />
      <CompanyIntro />
      <ServicesMarquee />
      <IndustryWe />
      <PortfolioComponent />
      <WhyChooseUs />
      <TestimonialSlider />
      <Partners />
      <GeneralNewsLetter />
    </div>
  )
}

export {Home}