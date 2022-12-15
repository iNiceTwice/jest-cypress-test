import { CharactersProvider } from './context/characters/CharContext';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Nav from './components/Nav';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <CharactersProvider>
      <Nav/>
      <App />
    </CharactersProvider>
  </>
  
);

reportWebVitals();
