import logo from './logo.svg';
import './App.css';
import MyLIneChart from './components/MyLineChart/MyLIneChart';
import SpecialChart from './components/MyLineChart/SpecialChart/SpecialChart';
import { useSpring, animated } from 'react-spring'
import { useState } from 'react';

function App() {

  const [flip, set] = useState(false)

  const props = useSpring({ 
    to: { opacity: 1 }, 
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip)
  })



  return (
    <div className="App">
      <animated.div style={props}>I will fade in</animated.div>
      <MyLIneChart></MyLIneChart>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
