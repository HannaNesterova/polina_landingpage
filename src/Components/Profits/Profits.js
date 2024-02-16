import { useEffect } from 'react';
import styles from './Profits.module.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Profits(){
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
      
    return(
        <div className={styles.profits}>
        <div className={styles.container}>
            <div className={styles.profits_pretitle} 
            data-aos="fade-down" data-aos-duration="3000">
                <h2>Что вы получите после курса</h2>
            </div>
            <div className={styles.profits_box}>
            <div className={styles.profits_title}>
                <p><span className='svg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#d52027" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></span>Готовый, упакованный бизнес посредника по недвижимости</p>
            </div>
            <div className={styles.profits_title}>
                <p><span className='svg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#d52027" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></span>Фундаментальные знания законов, регулирующие правовые отношения в сфере недвижимости</p>
            </div>
            <div className={styles.profits_title}>
                <p><span className='svg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#d52027" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></span>Важные аспекты взаимодействия с клиентом</p>
            </div>
            <div className={styles.profits_title}>
                <p><span className='svg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#d52027" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></span>Сильный акцент на маркетинг – создание личного бренда</p>
            </div>
            <div className={styles.profits_title}>
                <p><span className='svg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#d52027" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></span>Источники дополнительного заработка и все секретики спикера</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Profits;