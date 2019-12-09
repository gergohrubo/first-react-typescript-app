import React from 'react';
import logo from './logo.svg';
import './App.css';
import Tree from './components/Tree';
import PopularTrees from './components/PopularTrees';

const App: React.FC = () => {
  const number = 32
  return (
    <div className="App">
      <PopularTrees />
    </div>
  );
}

export default App;
