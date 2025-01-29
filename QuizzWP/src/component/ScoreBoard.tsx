import { useNavigate } from "react-router-dom";


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
    <section>
      
      <p>Quizz Terminé</p>
      <p> Ton score est de : {percentage} %</p>
      <button onClick={()=>navigate("/")}>Retour à la liste des quizz</button>
    </section>
  );
};

export default ScoreBoard;
