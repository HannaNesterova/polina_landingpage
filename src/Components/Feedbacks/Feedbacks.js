import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './Feedbacks.module.css';
import data from '../../data/data';
import ItemFeedback from './ItemFeedback';


function Feedbacks(){
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 970,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 690,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
   
    return(
        <div className={styles.container}>
            <h2  data-aos="fade-down" data-aos-duration="3000">
              Отзывы о моей работе</h2>
        <div className={styles.data_box}>
            <Slider {...settings}>
            {data.map((item, index) => (
            <ItemFeedback key={index} item={item}/>
            ))} 
            </Slider>
        </div>
        </div>

    )
}

export default Feedbacks;