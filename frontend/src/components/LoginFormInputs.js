import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cadastro from "../components/Cadastro";
import PortalPopup from "../components/PortalPopup";
import "./LoginFormInputs.css";

const LoginForm = () => {
  const [isCadastroPopupOpen, setCadastroPopupOpen] = useState(false);

  const openCadastroPopup = useCallback(() => {
    setCadastroPopupOpen(true);
  }, []);

  const closeCadastroPopup = useCallback(() => {
    setCadastroPopupOpen(false);
  }, []);

  return (
    <>
      <form
        className="loginform"
        action="loginform"
        method="get"
        id="loginform"
      >
        <Form.Group className="inputstandard-formgroup1">
          <Form.Label>Seu e-mail</Form.Label>
          <Form.Control type="email" />
        </Form.Group>
        <Form.Group className="inputstandard-formgroup1">
          <Form.Label>Senha</Form.Label>
          <Form.Control type="password" />
        </Form.Group>
        <div className="recuperar">
          <Link className="link" to="/esqueceu">
            Recuperar senha
          </Link>
        </div>
        <Button className="buttondefault2" variant="primary" size="lg">
          Entrar
        </Button>
        <Button
          className="buttonoutlined"
          variant="outline-primary"
          size="lg"
          onClick={openCadastroPopup}
        >
          Me cadastrar
        </Button>
      </form>
      {isCadastroPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeCadastroPopup}
        >
          <Cadastro onClose={closeCadastroPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default LoginForm;
