import { useEffect } from "react";
import "./Resultado.css";

const Resultado = ({ mapasSrc }) => {
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
    <section className="resultado2">
      <div className="local10">
        <img className="quadrado-icon2" alt="" src="../quadrado@2x.png" />
        <div className="top4">
          <div className="title15">Resultado da sua pesquisa:</div>
        </div>
        <div className="bottom4">
          <iframe className="mapas2" src={mapasSrc} data-animate-on-scroll />
        </div>
      </div>
    </section>
  );
};

export default Resultado;
