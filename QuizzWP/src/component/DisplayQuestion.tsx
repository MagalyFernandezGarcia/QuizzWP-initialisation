// import FuzzballMatcher from "../container/FuzzballMatcher";
// import { QuestionsByID } from "../types/questions"


// const DisplayQuestion = ({questionsArray, currentQuestion} : {questionsArray: QuestionsByID[] , currentQuestion: number}) => {

//     const question = questionsArray[currentQuestion];

//     if(question.propositions){
//         return (
//             <section>
//                 <p>{question.titre_de_la_question}</p>
//                 {question.propositions.map((proposition) => (
//             <button key={proposition} value={proposition}>{proposition}</button>
//           ))}
//                <FuzzballMatcher answer={question.reponse_} accept={question.propositions[0]} onSetNext={() => {}} proposition={true} />
//             </section>
//         )
//     }

    
// }

// export default DisplayQuestion