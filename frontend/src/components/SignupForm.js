import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import Login from "../components/Login";
import PortalPopup from "../components/PortalPopup";
import "./SignupForm.css";

const RegistrationForm = () => {
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);

  const openLoginPopup = useCallback(() => {
    setLoginPopupOpen(true);
  }, []);

  const closeLoginPopup = useCallback(() => {
    setLoginPopupOpen(false);
  }, []);

  return (
    <>
      <form
        className="cadastroform"
        action="cadastroform"
        method="post"
        id="cadastroform"
      >
        <Form.Group className="inputstandard-formgroup3">
          <Form.Label>E-mail</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="inputstandard-formgroup3">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Form.Group className="inputstandard-formgroup3">
          <Form.Label>Confirme a senha</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <Button className="buttondefault3" variant="primary" size="lg">
          Criar minha conta
        </Button>
        <Button
          className="buttonoutlined1"
          variant="outline-primary"
          size="lg"
          onClick={openLoginPopup}
        >
          Já tem uma conta? Entre agora
        </Button>
      </form>
      {isLoginPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Top center"
          onOutsideClick={closeLoginPopup}
        >
          <Login onClose={closeLoginPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default RegistrationForm;
