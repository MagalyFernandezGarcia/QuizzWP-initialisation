import { useEffect, useState } from "react";
import { fetchQuestionsByID } from "../../services/questionsService";
import { QuestionsByID } from "../../types/questions";
import { fetchQuizzByID } from "../../services/quizzlistService";
import { useNavigate } from "react-router-dom";
import FuzzballMatcher from "../Fuzzball/FuzzballMatcher";
import "./playQuizz.css";
import ScoreBoard from "../../component/ScoreBoard/ScoreBoard";

const PlayQuizz = ({ quizzId }: { quizzId: number }) => {
	const [questionsList, setQuestionsList] = useState<QuestionsByID[]>([]);
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [score, setScore] = useState(0);
	const [nbrQuestions, setNbrQuestions] = useState(0);
	const [timer, setTimer] = useState(0);

	let navigate = useNavigate();

	useEffect(() => {
		let ignore = false;
		if (quizzId === 0) {
			navigate("/");
		}

		const fetchData = async () => {
			const quizz = await fetchQuizzByID(quizzId);
			const questions = await Promise.all(
				quizz.map(async (question) => {
					return await fetchQuestionsByID(question);
				})
			);
			if (!ignore) {
				setQuestionsList((questionsList) => [...questionsList, ...questions]);
			}
		};

		fetchData();

		return () => {
			ignore = true;
		};
	}, [quizzId]);

	const question = questionsList[currentQuestion];

	if (nbrQuestions === questionsList.length && nbrQuestions !== 0) {
		return (
			<ScoreBoard score={score} nbrQuestions={nbrQuestions} timer={timer} />
		);
	}

	if (questionsList.length > 0 && nbrQuestions !== questionsList.length) {
		return (
			<section className="questionCard">
				<h2>{question.titre_de_la_question}</h2>
				{question.image && (
					<img src={question.image.guid} alt="personnage" className="img" />
				)}

				<FuzzballMatcher
					answer={questionsList[currentQuestion].reponse_}
					accept={questionsList[currentQuestion].variation_acceptee}
					onSetNext={() => setCurrentQuestion(currentQuestion + 1)}
					proposition={question.propositions}
					onSetScore={() => setScore(score + 1)}
					onSetNbrQuestions={() => setNbrQuestions(nbrQuestions + 1)}
					timer={timer}
					onSetTimer={setTimer}
				/>
			</section>
		);
	}
};

export default PlayQuizz;
