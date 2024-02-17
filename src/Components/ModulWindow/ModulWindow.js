import { useEffect } from "react";
import styles from "../ModulWindow/ModulWindow.module.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import data from '../../data/dataPackages';

function ModuleWindow({ packageId, closeModal }){
    const packageData = data.find(item => item.id === packageId)

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      
      if (!packageData) {
        return null; 
    }

    return(
        <div className={styles.main}>
        <div className={styles.main_box} data-aos="zoom-in" data-aos-duration="400">
        <button onClick={closeModal}>Х</button>
        <div className={styles.pay_box}>
            <h6>Перевод на счет</h6>
            <p>Для жителей Европы</p>
            <p>0000 0000 0000 0000</p>
            <h5>{packageData.price}</h5>
        </div>
        
        <div className={styles.pay_box}>
            <h6>Перевод на карту</h6>
            <p>Для жителей Украины</p>
            <p>0000 0000 0000 0000</p>
            <h5>{packageData.price}</h5>
            </div>
            <a href="https://t.me/polins_pl" target="_blank" rel="noreferrer">Скриншот про оплату <br /> пришлите мне в Telegramу</a>
        </div>
        </div>
    )
}

export default ModuleWindow;