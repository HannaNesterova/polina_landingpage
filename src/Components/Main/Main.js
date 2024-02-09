import { useEffect } from 'react';
import hero from '../../img/01.png';
import styles from './Main.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Main(){

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);


    return(
        <div className={styles.container_cont}>
        <div className={styles.main_container}>
        <div className={styles.first_cont} data-aos="fade-up" data-aos-duration="3000">
            <h1>Polana's SCHOOL</h1>
            <p>Курсы повышения квалификации по робототехнике для педагогов начальной школы</p>
            <button className={styles.btn}>Записаться на курс</button>
        </div>
        <div className={styles.second_cont} data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="3000">
            <img src={hero} alt='hero' className={styles.hero} />
        </div>
        </div>
        </div>
    )
}

export default Main;