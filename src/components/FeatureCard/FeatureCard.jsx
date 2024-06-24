import React, { useState } from 'react'

function FeatureCard({title, icon, description}) {

    const [isHovered, setIsHovered] = useState(false);

  return (
    <div className={`p-8 rounded-lg shadow-2xl transition-all duration-300 ease-in-out ${isHovered ? 'border-t-[12px] border-t-heroColor bg-heroColor/5' : 'border-t-transparent'} min-w-32 `} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
        <div className='flex flex-col gap-4'>
            <div className='relative min-h-28 h-12 w-12'>
                <img src={icon} alt="" className={`transition-all duration-300 ease-in-out ${isHovered ? 'transform scale-[2.3] translate-x-52' : 'transform scale-100 translate-x-0'}`} />
            </div>
            <div className='text-white text-lg font-bold'>
                <h3>{title}</h3>
            </div>
            <div className='text-introColor text-sm'>
                <p>{description}</p>
            </div>
        </div>
    </div>
  )
}

export default FeatureCard