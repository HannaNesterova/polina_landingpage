import styles from '../ForWho/ForWho.module.css';

function ForWho(){
    return(
        <div>
            <div className={styles.container}>
                <div className={styles.profits_pretitle} 
                data-aos="fade-down" data-aos-duration="3000">
            <h2>Кому подойдет этот курс</h2>
        </div>
        <div className={styles.profits_box}>
            <div className={styles.profits_title}>
                <p><span className='svg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></span>Для активных и ищущих себя людей – кто НЕ хочет работать на заводе в
иммиграции за минимальные деньги</p>
            </div>
            <div className={styles.profits_title}>
                <p><span className='svg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></span>Для мамочек с детками, кто ищет свободный график работы – без стресса : кто
будет отводить и забирать малыша с садика и школы</p>
            </div>
            <div className={styles.profits_title}>
                <p><span className='svg'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/></svg></span>Кто любит соц сети – но не знает как можно через них зарабатывать. Кто
заблудился и потерялся в эмиграции и хочет создать свой бизнес
самостоятельно</p>
            </div>
        </div>
        </div>
        </div>
    )
}

export default ForWho;