import React from 'react'
import Slider from 'react-slick'
import slide1 from '../public/Img2.JPG'
import slide2 from '../public/Img2.JPG'
import slide3 from '../public/Img2.JPG'
import slide4 from '../public/Img2.JPG'
import styles from "../styles/slider.module.css"

const array = [slide1, slide2, slide3, slide4]

const ImageSlider = ({images}) => {
    const settings = {
        dots:true,
        speed:1000,
        slideToShow:1,
        slideToScroll:1,
        initialSlide:0,
        pauseOnHover:true,
        autoplay:true,
    }
  return (
    <div className='image__slider__container'>
       <Slider {...settings}>
          {
            array.map((image,index)=>(
                <img src={image} alt="" key={index} />
            ))

            
          }
       </Slider>

       <h1>dhaudhsaudsahuds</h1>
    </div>
  )
}

export default ImageSlider