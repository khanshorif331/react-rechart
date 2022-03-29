import logo from './logo.svg';
import './App.css';
import MyLIneChart from './components/MyLineChart/MyLIneChart';
import SpecialChart from './components/MyLineChart/SpecialChart/SpecialChart';

function App() {
  return (
    <div className="App">
      <MyLIneChart></MyLIneChart>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
