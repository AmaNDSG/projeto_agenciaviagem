import BarraNav from "../components/BarraNav";
import BonVoyageCard from "../components/BonVoyageCard";
import BarraFooter from "../components/BarraFooter";
import "./Sobre.css";

const Sobre = () => {
  return (
    <div className="sobre">
      <BarraNav />
      <BonVoyageCard />
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

export default Sobre;
