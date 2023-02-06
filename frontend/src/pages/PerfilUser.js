import { useCallback } from "react";
import BarraNav from "../components/BarraNav";
import ItemsUser from "../components/ItemsUser";
import { useNavigate } from "react-router-dom";
import ProfileForm from "../components/MyProfileForm";
import BarraFooter from "../components/BarraFooter";
import "./PerfilUser.css";

const PerfilUser = () => {
  const navigate = useNavigate();

  const onEditClick = useCallback(() => {
    navigate("/perfiledit-user");
  }, [navigate]);

  return (
    <div className="perfil-user">
      <BarraNav />
      <main className="profile1">
        <ItemsUser />
        <section className="perfil">
          <div className="titulo5">
            <b className="titulo6">Meu perfil</b>
            <button className="edit" autoFocus onClick={onEditClick}>
              <img className="vector-icon" alt="" src="../vector.svg" />
            </button>
          </div>
          <MyProfileForm />
        </section>
      </main>
      <BarraFooter
        img="../img@2x.png"
        img1="../img1@2x.png"
        img2="../img2@2x.png"
        gitHubBackgroundImage={`url("github@3x.png")`}
        linkedInBackgroundImage={`url("linkedin@3x.png")`}
      />
    </div>
  );
};

export default PerfilUser;
