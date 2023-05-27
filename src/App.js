import logo from './logo.svg';
import './App.css';
import './components/Header'
import Header from './components/Header';
import RadialSelection from './components/RadialSelection';
import { useEffect, useState } from 'react';

function App() {

  const [score, setScore] = useState(null);

  useEffect(()=>{
    reloadScore();
  }, [localStorage.getItem("score")]);

  function reloadScore(){
    if(localStorage.getItem("score") == null){
      localStorage.setItem("score", 0);
    }



    setScore(Number.parseInt(localStorage.getItem("score")));
  }

  return (
    <div className='main-container'>
      <Header />
      <RadialSelection setScore = {() => reloadScore()}/>
    </div>
  );
}

export default App;
