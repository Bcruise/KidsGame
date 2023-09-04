import '../styling/game.css';
import dog from '../images/beagle-hound-dog.webp';

function Game() {

    const letterMaker = () => {
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        let lettersHolder = [];
        for (let a = 0; a < 4; a++) {
            let randomNumber = Math.floor(Math.random() * 26);
            if (lettersHolder.includes(alphabet[randomNumber])) {
                a --
            } else {
                lettersHolder.push(alphabet[randomNumber]);
            }
        }
        return lettersHolder
    }

    

  return (
    <div className='game'>
      <div className='main-img-container'>
        <img src={dog}></img>
      </div>
      <div className='guess-letter-container'>
        <div className='letter-container col-8'>
            {letterMaker().map(letter => 
                <div className='letter-div'>
                    <span>{letter}</span>
                </div>
            )}
        </div>
      </div>
      <div className='guessed-word-container' onClick={() => letterMaker()}>

      </div>
    </div>
  );
}

export default Game;