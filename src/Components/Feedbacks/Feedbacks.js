import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from './Feedbacks.module.css';
import data from '../../data/data';
import ItemFeedback from './ItemFeedback';


function Feedbacks(){

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
            breakpoint: 850,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 650,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
   
    return(
        <div className={styles.container}>
            <h2>Отзывы о моей работе</h2>
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