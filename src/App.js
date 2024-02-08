
import styles from './App.module.css';
import AboutCourse from './Components/AboutCourse/AboutCourse';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Profits from './Components/Profits/Profits';
import Feedbacks from './Components/Feedbacks/Feedbacks';
import Packages from './Components/Packages/Packages';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <AboutCourse />
      <Profits />
      <Feedbacks />
      <Packages />

      
    </div>
  );
}

export default App;
