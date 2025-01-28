import { QuestionsByID } from "../types/questions";

const { VITE_URL_WP } = import.meta.env;

export async function fetchQuestionsByID(questionId : number):Promise<QuestionsByID>{

    const response = await fetch("http://" + VITE_URL_WP + "wp/v2/questions/"+questionId);
    const result: QuestionsByID = await response.json();
    console.log("question service" ,result);

    return result;
    
}