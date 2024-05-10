import React from 'react'
import Slider from 'react-slick'
import styles from '../styles/components/slider.module.css'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

const ImageSlider = ({images}) => {

    const [currentSlide, setCurrentSlide] = useState(0);

    const settings = {
        dots:true,
        speed:2000,
        slideToShow:1,
        slideToScroll:1,
        initialSlide:0,
        pauseOnHover:true,
        autoplay:true,
        afterChange: (current) => {
          setCurrentSlide(current);
        },
    }

  return (

      <div className={styles.image__slider__container}>
        <Slider {...settings}>
            {
              images.map((image,index)=>(
                  <Image src={image.image} alt="" key={index} className={styles.Img}/>
              ))
            }
        </Slider>
      </div>
  )
}

export default ImageSlider