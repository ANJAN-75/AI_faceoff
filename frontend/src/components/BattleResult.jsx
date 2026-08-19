import ModelCard from "./ModelCard";

function BattleResult({ data }) {

  const judge = data.judge;

  const solution1Winner =
    judge.solution_1_score > judge.solution_2_score;

  const solution2Winner =
    judge.solution_2_score > judge.solution_1_score;

  return (
    <div className="grid md:grid-cols-2 gap-6">

      <ModelCard
        model="Solution 1"
        score={judge.solution_1_score}
        feedback={judge.solution_1_feedback}
        code={data.solution_1}
        winner={solution1Winner}
      />

      <ModelCard
        model="Solution 2"
        score={judge.solution_2_score}
        feedback={judge.solution_2_feedback}
        code={data.solution_2}
        winner={solution2Winner}
      />

    </div>
  );
}

export default BattleResult;