import BarraNav from "../components/BarraNav";
import Resultado from "../components/Resultado";
import TripForm from "../components/JourneyForm";
import BarraFooter from "../components/BarraFooter";
import "./Pagamentocomeco.css";

const Pagamentocomeco = () => {
  return (
    <div className="pagamentocomeco">
      <BarraNav />
      <Resultado mapasSrc="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14631.964318274047!2d-46.44539465!3d-23.53282325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1670187186153!5m2!1sen!2sbr" />
      <JourneyForm />
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

export default Pagamentocomeco;
