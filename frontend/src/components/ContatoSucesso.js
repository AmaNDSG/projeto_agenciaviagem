import "./ContatoSucesso.css";

const ContatoSucesso = ({ onClose }) => {
  return (
    <div className="contato-sucesso">
      <main className="content2">
        <div className="title2">
          <p className="mensagem">
            <span>{`Mensagem `}</span>
          </p>
          <p className="enviada">
            <span>Enviada</span>
          </p>
          <p className="com-sucesso1">
            <span>Com Sucesso!</span>
          </p>
        </div>
        <div className="icon4">
          <img className="icon5" alt="" src="../icon10@2x.png" />
        </div>
      </main>
    </div>
  );
};

export default ContatoSucesso;
