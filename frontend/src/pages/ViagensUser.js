import BarraNav from "../components/BarraNav";
import ItemsUser from "../components/ItemsUser";
import TripList from "../components/TravelList";
import BarraFooter from "../components/BarraFooter";
import "./ViagensUser.css";

const ViagensUser = () => {
  return (
    <div className="viagens-user">
      <BarraNav />
      <main className="profile">
        <ItemsUser />
        <section className="minhasviagens">
          <div className="titulo4">
            <b className="title10">Minhas viagens</b>
          </div>
          <TravelList />
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

export default ViagensUser;
