import { useEffect } from "react";
import BarraNav from "../components/BarraNav";
import TravelForm from "../components/TravelForm";
import Precototal from "../components/Precototal";
import Next from "../components/Next";
import BarraFooter from "../components/BarraFooter";
import "./Pagamentomeio.css";

const Pagamentomeio = () => {
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
    <div className="pagamentomeio">
      <BarraNav />
      <section className="resultado1">
        <div className="local1">
          <img className="quadrado-icon1" alt="" src="../quadrado@2x.png" />
          <div className="top1">
            <div className="title9">Resultado da sua pesquisa:</div>
          </div>
          <div className="bottom1">
            <iframe
              className="mapas1"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14631.964318274047!2d-46.44539465!3d-23.53282325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1670187186153!5m2!1sen!2sbr"
              data-animate-on-scroll
            />
          </div>
        </div>
      </section>
      <section className="content5">
        <form
          className="agendamento2"
          action="search_form"
          method="post"
          id="search_form"
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

export default Pagamentomeio;
