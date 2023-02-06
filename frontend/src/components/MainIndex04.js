import { useCallback } from "react";
import { Button, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./MainIndex04.css";

const MainIndex04 = () => {
  const navigate = useNavigate();

  const onButtonClick = useCallback(() => {
    navigate("/pesquisa");
  }, [navigate]);

  return (
    <section className="main04">
      <div className="header04">
        <div className="items-pop01">
          <div className="content8">
            <div className="objects">
              <div className="top2">
                <div className="destinos03">
                  <img className="image-icon" alt="" src="../image@2x.png" />
                  <div className="gradient" />
                  <div className="descricao1">
                    <b className="local2">Agra</b>
                  </div>
                </div>
                <div className="destinos03">
                  <img className="image-icon" alt="" src="../image1@2x.png" />
                  <div className="gradient" />
                  <div className="descricao1">
                    <b className="local2">Paris</b>
                  </div>
                </div>
              </div>
              <div className="top2">
                <div className="destinos03">
                  <img className="image-icon" alt="" src="../image2@2x.png" />
                  <div className="gradient" />
                  <div className="descricao1">
                    <b className="local2">Italia</b>
                  </div>
                </div>
                <div className="destinos03">
                  <img className="image-icon" alt="" src="../image3@2x.png" />
                  <div className="gradient" />
                  <div className="descricao1">
                    <b className="local2">Portugal</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="saibamais">
            <div className="frame">
              <div className="title13">
                <b>Locais Populares</b>
                <span>
                  : Descruba e aventure-se nos locais mais procurados pelos
                  nossos clientes.
                </span>
              </div>
              <Button
                className="button"
                variant="text"
                color="primary"
                endIcon={<Icon>arrow_forward_ios_sharp</Icon>}
                onClick={onButtonClick}
              >
                Saiba mais
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainIndex04;
