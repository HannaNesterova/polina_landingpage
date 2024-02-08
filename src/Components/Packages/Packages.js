import styles from '../Packages/Packages.module.css';
import data from '../../data/dataPackages';
console.log(data)


function Packages(){
    return(
        <div className={styles.package_cont}>
            <h3>Выберите нужный пакет</h3>
            <div className={styles.main_box}>
                {data.map((item, index) => (
                    <div key={index} className={styles.box_package}>
                        <h6>{item.pretitle}</h6>
                        <span>{item.price}</span>
                        <p>{item.title}</p>
                        <button>Купить</button>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Packages;