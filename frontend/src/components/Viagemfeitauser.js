import "./Viagemfeitauser.css";

const Viagemfeitauser = () => {
  return (
    <div className="viagemfeita" id="searchresultado">
      <div className="destinoviagem" id="destinoviagem">
        <div className="destinoviagem01" id="country">
          BRASIL
        </div>
        <div className="destinoviagem02" id="state">
          RIO DE JANEIRO
        </div>
      </div>
      <div className="preco5" id="preco">
        <div className="destinoviagem01" id="preco">
          $70.00
        </div>
        <div className="destinoviagem02" id="pagamento">
          CRED
        </div>
      </div>
      <div className="desconto" id="desconto">
        <div className="destinoviagem01" id="desconto">
          -$270.00
        </div>
        <div className="destinoviagem02">DESCONTO</div>
      </div>
      <div className="total5" id="total">
        <div className="destinoviagem01" id="precototal">
          $500.00
        </div>
        <div className="destinoviagem02">TOTAL</div>
      </div>
      <div className="pdf" id="pdf">
        <img className="pdfbox-icon" alt="" src="../pdfbox.svg" />
      </div>
    </div>
  );
};

export default Viagemfeitauser;
