import LoginForm from "../components/LoginFormInputs";
import "./Login.css";

const Login = ({ onClose }) => {
  return (
    <div className="login">
      <div className="titulo2">
        <h1 className="title6">Entrar</h1>
      </div>
      <LoginFormInputs />
    </div>
  );
};

export default Login;
