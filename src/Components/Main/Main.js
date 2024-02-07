import hero from '../../img/01.png';
import styles from './Main.module.css';

function Main(){
    return(
        <div className={styles.container_cont}>
        <div className={styles.main_container}>
        <div className={styles.first_cont}>
            <h1>Polana's SCHOOL</h1>
            <p>Курсы повышения квалификации по робототехнике для педагогов начальной школы</p>
            <button className={styles.btn}>Записаться на курс</button>
        </div>
        <div className={styles.second_cont}>
            <img src={hero} alt='hero' className={styles.hero} />
        </div>
        </div>
        </div>
    )
}

export default Main;