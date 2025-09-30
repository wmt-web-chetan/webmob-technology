import React from 'react'
import "./serviceSection.module.css"
import ServiceTabs from '@/components/ServiceTabs'

const ServiceSection = () => {
  return (
    <div className='px-wrapper section-padding-y'>
    
    <div className='flex justify-center '>
    <h2 className='h2-heading text-center'>Our Architectural Blueprints for <span className='font-bold text-gradient-custom'>Your Success.</span> </h2>
    </div>
    <div className='flex justify-center mt-4'>
        <p className='h2-description 2xl:max-w-4xl 3xl:max-w-7xl text-center'>We don't offer one-size-fits-all services. We provide a suite of specialized, high-impact capabilities that we combine and customize to engineer the perfect solution for your specific business challenge.</p>
    </div>
    <div className=''>
        <ServiceTabs/>
    </div>
     
    </div>
  )
}

export default ServiceSection