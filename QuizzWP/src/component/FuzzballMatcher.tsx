import * as fuzzball from "fuzzball";
import { useState } from "react";

const FuzzballMatcher = ({answer} : {answer : string}) => {
    const [guess, setGuess] = useState("");
    const [result, setResult] = useState<{
        answer: string;
        score: number;
        isMatch: boolean;
      } | null>(null);

    const handleMatch = () => {
        const score = fuzzball.ratio(answer, guess);
        setResult({
          answer,
          score,
          isMatch: score >= 80,
        });
        
    }

   

  return(
    <section>
      
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Entrez votre réponse"
      />
      <button onClick={handleMatch}>Valider</button>
      {result && (
        <div>
          
          <p>La réponse était : {result.answer}</p>
          <p>Pourcentage: {result.score}%</p>
          <p>{result.isMatch ? "Yay, tu as trouvé !" : "Bouh ! t'es nul !"}</p>
          
        </div>
      )}
    </section>

  )
};

export default FuzzballMatcher;
