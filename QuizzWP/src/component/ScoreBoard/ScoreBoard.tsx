import { useNavigate } from "react-router-dom";
import "./scoreBoard.css";

const ScoreBoard = ({
	score,
	nbrQuestions,
	timer,
}: {
	score: number;
	nbrQuestions: number;
	timer: number;
}) => {
	const percentage = Math.round((score / nbrQuestions) * 100);
	let navigate = useNavigate();

	return (
		<>
			<img className="flamingoScore" src="/restFlamingo.png" alt="flamingo" />
			<section className="card">
				<p>Quizz Terminé</p>
				<p> Ton score est de : {percentage} %</p>
				<p>Tu as mis {timer} secondes</p>
				<button className="returnBtn" onClick={() => navigate("/")}>
					Retour à la liste des quizz
				</button>
			</section>
		</>
	);
};

export default ScoreBoard;
