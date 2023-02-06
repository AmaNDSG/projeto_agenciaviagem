import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./BonVoyageHeader.css";

const ExploreHeader = () => {
  return (
    <header className="main01">
      <div className="header01">
        <div className="headerpt01">
          <div className="headertitle">
            <div className="title12">
              <p className="faa-uma-viagem">
                <span>Faça uma viagem</span>
              </p>
              <p className="explore-o-mundo">
                <b>Explore o Mundo!</b>
              </p>
            </div>
          </div>
          <form
            className="form"
            action="searchform"
            method="post"
            id="searchform"
          >
            <div className="grupo01">
              <div className="destinos">
                <Form.Group className="input01-formgroup">
                  <Form.Label>Local de origem</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="input01-formgroup">
                  <Form.Label>Local de destino</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
              <div className="datas">
                <Form.Group className="input01-formgroup">
                  <Form.Label>Dia de ida</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
                <Form.Group className="input01-formgroup">
                  <Form.Label>Dia de volta *Opcional</Form.Label>
                  <Form.Control type="text" />
                </Form.Group>
              </div>
            </div>
            <div className="grupo02">
              <Form.Select className="select01-formselect">
                <option>Quantidade de passageiros</option>
                <option value="01">01</option>
                <option value="02">02</option>
                <option value="03">03</option>
                <option value="04">04</option>
                <option value="05">05</option>
              </Form.Select>
            </div>
            <Button className="submit" variant="outline-primary" size="lg">
              Buscar Viagem
            </Button>
          </form>
        </div>
        <div className="headerimg01">
          <img className="img-icon" alt="" src="../img@2x.png" />
        </div>
      </div>
    </header>
  );
};

export default ExploreHeader;
