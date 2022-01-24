import "../styles/App.scss";
import { useState, useEffect } from "react";
import callToApi from "../services/api";
import Header from "./Header";
import Text from "./Text";
import Footer from "./Footer";
import { Route, Switch } from "react-router-dom";
import Instructions from "./Instructions";
import MoreOptions from "./MoreOptions";

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
        <Route exact path="/">
          <main className="main">
            <Text
              renderSolutionLetters={renderSolutionLetters}
              renderWrongLetters={renderWrongLetters}
              value={chart}
              handleLastLetter={handleLastLetter}
            />
            <section className={`dummy error-${counter}`}>
              <span className="error-13 eye"></span>
              <span className="error-12 eye"></span>
              <span className="error-11 line"></span>
              <span className="error-10 line"></span>
              <span className="error-9 line"></span>
              <span className="error-8 line"></span>
              <span className="error-7 line"></span>
              <span className="error-6 head"></span>
              <span className="error-5 line"></span>
              <span className="error-4 line"></span>
              <span className="error-3 line"></span>
              <span className="error-2 line"></span>
              <span className="error-1 line"></span>
            </section>
          </main>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
