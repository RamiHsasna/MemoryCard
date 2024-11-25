/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Card from "./components/Card";
import "./App.css";
import data from "./components/data";
import ScoreBoard from "./components/Scoreboard";

function App() {
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState(data);

  const shuffleCards = (cardsArray) => {
    const shuffled = [...cardsArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleCardClick = (id) => {
    //if player selected an already selected card, player loses
    if (clickedCards.includes(id)) {
      setBestScore(Math.max(score, bestScore));
      setScore(0);
      setClickedCards([]);
    }
    //the card hasn't been selected before
    else {
      setClickedCards([...clickedCards, id]);
      setScore(score + 1);
    }
    //shuffle cards with each player click
    setCards(shuffleCards(cards));
  };

  return (
    <div className="app">
      <div className="score--container">
        <ScoreBoard score={score} bestScore={bestScore} />
      </div>
      <div className="card--container">
        {cards.map((card) => (
          <Card
            key={card.id}
            img={card.img}
            characterName={card.characterName}
            onCardClick={() => handleCardClick(card.id)} // Pass the handler here
          />
        ))}
      </div>
    </div>
  );
}

export default App;
