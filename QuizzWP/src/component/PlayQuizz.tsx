import { useEffect, useState } from "react";
import { fetchQuestionsByID } from "../services/questionsService";
import { QuestionsByID } from "../types/questions";
import { fetchQuizzByID } from "../services/quizzlistService";
import { useNavigate } from "react-router-dom";
import FuzzballMatcher from "./FuzzballMatcher";

const PlayQuizz = ({ quizzId }: { quizzId: number }) => {
  const [questionsList, setQuestionsList] = useState<QuestionsByID[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  
  let navigate = useNavigate();

  useEffect(() => {
    let ignore = false;
    if (quizzId === 0) {
      navigate("/");
    }

    fetchQuizzByID(quizzId).then((result) => {
      result.map((question) => {
        fetchQuestionsByID(question).then((result) => {
          if (!ignore) {
            return;
          }
          setQuestionsList((questionsList) => [...questionsList, result]);
        });
      });
    });

    console.log("questionsList", questionsList);
    return () => {
      ignore = true;
    };
  }, [quizzId]);

  const question = questionsList[currentQuestion];

   
  

  if (questionsList.length > 0) {
    return (
      <section>
        <p>{question.titre_de_la_question}</p>
        {question.propositions && question.propositions.map(proposition => <p key={proposition}>{proposition}</p>)}
        
        <FuzzballMatcher answer={questionsList[currentQuestion].reponse_} accept={questionsList[currentQuestion].variation_acceptee} onSetNext={() => setCurrentQuestion(currentQuestion + 1)}/>
        
      </section>
    );
  }
};

export default PlayQuizz;
