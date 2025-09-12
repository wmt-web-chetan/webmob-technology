import React from 'react'
import "./serviceSection.module.css"
import ServiceTabs from '@/components/ServiceTabs'

const ServiceSection = () => {
  return (
    <>
    <div className='flex justify-center'>
    <h2 className='h2-heading'>Our Architectural Blueprints for <span className='font-bold text-gradient-primary'>Your Success.</span> </h2>
    </div>
    <div className='flex justify-center mt-4'>
        <p className='h2-description 2xl:max-w-4xl'>We don't offer one-size-fits-all services. We provide a suite of specialized, high-impact capabilities that we combine and customize to engineer the perfect solution for your specific business challenge.</p>
    </div>
    <div>
        <ServiceTabs/>
    </div>
    
    </>
  )
}

export default ServiceSection