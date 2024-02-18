// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import styles from './App.module.css';
// import AboutCourse from './Components/AboutCourse/AboutCourse';
// import Header from './Components/Header/Header';
// import Main from './Components/Main/Main';
// import Profits from './Components/Profits/Profits';
// import Feedbacks from './Components/Feedbacks/Feedbacks';
// import Packages from './Components/Packages/Packages';
// import Footer from './Components/Footer/Footer';
// import Faq from './Components/Faq/Faq';
// import Unique from './Components/Unique/Unique';
// import Moduls from './Components/Moduls/Moduls';
// import PersonalData from './Components/PersonalData /PersonalData';
// import PublickOffer from './Components/PublicOffer/PublicOffer';

// function App() {
//   return (
//     <div className={styles.App}>
//        <Router>
//         <Header />
//         <Main />
//         <AboutCourse />
//         <Unique />
//         <Profits />
//         <Moduls />
//         <div className={styles.package_box}>
//             <Packages />
//         </div>
//         <Feedbacks />
//         <Faq />
//         <Footer />
//         <Routes>
//           <Route path="/public-offer" element={<PublickOffer />} />
//           <Route path="/personal-data" element={<PersonalData />} />
//         </Routes>
//         </Router>
//     </div>
//   );
// }

// export default App;
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./Components/HomePage/HomePage";
import PublicOfferPage from './Components/PublicOffer/PublicOfferPage';
import PersonalDataPage from './Components/PersonalData /PersonalDataPage';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} exact/>
          <Route path="/public-offer" element={<PublicOfferPage />} />
          <Route path="/personal-data" element={<PersonalDataPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;