import BarraNav from "../components/BarraNav";
import Header01 from "../components/Header01";
import MainPromoSection from "../components/Header02Section";
import BarraFooter from "../components/BarraFooter";
import "./Promo.css";

const Promo = () => {
  return (
    <div className="promo">
      <BarraNav />
      <main className="main">
        <Header01
          imgconteiner="../imgconteiner3@2x.png"
          icon="icon16@2x.png"
          icon1="icon17@2x.png"
          tag="../tag3@2x.png"
          imgconteiner1="../imgconteiner4@2x.png"
          icon2="icon16@2x.png"
          icon3="icon17@2x.png"
          tag1="../tag3@2x.png"
          imgconteiner2="../imgconteiner5@2x.png"
          icon4="icon16@2x.png"
          icon5="icon17@2x.png"
          tag2="../tag3@2x.png"
        />
        <Header02Section />
      </main>
      <BarraFooter
        img="../img@2x.png"
        img1="../img1@2x.png"
        img2="../img2@2x.png"
        gitHubBackgroundImage={`url("github@3x.png")`}
        linkedInBackgroundImage={`url("linkedin@3x.png")`}
      />
    </div>
  );
};

export default Promo;
