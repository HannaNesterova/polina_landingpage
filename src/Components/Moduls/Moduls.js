import 'aos/dist/aos.css';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import styles from './Moduls.module.css';

function Moduls() {


  return (
    <div className={styles.container}>
        <h2 className={styles.title}
         data-aos="fade-down" data-aos-duration="3000"
         >О курсе:</h2>

    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" >
      <Row>
        <Col sm={6}>
          <ListGroup className={styles.list_group}>
            <ListGroup.Item action href="#link1" className={styles.list_item}>
            1 модуль
            </ListGroup.Item>
            <ListGroup.Item action href="#link2" className={styles.list_item}>
             2 модуль
            </ListGroup.Item>
            <ListGroup.Item action href="#link3" className={styles.list_item}>
            3 модуль
            </ListGroup.Item>
            <ListGroup.Item action href="#link4" className={styles.list_item}>
            4 модуль
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={6}>
          <Tab.Content>
          <Tab.Pane eventKey="#link1">
            <ul className={styles.li}>
              <h6>Модуль №1</h6>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Кто такой посредник в обороте недвижимости?</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Какой список вопросов он может решить? В чем помочь? За что отвечает?</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Правовые аспекты работы посредником (права и обязанности). Основные документы- регулирующие работу посредника.</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Нормы права, регулирующие отношения najemcy i wynaymującego.</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Виды аренды и виды договоров.</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Обязанности najemcy i wynajmującego.</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Найм окказиональный и институциональный (плюсы и минусы).</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Основные документы для сдачи квартиры.</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Из чего состоит цена на аренду квартиры.</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Кауция – что это такое? Как посредник влияет на сохранность кауции?</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Проблемы с возвратом кауции -пути решения.</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Повышение цены на квартиру. Что законно, а что нет?</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Расторжение договора/ принудительное расторжение договора.</li>
                <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Принудительное выселение – что нужно знать (кого и когда можно выселить).</li>
            </ul>
        </Tab.Pane>

        <Tab.Pane eventKey="#link2">
        <ul className={styles.li}>
        <h6>Модуль №2</h6>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Где искать квартиры</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Как правильно читать объявления и адаптировать запрос клиента</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Первичная консультация клиента – с чего начинаем</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Детальная работа с клиентом (от нуля до финиша)</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Мошенники - как не попасть в беду</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Работа с девелоперами</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Холодные звонки хозяину квартиры</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Просмотр квартиры (на что обратить внимание)</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Проблемный клиент/сопровождение клиента</li>
            <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Животные – как уговорить хозяина сдать квартиру</li>
        </ul>
        </Tab.Pane>

        <Tab.Pane eventKey="#link3">
    <ul className={styles.li}>
    <h6>Модуль №3</h6>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Из етого Договора на аренду квартиры (виды/ отличия)</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Учимся правильно читать договор (на что обратить внимание)</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Процедура подписания договора</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Удаленная аренда</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Заличка/ резервационная умова</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Передача квартиры – в чем роль посредника</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Протокол передачи квартиры – ЧТО, КТО И КОГДА?</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Работа с хозяином квартиры</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Дополнительные услуги для клиента</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>На чем еще можно зарабатывать посреднику</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Индивидуальное сопровождение после подписания (пример писем)</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Решение конфликтных ситуаций</li>
    </ul>
</Tab.Pane>


        <Tab.Pane eventKey="#link4">
    <ul className={styles.li}>
    <h6>Модуль №4</h6>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Посредник по аренде – твой успешный бизнес</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Вид деятельности/налогообложение</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Договор с клиентом (юридические аспекты)</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Где искать клиентов</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Развитие личного бренда</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Советы, актуальные темы и фишки для позиционирования в сети</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Отличие от конкурентов</li>
        <li><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="#d52027" d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM135 241c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l87 87 87-87c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 345c-9.4 9.4-24.6 9.4-33.9 0L135 241z"/></svg>Партнерство, коллаборации</li>
    </ul>
</Tab.Pane>


          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
    </div>
  );
}

export default Moduls;