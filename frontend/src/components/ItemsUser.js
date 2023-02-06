import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import Excluir from "../components/Excluir";
import PortalPopup from "../components/PortalPopup";
import "./ItemsUser.css";

const ItemsUser = () => {
  const navigate = useNavigate();
  const [isExcluirPopupOpen, setExcluirPopupOpen] = useState(false);

  const onNav01Click = useCallback(() => {
    navigate("/perfil");
  }, [navigate]);

  const onNav02Click = useCallback(() => {
    navigate("/viagens");
  }, [navigate]);

  const openExcluirPopup = useCallback(() => {
    setExcluirPopupOpen(true);
  }, []);

  const closeExcluirPopup = useCallback(() => {
    setExcluirPopupOpen(false);
  }, []);

  const onNav04Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <>
      <section className="items-user">
        <div className="welcome">
          <div className="content13">
            <div className="title17">Bem-Vindo!</div>
            <b className="name">nome</b>
          </div>
        </div>
        <div className="navegacao">
          <div className="navperfil">
            <button className="nav01" onClick={onNav01Click}>
              <div className="editar1">Perfil</div>
            </button>
            <button className="nav02" onClick={onNav02Click}>
              <div className="viagens">Minhas viagens</div>
            </button>
            <button className="nav03" onClick={openExcluirPopup}>
              <div className="deletar">Deletar conta</div>
            </button>
            <button className="nav04" onClick={onNav04Click}>
              <div className="exit">Sair</div>
            </button>
          </div>
        </div>
      </section>
      {isExcluirPopupOpen && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeExcluirPopup}
        >
          <Excluir onClose={closeExcluirPopup} />
        </PortalPopup>
      )}
    </>
  );
};

export default ItemsUser;
