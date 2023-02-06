import { useState, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import ContatoSucesso from "../components/ContatoSucesso";
import PortalPopup from "../components/PortalPopup";
import "./ContactCard.css";

const ContactCard = () => {
  const [isContatoSucessoPopupOpen, setContatoSucessoPopupOpen] =
    useState(false);

  const openContatoSucessoPopup = useCallback(() => {
    setContatoSucessoPopupOpen(true);
  }, []);

  const closeContatoSucessoPopup = useCallback(() => {
    setContatoSucessoPopupOpen(false);
  }, []);

  return (
    <>
      <main className="main1">
        <div className="content15">
          <div className="card">
            <div className="icontitle">
              <b className="cntc">
                <p className="com-dvidas-ou">Com dúvidas ou problemas?</p>
                <p className="com-dvidas-ou">Entre em contato conosco !</p>
                <p className="blank-line">&nbsp;</p>
              </b>
              <img className="service-icon" alt="" src="../service@2x.png" />
            </div>
          </div>
          <form className="cnt" action="contact" method="post" id="contact">
            <form
              className="form6"
              action="contactform"
              method="post"
              id="contactform"
            >
              <Form.Group className="input01-formgroup1">
                <Form.Label>Seu nome</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="input01-formgroup1">
                <Form.Label>Seu e-mail para contato</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
              <Form.Group className="input01-formgroup1">
                <Form.Label>Assunto/Problema</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
              <Form.Group className="textarea01-formgroup">
                <Form.Label>Sua mensagem sobre o assunto/problema</Form.Label>
                <Form.Control as="textarea" />
              </Form.Group>
              <Button
                className="submit1"
                variant="outline-primary"
                size="lg"
                onClick={openContatoSucessoPopup}
              >
                Enviar mensagem
              </Button>
            </form>
          </form>
        </div>
      </main>
      {isContatoSucessoPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeContatoSucessoPopup}
        >
          <ContatoSucesso onClose={closeContatoSucessoPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ContactCard;
