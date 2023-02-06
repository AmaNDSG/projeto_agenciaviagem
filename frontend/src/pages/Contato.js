import BarraNav from "../components/BarraNav";
import ContactCard from "../components/ContactCard";
import BarraFooter from "../components/BarraFooter";
import "./Contato.css";

const Contato = () => {
  return (
    <div className="contato">
      <BarraNav />
      <ContactCard />
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

export default Contato;
