import BarraNav from "../components/BarraNav";
import ItemsUser from "../components/ItemsUser";
import ProfileInputForm from "../components/EditProfileForm";
import BarraFooter from "../components/BarraFooter";
import "./PerfileditUser.css";

const PerfileditUser = () => {
  return (
    <div className="perfiledit-user">
      <BarraNav />
      <main className="profile2">
        <ItemsUser />
        <section className="editar">
          <div className="titulo7">
            <b className="title11">Editar perfil</b>
          </div>
          <EditProfileForm />
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

export default PerfileditUser;
