import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Pesquisa from "./pages/Pesquisa";
import Pagamentofinal from "./pages/Pagamentofinal";
import Pagamentomeio from "./pages/Pagamentomeio";
import Pagamentocomeco from "./pages/Pagamentocomeco";
import ViagensUser from "./pages/ViagensUser";
import PerfilUser from "./pages/PerfilUser";
import PerfileditUser from "./pages/PerfileditUser";
import Promo from "./pages/Promo";
import Hotels from "./pages/Hotels";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/pesquisa":
        title = "";
        metaDescription = "";
        break;
      case "/pagamentofinal":
        title = "";
        metaDescription = "";
        break;
      case "/pagamentomeio":
        title = "";
        metaDescription = "";
        break;
      case "/pagamentocomeco":
        title = "";
        metaDescription = "";
        break;
      case "/viagens":
        title = "";
        metaDescription = "";
        break;
      case "/perfil":
        title = "";
        metaDescription = "";
        break;
      case "/perfiledit-user":
        title = "";
        metaDescription = "";
        break;
      case "/promo":
        title = "";
        metaDescription = "";
        break;
      case "/hoteis":
        title = "";
        metaDescription = "";
        break;
      case "/sobre":
        title = "";
        metaDescription = "";
        break;
      case "/contato":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/pesquisa" element={<Pesquisa />} />

      <Route path="/pagamentofinal" element={<Pagamentofinal />} />

      <Route path="/pagamentomeio" element={<Pagamentomeio />} />

      <Route path="/pagamentocomeco" element={<Pagamentocomeco />} />

      <Route path="/viagens" element={<ViagensUser />} />

      <Route path="/perfil" element={<PerfilUser />} />

      <Route path="/perfiledit-user" element={<PerfileditUser />} />

      <Route path="/promo" element={<Promo />} />

      <Route path="/hoteis" element={<Hotels />} />

      <Route path="/sobre" element={<Sobre />} />

      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}
export default App;
