import { useMemo } from "react";
import "./BarraFooter.css";

const BarraFooter = ({
  img,
  img1,
  img2,
  gitHubBackgroundImage,
  linkedInBackgroundImage,
}) => {
  const gitHubStyle = useMemo(() => {
    return {
      backgroundImage: gitHubBackgroundImage,
    };
  }, [gitHubBackgroundImage]);

  const linkedInStyle = useMemo(() => {
    return {
      backgroundImage: linkedInBackgroundImage,
    };
  }, [linkedInBackgroundImage]);

  return (
    <div className="barrafooter">
      <div className="footer">
        <div className="backg">
          <div className="logo1">
            <b className="logotipo">
              <span>Bon</span>
              <span className="voyage1">Voyage</span>
            </b>
          </div>
          <div className="contact">
            <div className="info">
              <div className="fone">
                <img className="img-icon1" alt="" src={img} />
                <div className="text4">+8008 1001</div>
              </div>
              <div className="fone">
                <img className="img-icon1" alt="" src={img1} />
                <div className="text4">bon@voyage.com</div>
              </div>
              <div className="endereco">
                <img className="img-icon1" alt="" src={img2} />
                <div className="text6">
                  1001, Lorem Mollis, Aliquam Ut, Brasil
                </div>
              </div>
            </div>
            <div className="icons">
              <a
                className="github"
                href="https://github.com/AmaNDSG"
                target="_blank"
                style={gitHubStyle}
              />
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/amandsg/"
                target="_blank"
                style={linkedInStyle}
              />
            </div>
          </div>
          <div className="copy">
            <div className="content10">
              <div className="text4">
                <p className="bonvoyage-2022">BonVoyage © 2022</p>
                <p className="todos-os-direitos">
                  Todos os direitos reservados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarraFooter;
