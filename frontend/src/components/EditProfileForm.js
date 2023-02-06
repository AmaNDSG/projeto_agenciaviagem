import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./EditProfileForm.css";

const ProfileInputForm = () => {
  return (
    <form className="form5" action="profile" method="post">
      <Form.Group className="inputstandard-formgroup32">
        <Form.Label>Seu nome</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="inputstandard-formgroup32">
        <Form.Label>Seu sobrenome</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="inputstandard-formgroup32">
        <Form.Label>Seu e-mail de login</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="inputstandard-formgroup32">
        <Form.Label>CPF</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
      <Form.Group className="inputstandard-formgroup32">
        <Form.Label>CEP</Form.Label>
        <Form.Control type="number" />
      </Form.Group>
      <div className="local12">
        <Form.Group className="inputstandard-formgroup32">
          <Form.Label>Estado</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="inputstandard-formgroup32">
          <Form.Label>Cidade</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="inputstandard-formgroup32">
          <Form.Label>Bairro</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="inputstandard-formgroup32">
          <Form.Label>Logradouro</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </div>
      <div className="botoes1">
        <Button variant="outline-primary" size="lg">
          Button
        </Button>
        <Button variant="primary" size="lg">
          Button
        </Button>
      </div>
    </form>
  );
};

export default ProfileInputForm;
