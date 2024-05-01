import "./global-styles/reset.css";
import "./global-styles/styles.css";
import Header from "./components/Header/Header";
import CharacterCards from "./components/CharacterCards/CharacterCards";
import { data } from "./data/fma-data";
import CharacterRatings from "./components/CharacterRatings/CharacterRatings";

function App() {
  return (
    <>
      <Header />
      <CharacterRatings data={data} />
      <CharacterCards data={data} />
    </>
  );
}

export default App;
