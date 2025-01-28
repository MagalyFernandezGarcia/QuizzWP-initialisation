import { useEffect, useState } from "react";
import { fetchQuizzList } from "../services/quizzlistService";
import { QuizzList } from "../types/quizz";
import { Link, redirect } from "react-router-dom";

const nbQuizzPerRequest = 10;
const DisplayQuizzList = ({setQuizzId} : {setQuizzId : React.Dispatch<React.SetStateAction<number>>}) => {
  const [quizzList, setQuizzList] = useState<QuizzList[]>([]);

  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    let ignore = false;

    fetchQuizzList(nbQuizzPerRequest, currentPage).then((result) => {
      if (!ignore) {
        return;
      }
      setQuizzList((quizzList) => [...quizzList, ...result]);
    });

    return () => {
      ignore = true;
    };
  }, [currentPage]);

  const letsPlay = (id : number) => {
    setQuizzId(id)
    
    

  }

  const displayQUizz = quizzList.map((quizz : QuizzList) => {
    return(<>
      <div key={quizz.id}>
        <p>{quizz.title.rendered}</p>

      <button onClick={() => letsPlay(quizz.id)} > <Link to={`/quizz/${quizz.id}`}  >Jouer</Link></button>
      </div>
      <button onClick={() => setCurrentPage(currentPage + 1)}>Voir plus</button>
      </>
    )
      
  })
  
  

  return (
    <>
      <section>{displayQUizz}</section>
    </>
  );
};

export default DisplayQuizzList;
