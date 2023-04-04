import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import GameSettings from './components/gamesetting/GameSettings';
import Question from './components/questions/Questions';
import Result from './components/result/Result';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<GameSettings />} />
      <Route path="question" element={<Question />} />      
      <Route path="result" element={<Result />} />
    </Routes>
  </BrowserRouter>
);

export default App;