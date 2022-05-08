import logo from './logo.svg';
import './App.css';

const GridHeader = () => {
  return <div class="header">WORDISH</div>
}

/**
 * 
 * @param letter Single character value | undefined
 * @param isCorrect no | yes | elsewhere (required)
 * @returns 
 */
const Character = ({ letter, isCorrect }) => {
  const cssClasses = 'character ' + isCorrect
  return <div class={cssClasses}>{letter}</div>
}

const GuessLine = ({ answer, word }) => {
  return <div class="line">
    {word.split('').map((letter, index) => {
      const isCorrect = letter === answer[index]
        ? 'yes'
        : answer.indexOf(letter) !== -1
          ? 'elsewhere'
          : 'no'

      return <Character letter={letter} isCorrect={isCorrect} />
    })}
  </div>
}

const RemainingLine = () => {
  return <div class="line">
    <div class="character"></div>
    <div class="character"></div>
    <div class="character"></div>
    <div class="character"></div>
    <div class="character"></div>
  </div>
}

const App = () => {

  const answer = 'XXOIT'
  const guesses = [
    'ABOUT',
    'PRINT',
  ]
  const maxGuesses = 6

  return (
    <div class="page">
      <div class="grid">
        <GridHeader />
        {guesses.map(guess => <GuessLine answer={answer} word={guess} />)}
        {Array(maxGuesses - guesses.length).fill('').map(() => <RemainingLine />)}
      </div>
    </div>
  );
}

export default App;
