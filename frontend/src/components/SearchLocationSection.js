import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import Precototal from "../components/Precototal";
import Next from "../components/Next";
import "./SearchLocationSection.css";

const LocationSearchForm = () => {
  return (
    <section className="content11">
      <form
        className="agendamento3"
        action="searchform"
        method="post"
        id="searchform"
        autoComplete="on"
      >
        <div className="form1">
          <div className="titulo8">
            <div className="pesquisar-outro-local">Pesquisar outro local:</div>
          </div>
          <div className="grupo011">
            <div className="destinos1">
              <Form.Group className="inputstandard-formgroup6">
                <Form.Label>Local de origem</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="inputstandard-formgroup6">
                <Form.Label>Local de destino</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
            <div className="datas1">
              <Form.Group className="inputstandard-formgroup6">
                <Form.Label>Dia de ida</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="inputstandard-formgroup6">
                <Form.Label>Dia de volta *Opcional</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </div>
          </div>
          <div className="grupo021">
            <Form.Select className="selectdefault-formselect">
              <option>Quantidade de passageiros</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
            </Form.Select>
          </div>
        </div>
        <Precototal />
        <Next />
      </form>
    </section>
  );
};

export default LocationSearchForm;
