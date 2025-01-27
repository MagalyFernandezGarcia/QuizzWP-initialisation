
import { QuizzList } from "../types/quizz";


//localhost:8080/wp/v2/testquizz


const { VITE_URL_WP } = import.meta.env;

export async function fetchQuizzList(nbElements : number, page =1):Promise<QuizzList[]>{

    const response = await fetch("http://" + VITE_URL_WP + "wp/v2/testquizz?per_page=" + nbElements + "&page=" + page);
    const result: QuizzList[] = await response.json();
    return result;
    
}