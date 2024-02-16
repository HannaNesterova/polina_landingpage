import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import styles from './Unique.module.css';
import img02 from '../../img/hero/Krylova-115.jpeg'

function Unique(){

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, 
    )

    return(
        <div className={styles.container}  id="about-section">
            <div className={styles.mainContainer}>
            <div className={styles.mainContainerImg}
            data-aos="zoom-in" data-aos-duration="3000">
                <img src={img02} alt='img'/>
            </div>
            <div className={styles.title}>
            <p>Первый и уникальный в своем роде.В чем его уникальность?
                Я не учу как работать в агенции по недвижимости – а учу, как создать свой бизнес с нуля.
                Передаю готовый и упакованный продукт. После прохождения которого вы сможете сразу же открыть свое дело и зарабатывать с первого дня.
            </p>
            </div>
            </div>
        </div>
    )
}

export default Unique;