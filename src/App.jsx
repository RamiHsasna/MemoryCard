//TO-DO : Implement tests

/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import "./App.css";
import data from "./components/data";
import ScoreBoard from "./components/Scoreboard";

function App() {
  const [clickedCards, setClickedCards] = useState([]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);
  //TO-DO : Fetch images from an API endpoint
  //generate 4 random cards from the data folder each time the page reloads
  useEffect(() => {
    const generateRandomCards = () => {
      const selectedCards = [];
      const selectedIndices = new Set();
      while (selectedCards.length < 4) {
        const randomNumber = Math.floor(Math.random() * data.length);
        if (!selectedIndices.has(randomNumber)) {
          selectedCards.push(data[randomNumber]);
          selectedIndices.add(randomNumber);
        }
      }
      setCards(selectedCards);
    };
    generateRandomCards();
  }, []);

  const shuffleCards = (cardsArray) => {
    const shuffled = [...cardsArray];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  //TO-DO : Improve isGameOver logic and implement a modal for restarting the game
  const isGameOver = (clickedCards, cards) => {
    return clickedCards.length === cards.length + 1;
  };

  const restartGame = () => {
    setBestScore(Math.max(score, bestScore));
    setScore(0);
    setClickedCards([]);
  };

  const handleCardClick = (id) => {
    //if player selected an already selected card, player loses
    if (isGameOver([...clickedCards, id], cards)) {
      alert("Game over! You clicked all the cards");
      restartGame();
    }
    if (clickedCards.includes(id)) {
      alert("Game over! You clicked a card twice");
      restartGame();
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
            onCardClick={() => handleCardClick(card.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
