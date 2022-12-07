import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

export const Contador  = () => {

  const [ counter, setCounter ] = useState(0)

  const handleClick = () => {
      setCounter(counter+1)
  }

  const styles = {
    counter:{
      color: counter > 3 ? "red" : "blue"
    }
  }

  return (
    <div style={{ position:"absolute", top:"50%", left:"50%"}}>
      <div style={styles.counter}>{counter}</div>
      <div>
        <button onClick={handleClick}>+</button>
      </div>
    </div>
  )
}

function App() {

  const [ show, setShow ] = useState(false)

  return (
    <div className="App">
      <Contador/>
      <div>
        {
          show && 
          <div>Soy visible!</div>
        }
      </div>
      <button onClick={()=>setShow(!show)}>Mostrar</button>
    </div>
  );
}

export default App;
