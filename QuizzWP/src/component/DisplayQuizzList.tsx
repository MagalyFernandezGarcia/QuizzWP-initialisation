import { useEffect, useState } from "react";
import { fetchQuizzList } from "../services/quizzlistService";
import { QuizzList } from "../types/quizz";

const nbQuizzPerRequest = 10;
const DisplayQuizzList = () => {
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

  const displayQUizz = quizzList.map((quizz : QuizzList) => {
    return(<>
      <a key={quizz.id}>{quizz.title.rendered}</a>
    </>)
      
  })
  
  

  return (
    <>
      <section>{displayQUizz}</section>
    </>
  );
};

export default DisplayQuizzList;
