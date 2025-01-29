import * as fuzzball from "fuzzball";
import { useState } from "react";

const FuzzballMatcher = ({
  answer,
  accept,
  onSetNext,
}: {
  answer: string;
  accept: string;
  onSetNext: () => void;
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

  const handleMatch = () => {
    const scores = Object.entries(acceptedAnswers).map(([key, value]) => {
      const score = fuzzball.ratio(value, guess);
      return { key, value, score };
    });
    const bestMatch = scores.reduce(
      (best, current) => (current.score > best.score ? current : best),
      { key: "", value: "", score: 0 }
    );

    const isMatch = bestMatch.score >= 80;

    setResult({
      answer: bestMatch.value,
      score: bestMatch.score,
      isMatch: isMatch,
    });
  };

  return (
    <section>
      <input
        type="text"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        placeholder="Entrez votre réponse"
      />
      {!result && <button onClick={handleMatch}>Valider</button>}
      {result && (
        <div>
          <p>La réponse était : {result.answer}</p>
          <p>Pourcentage: {result.score}%</p>
          <p>{result.isMatch ? "Yay, tu as trouvé !" : "Bouh ! t'es nul !"}</p>

          <button onClick={() => onSetNext()}>Suivant</button>
        </div>
      )}
    </section>
  );
};

export default FuzzballMatcher;
