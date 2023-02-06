import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import "./Excluir.css";

const Excluir = ({ onClose }) => {
  return (
    <div className="excluir">
      <div className="titulo">
        <h1 className="title4">Excluir Conta</h1>
        <h2 className="desc">
          Ao excluir sua conta, todos seus dados serão deletados de nosso
          sistema.
        </h2>
      </div>
      <div className="bottons">
        <Button variant="outline-primary" size="lg">
          Excluir
        </Button>
        <Button
          className="buttondefault"
          variant="primary"
          size="lg"
          onClick={onClose}
        >
          Não excluir
        </Button>
      </div>
    </div>
  );
};

export default Excluir;
