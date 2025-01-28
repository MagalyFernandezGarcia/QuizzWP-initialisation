import { useEffect, useState } from "react";
import { fetchQuestionsByID } from "../services/questionsService";
import { QuestionsByID } from "../types/questions";
import { QuizzList } from "../types/quizz";
import { fetchQuizzByID } from "../services/quizzlistService";
import { redirect, useNavigate } from "react-router-dom";

const PlayQuizz = ({ quizzId }: { quizzId: number }) => {
  const [questionsList, setQuestionsList] = useState<QuestionsByID[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  console.log("quizzId", quizzId);
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

 

  if (questionsList.length > 0) {
    return <section>{questionsList[currentQuestion].name} {
        
    }</section>
    
  }

  
  

  
};

export default PlayQuizz;
