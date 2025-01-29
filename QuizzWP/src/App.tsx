import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import DisplayQuizzList from "./component/DisplayQuizz/DisplayQuizzList";
import PlayQuizz from "./container/playQuizz/PlayQuizz";
import { useState } from "react";

const App = () => {
  const [quizzId, setQuizzId] = useState(0);
  return (
    <Routes>
      <Route path="/" element={<DisplayQuizzList setQuizzId={setQuizzId} />} />
      <Route path="/quizz/:id" element={<PlayQuizz quizzId={quizzId} />} />
    </Routes>
  );
};



export default App;
