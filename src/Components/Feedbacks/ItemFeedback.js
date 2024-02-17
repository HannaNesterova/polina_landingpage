
import styles from './Feedbacks.module.css';

function ItemFeedback({item}){
    return(
        <div>
            <img  className={styles.box_card} src={item.img} width={'250px'} alt='img'/>
        </div>
    )
 
}

export default ItemFeedback;