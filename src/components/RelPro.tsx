import React from 'react'

export default function RelPro() {
  return (
    <>
    
    <center>
          <div className="text-black text-2xl font-semibold mt-10">
            Related Products
          </div>
        </center>

        <div className="grid grid-cols-4 gap-5 mt-1 ml-9 mr-9 my-12 pt-10">
          <div className="relative">
             {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
            <img src="images/img5.webp" className="" />
            <div className="absolute top-0 left-0 bg-orange-500 min-w-fit min-h-fit md:mt-0 md:ml-0 lg:ml-0 lg:mt-0 xl:ml-0 xl:mt-0 2xl:ml-0 2xl:mt-0">
              <div className="text-white text-xs md:text-sm sm:text-sm lg:text-lg xl:text-lg 2xl:text-lg">
                Sale
              </div>
            </div>
          </div>
          <div>
            {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
            <img src="images/img9.webp" className="" />
          </div>
          <div>
          {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
            <img src="images/img10.webp" className="" />
          </div>
          <div>
             {/* eslint-disable-next-line jsx-a11y/alt-text, @next/next/no-img-element */}
            <img src="images/img11.webp" className="" />
          </div>
        </div>

    </>
  )
}

