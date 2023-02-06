import { useMemo } from "react";
import "./Header01.css";

const Header01 = ({
  header01Flex,
  header01Height,
  header01FlexShrink,
  titleJustifyContent,
  card01Height,
  imgconteiner,
  imgconteinerWidth,
  icon,
  icon1,
  precoantesTextDecoration,
  totalTextDecoration,
  porpessoaTextDecoration,
  tag,
  card02Height,
  imgconteiner1,
  imgconteinerWidth1,
  icon2,
  icon3,
  precoantesTextDecoration1,
  totalTextDecoration1,
  porpessoaTextDecoration1,
  tag1,
  card03Height,
  imgconteiner2,
  imgconteinerWidth2,
  icon4,
  icon5,
  precoantesTextDecoration2,
  totalTextDecoration2,
  porpessoaTextDecoration2,
  tag2,
}) => {
  const header01Style = useMemo(() => {
    return {
      flex: header01Flex,
      height: header01Height,
      flexShrink: header01FlexShrink,
    };
  }, [header01Flex, header01Height, header01FlexShrink]);

  const titleStyle = useMemo(() => {
    return {
      justifyContent: titleJustifyContent,
    };
  }, [titleJustifyContent]);

  const card01Style = useMemo(() => {
    return {
      height: card01Height,
    };
  }, [card01Height]);

  const imgconteinerIconStyle = useMemo(() => {
    return {
      width: imgconteinerWidth,
    };
  }, [imgconteinerWidth]);

  const precoantesStyle = useMemo(() => {
    return {
      textDecoration: precoantesTextDecoration,
    };
  }, [precoantesTextDecoration]);

  const totalStyle = useMemo(() => {
    return {
      textDecoration: totalTextDecoration,
    };
  }, [totalTextDecoration]);

  const porpessoaStyle = useMemo(() => {
    return {
      textDecoration: porpessoaTextDecoration,
    };
  }, [porpessoaTextDecoration]);

  const card02Style = useMemo(() => {
    return {
      height: card02Height,
    };
  }, [card02Height]);

  const imgconteinerIcon1Style = useMemo(() => {
    return {
      width: imgconteinerWidth1,
    };
  }, [imgconteinerWidth1]);

  const precoantes1Style = useMemo(() => {
    return {
      textDecoration: precoantesTextDecoration1,
    };
  }, [precoantesTextDecoration1]);

  const total1Style = useMemo(() => {
    return {
      textDecoration: totalTextDecoration1,
    };
  }, [totalTextDecoration1]);

  const porpessoa1Style = useMemo(() => {
    return {
      textDecoration: porpessoaTextDecoration1,
    };
  }, [porpessoaTextDecoration1]);

  const card03Style = useMemo(() => {
    return {
      height: card03Height,
    };
  }, [card03Height]);

  const imgconteinerIcon2Style = useMemo(() => {
    return {
      width: imgconteinerWidth2,
    };
  }, [imgconteinerWidth2]);

  const precoantes2Style = useMemo(() => {
    return {
      textDecoration: precoantesTextDecoration2,
    };
  }, [precoantesTextDecoration2]);

  const total2Style = useMemo(() => {
    return {
      textDecoration: totalTextDecoration2,
    };
  }, [totalTextDecoration2]);

  const porpessoa2Style = useMemo(() => {
    return {
      textDecoration: porpessoaTextDecoration2,
    };
  }, [porpessoaTextDecoration2]);

  return (
    <section className="header011" style={header01Style}>
      <div className="promocards">
        <div className="title18" style={titleStyle}>
          <h2 className="text13">Promoções do mês</h2>
        </div>
        <div className="frame2">
          <div className="cards">
            <div className="card01" style={card01Style}>
              <img
                className="imgconteiner-icon"
                alt=""
                src={imgconteiner}
                style={imgconteinerIconStyle}
              />
              <div className="titulo11">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="localduracao">
                <div className="duracao">
                  <img className="icon12" alt="" src={icon} />
                  <div className="destino">Bangladesh</div>
                </div>
                <div className="duracao">
                  <img className="tag-icon" alt="" src={icon1} />
                  <div className="destino">7 dias</div>
                </div>
              </div>
              <div className="precodesconto">
                <div className="precos">
                  <div className="precoantes" style={precoantesStyle}>
                    R$5.321
                  </div>
                  <div className="preco6">
                    <b className="precoantes" style={totalStyle}>
                      R$3.821
                    </b>
                    <div className="porpessoa4" style={porpessoaStyle}>
                      / Por pessoa
                    </div>
                  </div>
                </div>
                <div className="desconto1">
                  <img className="tag-icon" alt="" src={tag} />
                  <div className="destino">-15%</div>
                </div>
              </div>
            </div>
            <div className="card02" style={card02Style}>
              <img
                className="imgconteiner-icon"
                alt=""
                src={imgconteiner1}
                style={imgconteinerIcon1Style}
              />
              <div className="titulo11">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="localduracao">
                <div className="duracao">
                  <img className="icon12" alt="" src={icon2} />
                  <div className="destino">Bora Bora</div>
                </div>
                <div className="duracao">
                  <img className="tag-icon" alt="" src={icon3} />
                  <div className="destino">7 dias</div>
                </div>
              </div>
              <div className="precodesconto">
                <div className="precos">
                  <div className="precoantes" style={precoantes1Style}>
                    R$3.184
                  </div>
                  <div className="preco6">
                    <b className="precoantes" style={total1Style}>
                      R$1.684
                    </b>
                    <div className="porpessoa4" style={porpessoa1Style}>
                      / Por pessoa
                    </div>
                  </div>
                </div>
                <div className="desconto1">
                  <img className="tag-icon" alt="" src={tag1} />
                  <div className="destino">-15%</div>
                </div>
              </div>
            </div>
            <div className="card02" style={card03Style}>
              <img
                className="imgconteiner-icon"
                alt=""
                src={imgconteiner2}
                style={imgconteinerIcon2Style}
              />
              <div className="titulo11">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
              <div className="localduracao">
                <div className="duracao">
                  <img className="icon12" alt="" src={icon4} />
                  <div className="destino">Maldivas</div>
                </div>
                <div className="duracao">
                  <img className="tag-icon" alt="" src={icon5} />
                  <div className="destino">7 dias</div>
                </div>
              </div>
              <div className="precodesconto">
                <div className="precos">
                  <div className="precoantes" style={precoantes2Style}>
                    R$6.000
                  </div>
                  <div className="preco6">
                    <b className="precoantes" style={total2Style}>
                      R$4.500
                    </b>
                    <div className="porpessoa4" style={porpessoa2Style}>
                      / Por pessoa
                    </div>
                  </div>
                </div>
                <div className="desconto1">
                  <img className="tag-icon" alt="" src={tag2} />
                  <div className="destino">-15%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header01;
