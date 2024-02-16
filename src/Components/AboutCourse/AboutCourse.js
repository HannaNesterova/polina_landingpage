import styles from './AboutCourse.module.css';

function AboutCourse(){
    return(
        <div className={styles.container} >
            <div className={styles.aboutUs_cont}>
                <div className={styles.pretitle_us}>
                    <p><span>Полина -</span>
                  посредник по аренде недвижимости во Вроцлаве.</p>
                </div>
                <div className={styles.title_us}>
                    <div className={styles.school_us}>
                        <span>5 лет</span>
                        <p> Cтаж в эмиграции</p>
                    </div>

                    <div className={styles.school_us}>
                        <span>4 года</span>
                        <p>Стаж посредником </p>
                    </div>

                    <div className={styles.school_us}>
                        <span>300+</span>
                        <p>Количество заселенный семей</p>
                    </div>

                    <div className={styles.school_us}>
                        <span>10+</span>
                        <p>География стран, от куда приезжали мои клиенты</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCourse;
