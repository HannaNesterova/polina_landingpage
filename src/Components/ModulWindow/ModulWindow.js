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
            <p>58 1090 2590 0000 0001 5037 8926</p>
            <p>назначение платежа: skolenie i nazwisko</p>
            <h5>{packageData.price}</h5>
        </div>
        
        <div className={styles.pay_box}>
            <h6>Перевод на карту</h6>
            <p>Для жителей Украины</p>
            <p>5363 5420 1263 9770</p>
            <p>Получатель: Petsevych Polina</p>
            <h5>{packageData.price}</h5>
            </div>
            <a href="https://t.me/polins_pl" target="_blank" rel="noreferrer">Скриншот про оплату <br /> пришлите мне в Telegramу</a>
        </div>
        </div>
    )
}

export default ModuleWindow;