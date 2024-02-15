import styles from './Unique.module.css';
import img02 from '../../img/hero/Krylova-115.jpeg'

function Unique(){
    return(
        <div className={styles.container}>
            <div className={styles.mainContainer}>
            <div className={styles.mainContainerImg}>
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