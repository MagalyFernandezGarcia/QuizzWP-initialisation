import * as fuzzball from "fuzzball";
import { useEffect, useRef, useState } from "react";
import "./fuzzballMatcher.css";

const FuzzballMatcher = ({
	answer,
	accept,
	onSetNext,
	proposition,
	onSetScore,
	onSetNbrQuestions,
	timer,
	onSetTimer,
}: {
	answer: string;
	accept: string;
	onSetNext: () => void;
	proposition: string[];
	onSetScore: () => void;
	onSetNbrQuestions: () => void;
	timer: number;
	onSetTimer: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const [guess, setGuess] = useState("");
	const [result, setResult] = useState<{
		answer: string;
		score: number;
		isMatch: boolean;
	} | null>(null);

	const acceptedAnswers = {
		answer: answer,
		accept: accept,
	};
	const interval = useRef<number | null>(null);

	useEffect(() => {
		interval.current = setInterval(() => {
			onSetTimer((timer) => timer + 1);
		}, 1000);

		return () => {
			if (interval.current !== null) {
				clearInterval(interval.current);
			}
		};
	}, []);

	const handleMatch = (guessParam: string) => {
		const scores = Object.entries(acceptedAnswers).map(([key, value]) => {
			const score = fuzzball.ratio(value, guessParam);

			return { key, value, score };
		});

		const bestMatch = scores.reduce(
			(best, current) => (current.score > best.score ? current : best),
			{ key: "", value: "", score: 0 }
		);

		const isMatch = bestMatch.score >= 80;

		if (isMatch) {
			onSetScore();
		}

		setResult({
			answer,
			score: bestMatch.score,
			isMatch: isMatch,
		});
	};
	const handleChoice = (guess: string) => {
		setGuess(guess);
		handleMatch(guess);
	};

	const handleNext = () => {
		setResult(null);
		onSetNbrQuestions();
		onSetNext();
	};

	if (proposition.length > 2) {
		return (
			<>
				<div className="timer">{timer}</div>
				<section className="choiceContainer">
					{proposition.map((proposition, index) => (
						<button
							key={index}
							className="fuzzBtn"
							onClick={() => handleChoice(proposition)}
						>
							{proposition}
						</button>
					))}
				</section>
				{result && (
					<div className="result">
						<p>
							{result.isMatch ? (
								<img
									className="flamingo"
									src="/happyFlamingo.png"
									alt="Happy Flamingo"
								/>
							) : (
								<img
									className="flamingo"
									src="/sadFlamingo.png"
									alt="Crying Flamingo"
								/>
							)}
						</p>
						<p>La réponse était : {result.answer}</p>

						<button className="fuzzBtn" onClick={() => handleNext()}>
							Suivant
						</button>
					</div>
				)}
			</>
		);
	}

	return (
		<>
			<div className="timer">{timer}</div>
			<section className="container">
				<input
					className="fuzzInput"
					type="text"
					onChange={(e) => setGuess(e.target.value)}
					placeholder="Entrez votre réponse"
				/>
				{!result && (
					<button className="fuzzBtn" onClick={() => handleMatch(guess)}>
						Valider
					</button>
				)}
				{result && (
					<div className="result">
						{result.isMatch ? (
							<img
								className="flamingo"
								src="/happyFlamingo.png"
								alt="Happy Flamingo"
							/>
						) : (
							<img
								className="flamingo"
								src="/sadFlamingo.png"
								alt="Crying Flamingo"
							/>
						)}
						<p>La réponse était : {result.answer}</p>

						<button className="fuzzBtn" onClick={() => handleNext()}>
							Suivant
						</button>
					</div>
				)}
			</section>
		</>
	);
};

export default FuzzballMatcher;
