import { BrowserRouter as Routes, Route } from "react-router-dom";

import "./App.css";
import DisplayQuizzList from "./component/DisplayQuizz/DisplayQuizzList";
import PlayQuizz from "./container/playQuizz/PlayQuizz";
import { useState } from "react";
import Login from "./component/auth/Login";

const App = () => {
	const [quizzId, setQuizzId] = useState(0);
	return (
		<Routes>
			<Route path="/" element={<DisplayQuizzList setQuizzId={setQuizzId} />} />
			<Route path="/quizz/:id" element={<PlayQuizz quizzId={quizzId} />} />
			<Route path="/login" element={<Login />} />
		</Routes>
	);
};

export default App;
