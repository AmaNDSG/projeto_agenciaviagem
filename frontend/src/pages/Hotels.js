import BarraNav from "../components/BarraNav";
import Header01Section from "../components/Header01Section";
import LoremIpsumSection from "../components/LoremIpsumSection";
import BarraFooter from "../components/BarraFooter";
import "./Hotels.css";

const Hotels = () => {
  return (
    <div className="hotels">
      <BarraNav />
      <main className="content6">
        <Header01Section />
        <LoremIpsumSection />
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

export default Hotels;
