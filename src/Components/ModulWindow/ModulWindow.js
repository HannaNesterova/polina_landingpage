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
    return(
        <div className={styles.main}>
        <div className={styles.main_box} data-aos="zoom-in" data-aos-duration="3000">
        <button onClick={closeModal}>Х</button>
        <div className={styles.pay_box}>

            <h6>Перевод на счет</h6>
            <p>Для жителей Европы</p>
            <p>0000 0000 0000 0000</p>
            <p>{packageData.price}</p>
        </div>
        
        <div className={styles.pay_box}>
            <h6>Перевод на карту</h6>
            <p>Для жителей Украины</p>
            <p>0000 0000 0000 0000</p>
            <p>{packageData.price}</p>
            </div>
        </div>
        </div>
    )
}

export default ModuleWindow;