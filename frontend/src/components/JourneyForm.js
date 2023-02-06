import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Precototal from "../components/Precototal";
import Next from "../components/Next";
import "./JourneyForm.css";

const TripForm = () => {
  return (
    <section className="content12">
      <form
        className="agendamento4"
        action="searchform"
        method="post"
        id="searchform"
        autoComplete="on"
      >
        <div className="form3">
          <div className="titulo10">
            <div className="formulrio-para-agendar1">
              Formulário para agendar viagem
            </div>
          </div>
          <div className="grupo013">
            <div className="destinos3">
              <Form.Group className="inputstandard-formgroup18">
                <Form.Label>Local de origem</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="inputstandard-formgroup18">
                <Form.Label>Local de destino</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
            <div className="datas3">
              <Form.Group className="inputstandard-formgroup18">
                <Form.Label>Dia de ida</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="inputstandard-formgroup18">
                <Form.Label>Dia de volta *Opcional</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
          </div>
          <div className="grupo023">
            <Form.Select className="selectdefault-formselect3">
              <option>Quantidade de passageiros</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
            </Form.Select>
          </div>
          <div className="gruposelect">
            <div className="select">
              <div className="hospedagem">
                <label className="text11" htmlFor="hospedagem">
                  Hospedagem?
                </label>
                <form className="select1" action="hspdg_select" method="post">
                  <Form.Check
                    name="semhosp"
                    id="semhosp"
                    label="Não."
                    type="radio"
                    inline
                  />
                  <Form.Check
                    name="comhosp"
                    id="comhosp"
                    label="Sim."
                    type="radio"
                    inline
                  />
                </form>
              </div>
              <div className="hospedagem">
                <label className="text12" htmlFor="pagamento">
                  Forma de Pagamento
                </label>
                <form className="select1" action="pgmnt_select" method="post">
                  <Form.Check
                    name="credito"
                    id="credito"
                    label="Crédito"
                    type="radio"
                    inline
                  />
                  <Form.Check
                    name="pdf"
                    id="pdf"
                    label="Impresso (PDF)"
                    type="radio"
                    inline
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <Precototal />
        <Next />
      </form>
    </section>
  );
};

export default TripForm;
