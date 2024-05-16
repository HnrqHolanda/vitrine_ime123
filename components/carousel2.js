import React from 'react'
import Slider from 'react-slick'
import styles from '../styles/components/slider2.module.css'
import Image from 'next/image'

const ImageSlider = ({images}) => {


    const settings = {
        dots:true,
        speed:3000,
        slideToShow:1,
        slideToScroll:1,
        initialSlide:0,
        pauseOnHover:true,
        autoplay:true,
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