import "./App.css";
import { useState } from "react";
import data from "./assets/emojiList.json";
import Search from "./components/Search";
import Line from "./components/Line";
import Footer from "./components/Footer";

function App() {
  const [search, setSearch] = useState("");

  // Les 20 premiers éléments
  const data20 = data.slice(0, 20);

  return (
    <div className="App">
      <h1>😎 EmojiSearch 😎</h1>
      <Search value={search} setValue={setSearch} />
      <div className="results">
        {search ? (
          <div className="line">
            {data.map((element) => {
              if (element.keywords.includes(search)) {
                return <Line value={element} />;
              }
            })}
          </div>
        ) : (
          <div className="line">
            {data20.map((element) => {
              if (element.keywords.includes(search)) {
                return <Line value={element} />;
              }
            })}
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
