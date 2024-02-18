import Header from "../Header/Header";
import Main from "../Main/Main";
import AboutCourse from "../AboutCourse/AboutCourse";
import Unique from "../Unique/Unique";
import Profits from "../Profits/Profits";
import Moduls from "../Moduls/Moduls";
import Packages from "../Packages/Packages";
import Feedbacks from "../Feedbacks/Feedbacks";
import Faq from "../Faq/Faq";
import Footer from "../Footer/Footer";
import ForWho from "../ForWho/ForWho";

function HomePage() {
    return (
      <div >
         <Header />
         <Main />
         <AboutCourse />
         <Unique />
         <Profits />
         <Moduls />
         <Packages />
         <Feedbacks />
         <Faq />
         <ForWho />
         <Footer />
      </div>
    );
  }
  

  export default HomePage;