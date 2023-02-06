import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Next.css";

const Next = ({ submitId, text }) => {
  const navigate = useNavigate();

  const onButtonOutlinedClick = useCallback(() => {
    navigate("/pagamentocomeco");
  }, [navigate]);

  return (
    <div className="next">
      <div className="title16">
        <div className="text10">
          <p className="deseja-concluir-seu-agendament">
            <span>Deseja concluir seu agendamento?</span>
          </p>
          <p className="clique-no-boto-e-termine-de-p">
            <span>Clique no botão e termine de preencher seus dados.</span>
          </p>
        </div>
      </div>
      <Button
        className="buttonoutlined2"
        variant="outline-primary"
        size="lg"
        onClick={onButtonOutlinedClick}
      >
        Continuar
      </Button>
    </div>
  );
};

export default Next;
