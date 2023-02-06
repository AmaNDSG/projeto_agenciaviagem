import "./Header02Section.css";

const MainPromoSection = () => {
  return (
    <section className="header021">
      <div className="promocards1">
        <div className="title19">
          <h2 className="text14">Promoções Principais</h2>
        </div>
        <div className="frame3">
          <div className="cards1">
            <div className="card011">
              <img
                className="imgconteiner-icon3"
                alt=""
                src="../imgconteiner6@2x.png"
              />
              <div className="titulo14">
                Promoção de Feriados: 25% de desconto ao marcar uma viagem nos
                meses de feriados (Natal, Ano novo, Carnaval, Halloween e
                Páscoa).
              </div>
              <div className="localduracao3">
                <div className="local16">
                  <img className="icon18" alt="" src="../icon20@2x.png" />
                  <div className="destino3">Bangladesh</div>
                </div>
                <div className="local16">
                  <img className="icon19" alt="" src="../icon21@2x.png" />
                  <div className="destino3">7 dias</div>
                </div>
              </div>
              <div className="precodesconto3">
                <div className="precos3">
                  <div className="precoantes3">R$5.321</div>
                  <div className="preco9">
                    <div className="total9">R$3.821</div>
                    <div className="porpessoa7">/ Por pessoa</div>
                  </div>
                </div>
                <div className="desconto7">
                  <img className="icon19" alt="" src="../tag6@2x.png" />
                  <div className="destino3">-25%</div>
                </div>
              </div>
            </div>
            <div className="card021">
              <img
                className="imgconteiner-icon3"
                alt=""
                src="../imgconteiner7@2x.png"
              />
              <div className="titulo15">
                <span>{`Promoção Aniversariante: 20% de desconto para pacotes nos dia de aniversário! `}</span>
                <span className="para-o-desconto">
                  * Para o desconto funcionar, é necessário marcar data de
                  nascimento no seu perfil.
                </span>
              </div>
              <div className="localduracao4">
                <div className="local16">
                  <img className="icon18" alt="" src="../icon20@2x.png" />
                  <div className="destino3">Bora Bora</div>
                </div>
                <div className="local16">
                  <img className="icon19" alt="" src="../icon21@2x.png" />
                  <div className="destino3">7 dias</div>
                </div>
              </div>
              <div className="precodesconto3">
                <div className="precos3">
                  <div className="precoantes3">
                    <span>R$</span>
                    <b>3.184</b>
                  </div>
                  <div className="preco10">
                    <div className="total9">R$1.684</div>
                    <div className="porpessoa7">/ Por pessoa</div>
                  </div>
                </div>
                <div className="desconto9">
                  <img className="icon19" alt="" src="../tag6@2x.png" />
                  <div className="destino3">-20%</div>
                </div>
              </div>
            </div>
            <div className="card021">
              <img
                className="imgconteiner-icon3"
                alt=""
                src="../imgconteiner8@2x.png"
              />
              <div className="titulo16">{`Promoção Primeira Viagem: Faça um pacote na sua primeria viagem e ganhe 5% de desconto. `}</div>
              <div className="localduracao4">
                <div className="local16">
                  <img className="icon18" alt="" src="../icon20@2x.png" />
                  <div className="destino3">Maldivas</div>
                </div>
                <div className="local16">
                  <img className="icon19" alt="" src="../icon21@2x.png" />
                  <div className="destino3">7 dias</div>
                </div>
              </div>
              <div className="precodesconto3">
                <div className="precos3">
                  <div className="precoantes3">R$6.000</div>
                  <div className="preco10">
                    <div className="total9">R$4.500</div>
                    <div className="porpessoa7">/ Por pessoa</div>
                  </div>
                </div>
                <div className="desconto9">
                  <img className="icon19" alt="" src="../tag6@2x.png" />
                  <div className="destino3">-5%</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPromoSection;
