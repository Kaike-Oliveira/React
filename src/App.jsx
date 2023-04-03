import './App.css';
import Welcome from './components/welcome'
import {useContext, useEffect} from "react";
import {QuizContext} from "./context/quiz";
import Question from "./components/Questions";
import GameOver from "./components/GameOver";

function App() {
    const [quizState, dispatch] = useContext(QuizContext);

    useEffect(() => {
        // EMBARALHA PERGUNTAS //
        dispatch({type: "REORDER_QUESTIONS"})
    }, [])

  return (
    <div className="App">
      <h1>Front-end Quiz</h1>
        {quizState.gameStage === "Start" && <Welcome />}
        {quizState.gameStage === "Playing" && <Question />}
        {quizState.gameStage === "End" && <GameOver />}
    </div>
  );
}

export default App;
