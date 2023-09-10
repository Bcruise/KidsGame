import '../styling/game.css';
import { useState } from 'react';
import dog from '../images/beagle-hound-dog.webp';
import animals from '../data/animals.json';
import $ from 'jquery';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function Game() {

  const [animalObjectIndex, setWhichAnimalObjectIndex] = useState(0);

  const generateRandomLetter = () => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return alphabet[Math.floor(Math.random() * 26)];
  };
  
  const setLettersArray = () => {
    const correctLetter = animals[animalObjectIndex].animal[0];
    return [correctLetter];
  };
  
  const randomiseLetters = (letters) => {
    const shuffledLetters = [...letters];
    for (let i = shuffledLetters.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledLetters[i], shuffledLetters[j]] = [shuffledLetters[j], shuffledLetters[i]];
    }
    return shuffledLetters;
  };
  
  const toArray = (animal) => {
    return animal.split('');
  };

  const animalName = toArray(animals[animalObjectIndex].animal);

  const [gameWon, setGameWon] = useState(false);

  const isTheGuessCorrect = (guessedLetter) => {
    if (guessedLetter === animals[animalObjectIndex].animal[0]) {
      $(".animal-name-letter-div:nth-child(1)").css("color", "black");
      setGameWon(true);
    }
  }

  const letterMaker = () => {
    const correctLetter = setLettersArray()[0];
    const lettersHolder = [correctLetter];
    while (lettersHolder.length < 5) {
      const randomLetter = generateRandomLetter();
      if (!lettersHolder.includes(randomLetter)) {
        lettersHolder.push(randomLetter);
      }
    }
    if (gameWon) {
      return []
    } else {
      return randomiseLetters(lettersHolder);
    }
  };
  
  return (
    <div className='game'>
      <div className='pic-and-guess-div'>
        <div className='main-img-container'>
          <img src={dog}></img>
        </div>
        <div className='guess-letter-container'>
          <div className='letter-container col-7 row'>
              {letterMaker().map(letter => 
                  <div className='letter-div m-1' onClick={() => isTheGuessCorrect(letter)}>
                      <span>{letter}</span>
                  </div>
              )}
          </div>
        </div>
      </div>
      <div className='guessed-word-container'>
        {animalName.map(letter => (
          <div className='animal-name-letter-div m-2'>
            <span>{letter}</span>
          </div>
        ))}
      </div>
      {gameWon && (
        <div className='tick-div'>
          <FontAwesomeIcon icon={faCheck} className="tick" />
        </div>
      )}
    </div>
  );
}

export default Game;