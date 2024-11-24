/* eslint-disable no-unused-vars */
import Card from "./components/Card";
import "./App.css";
import data from "./components/data";

function App() {
  const cards = data.map((card) => {
    return (
      <Card key={card.id} img={card.img} characterName={card.characterName} />
    );
  });
  return (
    <div className="app">
      <div className="card--container">{cards}</div>
    </div>
  );
}

export default App;
