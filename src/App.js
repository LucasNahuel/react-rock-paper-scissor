import logo from './logo.svg';
import './App.css';
import './components/Header'
import Header from './components/Header';
import RadialSelection from './components/RadialSelection';
import Rules from './components/Rules';
import { useEffect, useState } from 'react';

function App() {

  const [score, setScore] = useState(null);

  const [rulesWindow, setRulesWindow] = useState(null);

  useEffect(()=>{
    reloadScore();
  }, [localStorage.getItem("score")]);

  function reloadScore(){
    if(localStorage.getItem("score") == null){
      localStorage.setItem("score", 0);
    }



    setScore(Number.parseInt(localStorage.getItem("score")));
  }

  function showRules(){
    setRulesWindow(<Rules closeRules={() => closeRules()}></Rules>)
  }

  function closeRules(){
    setRulesWindow(null);
  }

  return (
    <div className='main-container'>
      <Header />
      <RadialSelection setScore = {() => reloadScore()}/>
      <button className='rules-button' onClick={() => showRules()}>RULES</button>
      {rulesWindow}
    </div>
  );
}

export default App;
