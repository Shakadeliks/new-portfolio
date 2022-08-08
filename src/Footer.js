import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Footer = () => {
  return (
    <section className="flex flex-col w-full md:flex-row justify-center items-center md:justify-between bg-main py-16 px-12 md:px-14 lg:px-32 lg:py-32">
        <div className='order-last md:order-first'>
        © 2022, built by Olwethu "Shak" Matiwana
        </div>
        <div className='flex flex-col text-lg items-center mb-5 md:mb-0'>
            let's talk
            <a 
                href="mailto:shakurxmatiwana@gmail.com"
                className='link link-underline text-3xl tracking-wide font-semibold'
            >
                <em>shakurxmatiwana@gmail</em>
            </a>
        </div>
        <div className='flex justify-evenly mb-5 md:mb-0'>
            <a 
                href="https://www.linkedin.com/in/olwethu-matiwana-73bb79159/"
                rel="noreferrer"
                target="_blank"
            >
                <FontAwesomeIcon 
                    icon={['fab', 'linkedin']} 
                    size="3x"
                    color="white"
                    className=" text-black transition ease-in-out duration-300 mr-5 hover:text-mainDark"
                />
            </a>

            <a 
                href="https://github.com/Shakadeliks"
                rel="noreferrer"
                target="_blank"
            >
                <FontAwesomeIcon 
                    icon={['fab', 'github']}
                    size="3x"
                    color="white"
                    className="text-black transition ease-in-out duration-300 hover:text-mainDark"
                />
            </a>
        </div>
        
    </section>
  )
}

export default Footer