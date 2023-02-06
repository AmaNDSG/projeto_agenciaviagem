import BarraNav from "../components/BarraNav";
import ExploreHeader from "../components/BonVoyageHeader";
import ArticleCard from "../components/ArticleForm";
import PromoSection from "../components/MonthlyPromo";
import MainIndex04 from "../components/MainIndex04";
import MainIndex05 from "../components/MainIndex05";
import BarraFooter from "../components/BarraFooter";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <BarraNav />
      <BonVoyageHeader />
      <ArticleForm />
      <MonthlyPromo />
      <MainIndex04 />
      <MainIndex05 />
      <BarraFooter img="img23@2x.png" img1="img24@2x.png" img2="img25@2x.png" />
    </div>
  );
};

export default Home;
