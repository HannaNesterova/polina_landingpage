
import styles from './Feedbacks.module.css';

function ItemFeedback({item}){
    return(
        <div className={styles.box_card}>
            <div className={styles.card_top}>
                <div className={styles.box}>
                <h6>{item.id}</h6>
                <p>{item.title}</p>
                <p>{item.text}</p>
                </div>
            </div>
        </div>
    )
 
}

export default ItemFeedback;