import { Routes, Route } from "react-router-dom";

import "./App.css";
import DisplayQuizzList from "./component/DisplayQuizz/DisplayQuizzList";
import PlayQuizz from "./container/playQuizz/PlayQuizz";
import { useState } from "react";
import Login from "./component/auth/Login";
import CreateUser from "./component/auth/CreateUser";

const App = () => {
	const [quizzId, setQuizzId] = useState(0);
	return (
		<Routes>
			<Route path="/" element={<DisplayQuizzList setQuizzId={setQuizzId} />} />
			<Route path="/quizz/:id" element={<PlayQuizz quizzId={quizzId} />} />
			<Route path="/login" element={<Login />} />
			<Route path="/createUser" element={<CreateUser />} />
		</Routes>
	);
};

export default App;
