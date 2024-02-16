import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Accordion from 'react-bootstrap/Accordion';
import styles from './Faq.module.css'

function Faq(){
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
    return(
        <div className={styles.faq_container}>
            <h2 className={styles.h2}  data-aos="fade-down" data-aos-duration="3000">
              FAQ</h2>

           
        <Accordion className={styles.accordion}>    
      <Accordion.Item eventKey="0" className={styles.item}>
      <Accordion.Header >Можно ли с нуля пройти курс и начать сразу работать? </Accordion.Header>
        <Accordion.Body>
                  Да – курс рассчитан для новичков в сфере недвижимости. Уроки построены логически и будут постепенно вводить в курс дела. Плюс будут выданы все материалы и рассказаны конкретные шаги в старте работы.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1" className={styles.item}>
        <Accordion.Header>Можно ли оплатить курс частями?</Accordion.Header>
        <Accordion.Body>
                  Да, такое возможно – 50% до 1 марта и 50% до 1 апреля
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2" className={styles.item}>
        <Accordion.Header>В какой валюте возможна оплата?</Accordion.Header>
        <Accordion.Body>
                  Предполагаемая оплата в злотых на польский счет либо в гривнях на украинскую карту.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3" className={styles.item}>
        <Accordion.Header>Смогу ли я найти первых клиентов?</Accordion.Header>
        <Accordion.Body>
                  На курсе мы сделаем упор – как сделать так, чтобы клиенты находили вас. Полина продвигается только через личный бренд и соц сети – на курсе научит и вас этому.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="4" className={styles.item}>
        <Accordion.Header>Что если я пропущу уроки – смогу ли просмотреть их в записи?</Accordion.Header>
        <Accordion.Body>
                  Да- все онлайн уроки остаются у вас навсегда, плюс все прямые эфиры Полина будет сохранять.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </div>
    )
}

export default Faq;



