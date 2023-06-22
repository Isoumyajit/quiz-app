import './App.css';
import { useState } from 'react';
import { SignUp } from './Components/SignUp/SignUp';
import { QuizScreen } from './Components/QuizScreen/QuizScreen';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Topics } from "./Components/Topics/Topics";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      {/* {isQuizStarted ? (
        <div className="quiz-container">
          <QuizScreen retry={() => setIsQuizStarted(false)} /> 
          <Topics />
        </div>
      ) : (
        <SignUp
          start={() => {
            navigate("/topics");
          }}
        />
      )} */}
      <div className="quiz-container">
        <BrowserRouter>
          <Routes>
            <Route index element={<SignUp />}></Route>
            <Route path="/topics" element={<Topics />}></Route>
            <Route path="/quiz" element={<QuizScreen />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
