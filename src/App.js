import logo from './logo.svg';
import './App.css';
import './components/Header'
import Header from './components/Header';
import RadialSelection from './components/RadialSelection';

function App() {
  return (
    <div className='main-container'>
      <Header/>
      <RadialSelection/>
    </div>
  );
}

export default App;
