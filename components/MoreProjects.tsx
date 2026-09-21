import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards';
import { testimonials } from '@/data';

const MoreProjects = () => {
  return (
    <div className="py-20" id="projects">
        <h1 className="heading">
            Browse More of My {''}
            <span className="text-orange">Work</span>
        </h1>
        <div className = "flex flex-col items-center max-lg:mt-10">   
            <InfiniteMovingCards 
                items={testimonials}
                direction="right"
                speed="normal"
            /> 
        </div>
    </div>
  )
}

export default MoreProjects