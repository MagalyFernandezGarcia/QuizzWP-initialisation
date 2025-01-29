import * as fuzzball from "fuzzball";
import { useState } from "react";

const FuzzballMatcher = ({
  answer,
  accept,
  onSetNext,
  proposition,
}: {
  answer: string;
  accept: string;
  onSetNext: () => void;
  proposition: string[];
}) => {
  const [guess, setGuess] = useState("");
  const [result, setResult] = useState<{
    answer: string;
    score: number;
    isMatch: boolean;
  } | null>(null);

  const acceptedAnswers = {
    answer: answer,
    accept: accept,
  };

  const handleMatch = (guessParam: string) => {
    const scores = Object.entries(acceptedAnswers).map(([key, value]) => {
      const score = fuzzball.ratio(value, guessParam);

      return { key, value, score };
    });

    const bestMatch = scores.reduce(
      (best, current) => (current.score > best.score ? current : best),
      { key: "", value: "", score: 0 }
    );

    const isMatch = bestMatch.score >= 80;

    setResult({
      answer,
      score: bestMatch.score,
      isMatch: isMatch,
    });
  };
  const handleChoice = (guess: string) => {
    setGuess(guess);
    handleMatch(guess);
  };

  const handleNext = () => {
    setResult(null);
    onSetNext();
  };
  

  if (proposition.length > 2) {
    return (
      <section>
        {proposition.map((proposition, index) => (
          <div key={index}>
            <button onClick={() => handleChoice(proposition)}>
              {proposition}
            </button>
          </div>
        ))}
        {result && (
          <div>
            <p>La réponse était : {result.answer}</p>
            <p>Pourcentage: {result.score}%</p>
            <p>
              {result.isMatch ? "Yay, tu as trouvé !" : "Bouh ! t'es nul !"}
            </p>

            <button onClick={() => handleNext()}>Suivant</button>
          </div>
        )}
      </section>
    );
  }

  return (
    <section>
      <input
        type="text"
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Entrez votre réponse"
      />
      {!result && <button onClick={() => handleMatch(guess)}>Valider</button>}
      {result && (
        <div>
          <p>La réponse était : {result.answer}</p>
          <p>Pourcentage: {result.score}%</p>
          <p>{result.isMatch ? "Yay, tu as trouvé !" : "Bouh ! t'es nul !"}</p>

          <button onClick={() => handleNext()}>Suivant</button>
        </div>
      )}
    </section>
  );
};

export default FuzzballMatcher;
