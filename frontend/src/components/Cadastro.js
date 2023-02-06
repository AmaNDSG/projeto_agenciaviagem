import RegistrationForm from "../components/SignupForm";
import "./Cadastro.css";

const Cadastro = ({ onClose }) => {
  return (
    <div className="cadastro">
      <div className="titulo3">
        <h1 className="title7">Cadastrar</h1>
      </div>
      <SignupForm />
    </div>
  );
};

export default Cadastro;
