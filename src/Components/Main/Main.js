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
            <h1>Polins_pl</h1>
            <p>Добро пожаловать на авторский курс <br /> „Посредника по аренде недвижимости в Польше»</p>
            <button className={styles.btn}>Записаться на курс</button>
            <div className={styles.start_comp}>
                <div className={styles.date}>
                    <h2>Старт</h2>
                    <p>18.03.2024</p>
                </div>
                <div className={styles.date}>
                    <h2>Длительность</h2>
                    <p>4 недели</p>
                </div>
                <div className={styles.date}>
                    <h2>Формат</h2>
                    <p>онлайн</p>
                </div>
            </div>
        </div>
        <div className={styles.second_cont} data-aos="fade-down"  data-aos-easing="linear" data-aos-duration="3000">
            <img src={hero} alt='hero' className={styles.hero} />
        </div>
        </div>
        </div>
    )
}

export default Main;