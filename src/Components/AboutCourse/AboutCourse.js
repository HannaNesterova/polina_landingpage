import styles from './AboutCourse.module.css';

function AboutCourse(){
    return(
        <div className={styles.container}>
            <div className={styles.aboutUs_cont}>
                <div className={styles.pretitle_us}>
                    <p><span>Robo School – </span>учреждение для формирования кадрового педагогического резерва в сфере робототехники и программирования</p>
                </div>
                <div className={styles.title_us}>
                    <div className={styles.school_us}>
                        <span>10</span>
                        <p> по различным направлениям по робототехнике</p>
                    </div>

                    <div className={styles.school_us}>
                        <span>20</span>
                        <p>Школ, в которых запущена робототехника</p>
                    </div>

                    <div className={styles.school_us}>
                        <span>100</span>
                        <p>Педагогов прошедших курсы повышения квалификации</p>
                    </div>

                    <div className={styles.school_us}>
                        <span>10 000</span>
                        <p>Обученных детей на базе собственных центров</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutCourse;
