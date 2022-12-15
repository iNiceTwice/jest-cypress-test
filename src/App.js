import logo from './logo.svg';
import { useState } from 'react';
import CharactersContainer from './components/CharactersContainer';
import Pagination from './components/Pagination';

function App() {

  return (
    <div className="flex flex-col items-center">
      <CharactersContainer/>
      <Pagination/>
    </div>
  );
}

export default App;
