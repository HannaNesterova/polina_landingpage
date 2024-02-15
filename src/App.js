
import styles from './App.module.css';
import AboutCourse from './Components/AboutCourse/AboutCourse';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Profits from './Components/Profits/Profits';
import Feedbacks from './Components/Feedbacks/Feedbacks';
import Packages from './Components/Packages/Packages';
import Footer from './Components/Footer/Footer';
import Faq from './Components/Faq/Faq';
import Unique from './Components/Unique/Unique';
import Moduls from './Components/Moduls/Moduls';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Main />
      <AboutCourse />
      <Unique />
      <Profits />
      <Moduls />
    <div className={styles.package_box}>
        <Packages />
    </div>
      <Feedbacks />
      <Faq />
      <Footer />
      
    </div>
  );
}

export default App;
