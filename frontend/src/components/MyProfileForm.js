import "bootstrap/dist/css/bootstrap.min.css";
import { Form } from "react-bootstrap";
import "./MyProfileForm.css";

const ProfileForm = () => {
  return (
    <form className="form4" action="profile" method="post">
      <Form.Group className="inputstandard-formgroup23">
        <Form.Label>Seu nome</Form.Label>
        <Form.Control type="text" readOnly />
      </Form.Group>
      <Form.Group className="inputstandard-formgroup23">
        <Form.Label>Seu sobrenome</Form.Label>
        <Form.Control type="text" readOnly />
      </Form.Group>
      <Form.Group className="inputstandard-formgroup23">
        <Form.Label>Seu e-mail de login</Form.Label>
        <Form.Control type="email" readOnly />
      </Form.Group>
      <Form.Group className="inputstandard-formgroup23">
        <Form.Label>CPF</Form.Label>
        <Form.Control type="number" readOnly />
      </Form.Group>
      <Form.Group className="inputstandard-formgroup23">
        <Form.Label>CEP</Form.Label>
        <Form.Control type="number" readOnly />
      </Form.Group>
      <div className="local11">
        <Form.Group className="inputstandard-formgroup23">
          <Form.Label>Estado</Form.Label>
          <Form.Control type="text" readOnly />
        </Form.Group>
        <Form.Group className="inputstandard-formgroup23">
          <Form.Label>Cidade</Form.Label>
          <Form.Control type="text" readOnly />
        </Form.Group>
        <Form.Group className="inputstandard-formgroup23">
          <Form.Label>Bairro</Form.Label>
          <Form.Control type="text" readOnly />
        </Form.Group>
        <Form.Group className="inputstandard-formgroup23">
          <Form.Label>Logradouro</Form.Label>
          <Form.Control type="text" readOnly />
        </Form.Group>
      </div>
    </form>
  );
};

export default ProfileForm;
