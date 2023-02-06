import "./PagamentoSucesso.css";

const PagamentoSucesso = ({ onClose }) => {
  return (
    <div className="pagamento-sucesso">
      <main className="content3">
        <div className="title3">
          <p className="agendamento">
            <span>{`Agendamento `}</span>
          </p>
          <p className="agendamento">
            <span className="finalizado1">Finalizado</span>
            <span>!</span>
          </p>
          <p className="boa-viagem">
            <span>Boa Viagem!</span>
          </p>
        </div>
        <div className="icon6">
          <img className="icon7" alt="" src="../icon10@2x.png" />
        </div>
      </main>
    </div>
  );
};

export default PagamentoSucesso;
