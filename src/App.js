
import styles from './App.module.css';
import AboutCourse from './Components/AboutCourse/AboutCourse';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Profits from './Components/Profits/Profits';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <AboutCourse />
      <Profits />
    </div>
  );
}

export default App;
