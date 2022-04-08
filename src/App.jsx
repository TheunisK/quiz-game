import { React, useState} from 'react';
import { Routes, Route } from "react-router-dom";

import LandingPage from './client/components/LandingPage';
import Register from './client/components/Register';
import QuizPage from './client/components/QuizPage';
import GetReady from './client/components/GetReady';
import Setup from './client/components/Setup';

import './App.css';

function App() {
  const initialCategory = 'music';

  const [questions, setQuestions] = useState([]);
  const [category, setCategory] = useState(initialCategory);

  return (
    <div className="App">
      <Routes>
        {/* <Route path='/re' element={<LandingPage />}/>
        <Route path='/register' element={<Register />}/> */}
        <Route path='/quiz' element={<QuizPage category={category} questions={questions}/>}/>
        <Route path='/getready' element={<GetReady category={category} setQuestions={setQuestions}/>}/>
        <Route path='/' element={<Setup setCategory={setCategory}/>}/>
      </Routes>
    </div>
  );
}

export default App;
