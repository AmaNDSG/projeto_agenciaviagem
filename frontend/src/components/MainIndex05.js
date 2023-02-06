import { useCallback } from "react";
import { Button, Icon } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./MainIndex05.css";

const MainIndex05 = () => {
  const navigate = useNavigate();

  const onButton1Click = useCallback(() => {
    navigate("/hoteis");
  }, [navigate]);

  return (
    <section className="main05">
      <div className="header05">
        <div className="items-pop02">
          <div className="content9">
            <div className="objects1">
              <div className="top3">
                <div className="hotel-1">
                  <div className="gradient4" />
                  <div className="conteiner">
                    <div className="descricao5">
                      <b className="text">Hotel Europa</b>
                      <div className="locais">
                        <img className="icon8" alt="" src="../icon6@2x.png" />
                        <div className="text">
                          Hotel localizado por todo continente
                        </div>
                      </div>
                    </div>
                    <div className="preco">
                      <div className="text">{`A partir de `}</div>
                      <div className="total">
                        <b className="text">R$175</b>
                        <div className="porpessoa">/ Por pessoa</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hotel-2">
                  <div className="gradient4" />
                  <div className="conteiner">
                    <div className="descricao5">
                      <b className="text">Hotel Africa</b>
                      <div className="locais">
                        <img className="icon8" alt="" src="../icon6@2x.png" />
                        <div className="text">
                          Hotel localizado por todo continente
                        </div>
                      </div>
                    </div>
                    <div className="preco">
                      <div className="text">{`A partir de `}</div>
                      <div className="total">
                        <b className="text">R$250</b>
                        <div className="porpessoa">/ Por pessoa</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="top3">
                <div className="hotel-3">
                  <div className="gradient4" />
                  <div className="conteiner">
                    <div className="descricao5">
                      <b className="text">Hotel Oceania</b>
                      <div className="locais">
                        <img className="icon8" alt="" src="../icon6@2x.png" />
                        <div className="text">
                          Hotel localizado por todo continente
                        </div>
                      </div>
                    </div>
                    <div className="preco">
                      <div className="text">{`A partir de `}</div>
                      <div className="total">
                        <b className="text">R$300</b>
                        <div className="porpessoa">/ Por pessoa</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hotel-4">
                  <div className="gradient4" />
                  <div className="conteiner">
                    <div className="descricao5">
                      <b className="text">Hotel Asia</b>
                      <div className="locais">
                        <img className="icon8" alt="" src="../icon6@2x.png" />
                        <div className="text">
                          Hotel localizado por todo continente
                        </div>
                      </div>
                    </div>
                    <div className="preco">
                      <div className="text">{`A partir de `}</div>
                      <div className="total">
                        <b className="text">R$250</b>
                        <div className="porpessoa">/ Por pessoa</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="saibamais1">
            <div className="frame1">
              <div className="title14">
                <b>Descubra os hoteis parceiros de nossa agência!</b>
                <span>
                  {" "}
                  Nossos parceiros lhe entregerão a melhor hospedagem para você!
                </span>
              </div>
              <Button
                className="button1"
                variant="text"
                color="primary"
                endIcon={<Icon>arrow_forward_ios_sharp</Icon>}
                onClick={onButton1Click}
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

export default MainIndex05;
