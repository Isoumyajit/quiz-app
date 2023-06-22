import './App.css';
import { useState } from 'react';
import { SignUp } from './Components/SignUp/SignUp';
import { QuizScreen } from './Components/QuizScreen/QuizScreen';
import { Navbar } from './Components/Navbar/Navbar';
import { Footer } from './Components/Footer/Footer';

function App() {
  const [isQuizStarted, setIsQuizStarted] = useState(false)
  return (
    <div>
      <Navbar />
      <div className="quiz-container">
        {isQuizStarted ? (
          <QuizScreen retry={() => setIsQuizStarted(false)} />
        ) : (
          <SignUp start={() => setIsQuizStarted(true)} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default App;
