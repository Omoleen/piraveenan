'use client';
import React from 'react'
import { useEffect, useRef, useState } from 'react';
// import "./"

const page = () => {
  const [showPromoters, setShowPromoters] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setShowPromoters(true)    
    }, 1000);
  }, [])
  return (
    <div className="bg-floral-white relative" style={{}}>
        <div style={{minHeight:"calc(100vh - 237px)"}} className='relative pt-[172px] xs:pt-[100px] overflow-hidden duration-200 transition-all ease-out xs:bg-floral-white'>
            <div className="xs:px-[32px] sm:px-[32px] relative">
              <div className="w-[1128px] mx-auto flex box-border mb-24 lg:w-11/12 md:flex-wrap xs:mb-0 xs:mx-0 xs:w-full">
                <div className="w-[730px] flex items-center flex-col text-center mx-auto xs:text-left xs:mx-0 xs:w-full">
                  <div className="flex items-center gap-4 mb-[48px] ease-in xs:items-start xs:mb-[16px] opacity-100" style={{transform: "translateY(0px)", opacity: 1, transitionDelay: "0s", animation: "auto ease 0s 1 normal none running none"}}>
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="xs:h-16 xs:w-[16px]" data-v-b151a3ef="">
                      <g clip-path="url(#clipId-1)">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#2E813A">
                        </path>
                      </g>
                      <defs>
                        <clipPath id="clipId-1">
                          <rect fill="white" height="24" width="24"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="xs:h-16 xs:w-[16px]" data-v-b151a3ef="">
                      <g clip-path="url(#clipId-1)">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#2E813A">
                        </path>
                      </g>
                      <defs>
                        <clipPath id="clipId-1">
                          <rect fill="white" height="24" width="24"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="xs:h-16 xs:w-[16px]" data-v-b151a3ef="">
                      <g clip-path="url(#clipId-1)">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#2E813A">
                        </path>
                      </g>
                      <defs>
                        <clipPath id="clipId-1">
                          <rect fill="white" height="24" width="24"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="xs:h-16 xs:w-[16px]" data-v-b151a3ef="">
                      <g clip-path="url(#clipId-1)">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#2E813A">
                        </path>
                      </g>
                      <defs>
                        <clipPath id="clipId-1">
                          <rect fill="white" height="24" width="24"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" className="xs:h-16 xs:w-[16px]" data-v-b151a3ef="">
                      <g clip-path="url(#clipId-1)">
                        <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" fill="#2E813A">
                        </path>
                      </g>
                      <defs>
                        <clipPath id="clipId-1">
                          <rect fill="white" height="24" width="24"></rect>
                        </clipPath>
                      </defs>
                    </svg>
                    <h4 className="text-dark text-[18px] ml-4 xs:text-[12px]" style={{fontSize: "Circular Regular"}}>
                      Loved by 1,000,000+ creators
                    </h4>
                  </div>

                  <h1 className='text-dark text-[96px] leading-[95px] font-bold tracking-tight xs:w-full xs:text-center xs:leading-[55px] xs:mx-0 xs:text-[48px]' style={{transform: "translateY(0px)", opacity: 1, transitionDelay: "0s", animation: "auto ease 0s 1 normal none running none", fontSize: "Circular Bold"}}>
                      Fund your creative work 
                  </h1>
                  <p style={{transform: "translateY(0px)", opacity: 1, transitionDelay: "0s", animation: "auto ease 0s 1 normal none running none", fontSize: "Circular Regular"}} className="mb-[16px] text-[22px] text-center font-regular leading-[34px] text-dark mt-8 w-[600px] mx-auto xs:w-full xxs:text-[18px]" data-v-b151a3ef=""> Accept support. Start a membership. Setup a shop. It’s easier than you think.</p>
                  <div style={{transform: "translateY(0px)", opacity: 1, transitionDelay: "0s", animation: "auto ease 0s 1 normal none running none", fontSize: "Circular Bold"}} className="btn rounded-full relative font-bold group flex items-center justify-center bg-yellow-400 text-white h-[74px] text-[24px] px-[50px] mt-[32px] xs:leading-[24px] xs:text-[16px] xs:px-[40px] xs:h-[48px] xs:mt-[8px] cursor-pointer">
                    <div className="btn-bg absolute w-full h-full group-hover:opacity-80 transform transition-all duration-100 ease rounded-full bg-yellow"></div>
                    <div class="z-10 text-black" data-v-b151a3ef=""><h2 data-v-b151a3ef="">Start my page</h2></div>
                  </div>
                  <h4 className="text-[18px] leading-[30px] text-dark mt-[16px] w-[600px] mx-auto xs:w-full xs:text-center xs:mt-[8px] xs:leading-[30px] xs:text-[16px]" style={{transform: "translateY(0px)", opacity: 1, transitionDelay: "0s", animation: "auto ease 0s 1 normal none running none", fontSize: "Circular Regular"}}> It’s free and takes less than a minute! </h4>
                </div>
              </div>
              <div class="hidden xs:block" data-v-b151a3ef=""></div>
            </div>
            <a className={` top-[120px] border shadow-2xl ${showPromoters ? 'block creator-card active ': 'lg:hidden'}`} style={showPromoters ? {transform: "rotate(2.498deg) translate(0px, 0px)", opacity: 1,}: {}} href="https://www.buymeacoffee.com/neal" target="_blank">
              <img src="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_1.png" width="192" height="172" alt="support" srcset="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_1.png 1x, https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_1.png 2x" className="hover:scale-[1.03] transform duration-200"/>
            </a>
            <a className={` top-[172px] border shadow-2xl ${showPromoters ? 'block creator-card active ': 'lg:hidden'}`} style={showPromoters ? {transform: "rotate(-5deg) translate(54px, 120px)", opacity: 1, transitionDelay: "1s"} : {}} href="https://www.buymeacoffee.com/poetrypea" target="_blank" data-v-b151a3ef="">
              <img src="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_2.png" width="192" height="172" alt="support"  srcset="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_2.png 1x, https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_2.png 2x" className="hover:scale-[1.03] transform duration-200" data-v-b151a3ef=""/>
            </a>
            <a className={` top-[350px] border shadow-2xl ${showPromoters ? 'block creator-card active ': 'lg:hidden'}`} style={showPromoters ? {transform: "rotate(9.087deg) translate(14px, 140px)", opacity: 1, transitionDelay: "55s"}: {}} href="https://www.buymeacoffee.com/teacherstefano" target="_blank" data-v-b151a3ef="">
                <img src="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_3.png" width="192" height="172" alt="support" srcset="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_3.png 1x, https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_3.png 2x" className="hover:scale-[1.03] transform duration-200" data-v-b151a3ef=""/>
            </a> 
            <a className={` top-[150px] right-[32px] border shadow-2xl ${showPromoters ? 'block creator-card active animate': 'lg:hidden'}`} style={showPromoters ? {transform: "rotate(10.531deg) translate(-100px, 4px)", opacity: 1, transitionDelay: "0s"}: {}} href="https://www.buymeacoffee.com/chillingchinese" target="_blank" data-v-b151a3ef="">
                <img src="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_4.png" width="192" height="172" alt="support" srcset="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_4.png 1x, https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_4.png 2x" className="hover:scale-[1.03] transform duration-200" data-v-b151a3ef=""/>
            </a>
            <a className={` top-[200px] right-[18px] border shadow-2xl ${showPromoters ? 'block creator-card active animate': 'lg:hidden'}`} style={showPromoters ? {transform: "rotate(9.087deg) translate(50px, 110px)", opacity: 1, transitionDelay: "0s"}: {}} href="https://www.buymeacoffee.com/beachtalkradio" target="_blank" data-v-b151a3ef="">
                <img src="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_7.png" width="192" height="172" alt="support"  srcset="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_7.png 1x, https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_7.png 2x" className="hover:scale-[1.03] transform duration-200" data-v-b151a3ef=""/>
            </a>
            <a className={` top-[320px] right-[40px] border shadow-2xl ${showPromoters ? 'block creator-card active animate': 'lg:hidden'}`} style={showPromoters ? {transform: "rotate(-5deg) translate(-100px, 180px)", opacity: 1, transitionDelay: "0s"}: {}} href="https://www.buymeacoffee.com/indiarose" target="_blank" data-v-b151a3ef="">
                <img src="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_8.png" onerror="this.setAttribute('data-error', 1)" width="192" height="172" alt="support" data-nuxt-img="" srcset="https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_8.png 1x, https://cdn.buymeacoffee.com/assets/img/homepage/images/creator_tile_v8_8.png 2x" className="hover:scale-[1.03] transform duration-200" data-v-b151a3ef=""/>
            </a>
        </div>
    </div>
  )
}

export default page