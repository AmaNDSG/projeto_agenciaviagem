import BarraNav from "../components/BarraNav";
import Resultado from "../components/Resultado";
import LocationSearchForm from "../components/SearchLocationSection";
import BarraFooter from "../components/BarraFooter";
import "./Pesquisa.css";

const Pesquisa = () => {
  return (
    <div className="pesquisa">
      <BarraNav />
      <Resultado mapasSrc="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14631.964318274047!2d-46.44539465!3d-23.53282325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbr!4v1670187186153!5m2!1sen!2sbr" />
      <SearchLocationSection />
      <BarraFooter
        img="../img@2x.png"
        img1="../img1@2x.png"
        img2="../img2@2x.png"
        gitHubBackgroundImage={`url("https://d1xzdqg8s8ggsr.cloudfront.net/63a119a0adff6c7d49b9a70f/19a2e1bc-27b9-476b-88e5-3d60665e8efe_1671502723206289000?Expires=-62135596800&Signature=QT8yUMXOpeqfxBxTJfWkXf0solfBIMWfBn37WPnfGcdTIixMXMvChMHA2fJLPdM3nlTSqmweLMcm1r~FdvYFnbJRDq5BldZfZtPd~jq32p77iF42sK7K2e58FgfYfZXvDEAwVxGrjMcqU-a1eKUURi0J8e8zpt9YC2NKawBAdZT88D~tPJMfmZfxT8Yp8RZzbW3J-o6~fNLy3r0CkpJckM~tUU68MP85U002GTtVbt~xzwRX9ejnEk57jli-sDpUm2ghJd0xGjCB3zHtFqfA2SbMyN55aYH1QnrCP9kJ-XVs2SwiUCQ-jW0Jp2yJr4ZxIgXXdFYxvIPfWzSrWoStVQ__&Key-Pair-Id=K1P54FZWCHCL6J")`}
        linkedInBackgroundImage={`url("https://d1xzdqg8s8ggsr.cloudfront.net/63a119a0adff6c7d49b9a70f/35570fdf-dc6a-49ec-aa5f-76dc7de019b6_1671502723206377314?Expires=-62135596800&Signature=sQItxWI5CKAwyZTzVUiZbOGqY~rsIXPa2ZWp04775GnohlXWMih4ogyHEM96YMSwD66Mc937xilLOk9uSMyhjJZ1WJVPD0Rbk7ojwaXf3XMDnYkQbOShdzEH5QCSjlIhvexezs98zSbnmHW5OdFX3o7W7OD07oN9m58IcLo-651L35ksvmz7NOsfaUpUNmNCVYUMs2p09noPlg94nxSeFhzkEf~~o3XbE0xD0z1WwpKeKezAwpgX-8nvQWk88jGzoznJZahZsKtD4rTEVhNrXeamHhDhqXzqPiQqrnyvkAtixCLxn0Ed06bPDftV5C40gR6PvLzGP3RJNZDDxD75Fg__&Key-Pair-Id=K1P54FZWCHCL6J")`}
      />
    </div>
  );
};

export default Pesquisa;
