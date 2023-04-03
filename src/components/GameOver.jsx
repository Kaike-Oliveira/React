import {useContext} from "react";
import { QuizContext } from "../context/quiz";
import './GameOver.css'

import WellDone from "../image/welldone.svg";
const GameOver = () => {
    const [quizState, dispatch] = useContext(QuizContext)
    return (
        <div id="gameover">
            <h2>Game Over</h2>
            <p>Pontuação: {quizState.score}</p>
            <p>Você acertou {quizState.score} de {quizState.questions.length} perguntas.</p>
            <img src={WellDone} alt="Game Over"/>
            <button onClick={() => dispatch({type: "NEW_GAME"})}>Restart</button>
        </div>
    );
}

export default GameOver;