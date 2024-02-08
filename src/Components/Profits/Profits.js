import styles from './Profits.module.css';

function Profits(){
    return(
        <div className={styles.profits}>
        <div className={styles.container}>
            <div className={styles.profits_pretitle}>
                <h2>Что вы получите после курса</h2>
            </div>
            <div className={styles.profits_box}>
            <div className={styles.profits_title}>
                <h6>Удостоверение</h6>
                <p>Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях</p>
            </div>
            <div className={styles.profits_title}>
                <h6>Знания</h6>
                <p>По основам разработки учебно-методических комплексов по робототехнике и программированию</p>
            </div>
            <div className={styles.profits_title}>
                <h6>Практику</h6>
                <p>Дающее право преподавать робототехнику для детей 6-12 лет в образовательных учреждениях</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Profits;