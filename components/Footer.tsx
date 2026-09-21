import { socialMedia } from '@/data'
import React from 'react'

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10 mb-25 md:mb-5" id="contact">
      <div className="w-full relative left-0 bottom-72 min-h-96">
        <img
          src="/grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
          width={20}
          height={20}
          />
        
        <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
          <p className="md:text-base text-sm md:font-normal font-light">
            Copyright © 2026 Martin Suarez
          </p>

          <div className="flex items-center md:gap-3 gap-6">
            {socialMedia.map((profile) => (
              <a 
              key={profile.id}
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={profile.name}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
              >
                <img 
                  src={profile.img}
                  alt = ""
                  width={20}
                  height={20}
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer