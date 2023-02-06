import { useState, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import Login from "../components/Login";
import PortalPopup from "../components/PortalPopup";
import "./BarraNav.css";

const BarraNav = () => {
  const navigate = useNavigate();
  const [isLoginPopupOpen, setLoginPopupOpen] = useState(false);

  const onPromoClick = useCallback(() => {
    navigate("/promo");
  }, [navigate]);

  const onPesquisaClick = useCallback(() => {
    navigate("/pesquisa");
  }, [navigate]);

  const onHoteisClick = useCallback(() => {
    navigate("/hoteis");
  }, [navigate]);

  const onSobreClick = useCallback(() => {
    navigate("/sobre");
  }, [navigate]);

  const onContatoClick = useCallback(() => {
    navigate("/contato");
  }, [navigate]);

  const openLoginPopup = useCallback(() => {
    setLoginPopupOpen(true);
  }, []);

  const closeLoginPopup = useCallback(() => {
    setLoginPopupOpen(false);
  }, []);

  return (
    <>
      <div className="barranav">
        <div className="navresponsive">
          <div className="togglemenu">
            <img className="hamburguer-icon" alt="" src="../hamburguer.svg" />
          </div>
          <div className="navbar">
            <div className="logo">
              <b className="bvlogo">
                <span>Bon</span>
                <span className="voyage">Voyage</span>
              </b>
            </div>
            <div className="links">
              <a className="index1">Home</a>
              <Link className="hoteis" to="/promo" onClick={onPromoClick}>
                Promoção
              </Link>
              <Link className="hoteis" to="/pesquisa" onClick={onPesquisaClick}>
                Locais
              </Link>
              <Link className="hoteis" to="/hoteis" onClick={onHoteisClick}>
                Hoteis
              </Link>
              <Link className="hoteis" to="/sobre" onClick={onSobreClick}>
                Sobre nós
              </Link>
              <div className="linkbar">
                <Link className="hoteis" to="/contato" onClick={onContatoClick}>
                  Contato
                </Link>
                <button className="login1" autoFocus onClick={openLoginPopup}>
                  <b className="entrar">Entrar</b>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
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

export default BarraNav;
