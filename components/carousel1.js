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
        speed:3500,
        slideToShow:1,
        slideToScroll:1,
        initialSlide:0,
        pauseOnHover:true,
        autoplay:true,
        afterChange: (current) => {
          setCurrentSlide(current);
        },
        appendDots: dots => (
          <div>
            <ul style={{ margin: "0px", padding: "0px" }}> {dots} </ul>
            <div className={styles.Slidercaption}>
              <Link href={images[currentSlide].url} style={{textDecoration: "none", color: "white", fontSize: "28px"}}>{images[currentSlide].caption}</Link>
            </div>
          </div>

        ),
        customPaging: () => (
          <span style={{ 
            display: 'inline-block',
            width: '10px',
            height: '10px',
            margin: '0 5px',
            borderRadius: '50%',
            background: 'rgba(255, 255, 255, 0.0001)',
            cursor: 'pointer',
          }}></span>
        ),
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
