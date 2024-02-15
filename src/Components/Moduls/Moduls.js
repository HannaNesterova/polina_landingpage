import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import styles from './Moduls.module.css';

function Moduls() {
  return (
    <div className={styles.container}>
        <h2 className={styles.title}>О курсе:</h2>

    <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1" >
      <Row>
        <Col sm={4}>
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
        <Col sm={8}>
          <Tab.Content>
          <Tab.Pane eventKey="#link1">
            <ul>
              <h6>Модуль №1</h6>
                <li>Кто такой посредник в обороте недвижимости?</li>
                <li>Какой список вопросов он может решить? В чем помочь? За что отвечает?</li>
                <li>Правовые аспекты работы посредником (права и обязанности). Основные документы- регулирующие работу посредника.</li>
                <li>Нормы права, регулирующие отношения najemcy i wynaymującego.</li>
                <li>Виды аренды и виды договоров.</li>
                <li>Обязанности najemcy i wynajmującego.</li>
                <li>Найм окказиональный и институциональный (плюсы и минусы).</li>
                <li>Основные документы для сдачи квартиры.</li>
                <li>Из чего состоит цена на аренду квартиры.</li>
                <li>Кауция – что это такое? Как посредник влияет на сохранность кауции?</li>
                <li>Проблемы с возвратом кауции -пути решения.</li>
                <li>Повышение цены на квартиру. Что законно, а что нет?</li>
                <li>Расторжение договора/ принудительное расторжение договора.</li>
                <li>Принудительное выселение – что нужно знать (кого и когда можно выселить).</li>
            </ul>
        </Tab.Pane>

        <Tab.Pane eventKey="#link2">
        <ul>
        <h6>Модуль №2</h6>
            <li>Где искать квартиры</li>
            <li>Как правильно читать объявления и адаптировать запрос клиента</li>
            <li>Первичная консультация клиента – с чего начинаем</li>
            <li>Детальная работа с клиентом (от нуля до финиша)</li>
            <li>Мошенники - как не попасть в беду</li>
            <li>Работа с девелоперами</li>
            <li>Холодные звонки хозяину квартиры</li>
            <li>Просмотр квартиры (на что обратить внимание)</li>
            <li>Проблемный клиент/сопровождение клиента</li>
            <li>Животные – как уговорить хозяина сдать квартиру</li>
        </ul>
        </Tab.Pane>

        <Tab.Pane eventKey="#link3">
    <ul>
    <h6>Модуль №3</h6>
        <li>Из етого Договора на аренду квартиры (виды/ отличия)</li>
        <li>Учимся правильно читать договор (на что обратить внимание)</li>
        <li>Процедура подписания договора</li>
        <li>Удаленная аренда</li>
        <li>Заличка/ резервационная умова</li>
        <li>Передача квартиры – в чем роль посредника</li>
        <li>Протокол передачи квартиры – ЧТО, КТО И КОГДА?</li>
        <li>Работа с хозяином квартиры</li>
        <li>Дополнительные услуги для клиента</li>
        <li>На чем еще можно зарабатывать посреднику</li>
        <li>Индивидуальное сопровождение после подписания (пример писем)</li>
        <li>Решение конфликтных ситуаций</li>
    </ul>
</Tab.Pane>


        <Tab.Pane eventKey="#link4">
    <ul>
    <h6>Модуль №4</h6>
        <li>Посредник по аренде – твой успешный бизнес</li>
        <li>Вид деятельности/налогообложение</li>
        <li>Договор с клиентом (юридические аспекты)</li>
        <li>Где искать клиентов</li>
        <li>Развитие личного бренда</li>
        <li>Советы, актуальные темы и фишки для позиционирования в сети</li>
        <li>Отличие от конкурентов</li>
        <li>Партнерство, коллаборации</li>
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