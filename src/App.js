import './App.css';
import { LogIn } from "./Components/LogIn/LogIn";
import { QuizScreen } from "./Components/QuizScreen/QuizScreen";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import { Topics } from "./Components/Topics/Topics";
import { SignUp } from './Components/SignUp/SignUp';
// import { QuizResult } from "./Components/QuizResult/QuizResult";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />

      <div className="quiz-container">
        <Routes>
          <Route index element={<LogIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/topics" element={<Topics />}></Route>
          <Route path="/quiz" element={<QuizScreen />}></Route>
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
