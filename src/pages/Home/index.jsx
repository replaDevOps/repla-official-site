import React from 'react'
import { CompanyIntro, GeneralNewsLetter, IndustryWe, MainBanner, OurTeam, Partners, PortfolioComponent, ServicesMarquee, TestimonialSlider, WhyChooseUs } from '../../components'
import { BrandTrustSection } from '../../components/BrandComponent'

const Home = () => {
  return (
    <div>
      <MainBanner />
      <CompanyIntro />
      {/* <Partners /> */}
      <IndustryWe/>
      <OurTeam/>
      <ServicesMarquee />
      <BrandTrustSection/>
      <PortfolioComponent />
      <WhyChooseUs />
      <TestimonialSlider />
      <GeneralNewsLetter />
    </div>
  )
}

export {Home}