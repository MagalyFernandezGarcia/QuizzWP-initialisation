import { useEffect, useState } from "react";
import { fetchQuizzList } from "../../services/quizzlistService";
import { QuizzList } from "../../types/quizz";
import { Link } from "react-router-dom";
import "./displayQuizz.css";

const nbQuizzPerRequest = 10;
const DisplayQuizzList = ({
	setQuizzId,
}: {
	setQuizzId: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const [quizzList, setQuizzList] = useState<QuizzList[]>([]);

	const [currentPage, setCurrentPage] = useState(1);

	useEffect(() => {
		const fetchData = async () => {
			let ignore = false;

			const result = await fetchQuizzList(nbQuizzPerRequest, currentPage);
			if (!ignore) {
				setQuizzList(result);
			}

			return () => {
				ignore = true;
			};
		};

		fetchData();
	}, [currentPage]);

	const letsPlay = (id: number) => {
		setQuizzId(id);
	};

	const displayQUizz = quizzList.map((quizz: QuizzList) => {
		return (
			<div key={quizz.id} className="quizzContainer">
				<img
					src={quizz.image.guid}
					alt={quizz.title.rendered}
					className="quizzImage"
				/>
				<p className="title">{quizz.title.rendered}</p>

				<button onClick={() => letsPlay(quizz.id)}>
					{" "}
					<Link to={`/quizz/${quizz.id}`}>Jouer</Link>
				</button>
			</div>
		);
	});

	return (
		<section className="containerList">
			<div>
				<img className="logo" src="/wavingFlamingo.png" alt="waving flamingo" />
				<h2 className="listTitle">Bienvenue sur Flamingo Quizz</h2>
			</div>
			<div className="quizzListContainer">{quizzList && displayQUizz}</div>
			<button
				className="moreBtn"
				onClick={() => setCurrentPage(currentPage + 1)}
			>
				Voir plus
			</button>
		</section>
	);
};

export default DisplayQuizzList;
