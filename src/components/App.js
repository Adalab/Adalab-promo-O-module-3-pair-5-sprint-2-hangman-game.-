import "../styles/App.scss";
import { useState, useEffect } from "react";
import callToApi from "../services/api";
import Header from "./Header";
import Text from "./Text";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import Instructions from "./Instructions";
import MoreOptions from "./MoreOptions";
import Dummy from "./Dummy";

function App() {
  const [keyword, setKeyword] = useState("");
  const [chart, setChart] = useState("");
  const [counter, setCounter] = useState(0);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [correctLetters, setCorrectLetters] = useState([]);

  useEffect(() => {
    callToApi().then((responseApi) => {
      setKeyword(responseApi);
    });
  }, []);

  const renderSolutionLetters = () => {
    const wordLetters = keyword.split("");
    return wordLetters.map((letter, index) => {
      if (correctLetters.includes(letter)) {
        return (
          <li key={index} className="letter">
            {letter}
          </li>
        );
      } else {
        return <li key={index} className="letter"></li>;
      }
    });
  };

  const renderWrongLetters = () => {
    return wrongLetters.map((error, index) => {
      return (
        <li key={index} className="letter">
          {error}
        </li>
      );
    });
  };

  const handleLastLetter = (lastInput) => {
    if (lastInput.match("^[a-zA-ZáäéëíïóöúüÁÄÉËÍÏÓÖÚÜñÑ]?$")) {
      setChart(lastInput);
      if (lastInput !== "") {
        if (keyword.includes(lastInput)) {
          setCorrectLetters([...correctLetters, lastInput]);
        } else {
          setWrongLetters([...wrongLetters, lastInput]);
        }
      }
    }
  };

  return (
    <div className="page">
      <Header text="Juego del ahorcado" />
      <Switch>
        <Route exact path="/instructions">
          <Instructions />
        </Route>
        <Route exact path="/options">
          <MoreOptions />
        </Route>        
          <main className="main">
          <Route exact path="/">
            <Text
              renderSolutionLetters={renderSolutionLetters}
              renderWrongLetters={renderWrongLetters}
              value={chart}
              handleLastLetter={handleLastLetter}
            /></Route>
            <Dummy />
          </main>        
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
