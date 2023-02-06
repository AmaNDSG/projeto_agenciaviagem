import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./TravelForm.css";

const TravelForm = () => {
  return (
    <div className="form2">
      <div className="titulo9">
        <div className="formulrio-para-agendar">
          Formulário para agendar viagem
        </div>
      </div>
      <div className="grupo012">
        <div className="destinos2">
          <Form.Group className="inputstandard-formgroup10">
            <Form.Label>Local de origem</Form.Label>
            <Form.Control type="text" readOnly />
          </Form.Group>
          <Form.Group className="inputstandard-formgroup10">
            <Form.Label>Local de destino</Form.Label>
            <Form.Control type="text" readOnly />
          </Form.Group>
        </div>
        <div className="datas2">
          <Form.Group className="inputstandard-formgroup10">
            <Form.Label>Dia de ida</Form.Label>
            <Form.Control type="text" readOnly />
          </Form.Group>
          <Form.Group className="inputstandard-formgroup10">
            <Form.Label>Dia de volta *Opcional</Form.Label>
            <Form.Control type="text" readOnly />
          </Form.Group>
        </div>
      </div>
      <div className="grupo022">
        <Form.Select className="selectdefault-formselect1">
          <option>Quantidade de passageiros</option>
          <option value="01">01</option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="04">04</option>
          <option value="05">05</option>
        </Form.Select>
      </div>
      <div className="grupo022">
        <Form.Select className="selectdefault-formselect1">
          <option>Hotel</option>
          <option value="Hotel Europa">Hotel Europa</option>
          <option value="Hotel Oceania">Hotel Oceania</option>
          <option value="Hotel Ántartida">Hotel Ántartida</option>
          <option value="Hotel Africa">Hotel Africa</option>
          <option value="Hotel Asia">Hotel Asia</option>
          <option value="Hotel Americas">Hotel Americas</option>
        </Form.Select>
      </div>
      <div className="grupo04" id="cartao">
        <div className="pgmnt01">
          <Form.Group className="inputstandard-formgroup14">
            <Form.Label>Nome no cartão</Form.Label>
            <Form.Control type="text" readOnly />
          </Form.Group>
          <Form.Group className="inputstandard-formgroup14">
            <Form.Label>Numero do cartão</Form.Label>
            <Form.Control type="text" readOnly />
          </Form.Group>
        </div>
        <div className="pgmnt02">
          <Form.Group className="inputstandard-formgroup14">
            <Form.Label>Validade</Form.Label>
            <Form.Control type="text" readOnly />
          </Form.Group>
          <Form.Group className="inputstandard-formgroup14">
            <Form.Label>CVV</Form.Label>
            <Form.Control type="number" readOnly />
          </Form.Group>
        </div>
      </div>
    </div>
  );
};

export default TravelForm;
