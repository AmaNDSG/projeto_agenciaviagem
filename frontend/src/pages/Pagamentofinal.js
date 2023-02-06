import { useEffect } from "react";
import BarraNav from "../components/BarraNav";
import TravelForm from "../components/TravelForm";
import Precototal from "../components/Precototal";
import Next from "../components/Next";
import BarraFooter from "../components/BarraFooter";
import "./Pagamentofinal.css";

const Pagamentofinal = () => {
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add("animate");
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);

  return (
    <div className="pagamentofinal">
      <BarraNav />
      <section className="resultado">
        <div className="local">
          <img className="quadrado-icon" alt="" src="../quadrado@2x.png" />
          <div className="top">
            <div className="title8">Resultado da sua pesquisa:</div>
          </div>
          <div className="bottom">
            <iframe
              className="mapas"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14631.964318274047!2d-46.44539465!3d-23.53282325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1670187186153!5m2!1sen!2sbr"
              data-animate-on-scroll
            />
          </div>
        </div>
      </section>
      <section className="content4">
        <form
          className="agendamento1"
          action="searchform"
          method="post"
          id="searchform"
          autoComplete="on"
        >
          <TravelForm />
          <Precototal />
          <Next />
        </form>
      </section>
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

export default Pagamentofinal;
