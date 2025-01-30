import { useNavigate } from "react-router-dom";
import "./scoreBoard.css";

const ScoreBoard = ({
	score,
	nbrQuestions,
}: {
	score: number;
	nbrQuestions: number;
}) => {
	const percentage = Math.round((score / nbrQuestions) * 100);
	let navigate = useNavigate();

	return (
		<>
			<img className="flamingoScore" src="/restFlamingo.png" alt="flamingo" />
			<section className="card">
				<p>Quizz Terminé</p>
				<p> Ton score est de : {percentage} %</p>
				<button className="returnBtn" onClick={() => navigate("/")}>
					Retour à la liste des quizz
				</button>
			</section>
		</>
	);
};

export default ScoreBoard;
