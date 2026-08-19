function JudgeResult({ judge }) {
  console.log("JUDGE:", judge)
  const winner= judge.solution_1_score>judge.solution_2_score? "Solution 1" : "Solution 2"
  const WinnerScore=Math.max(judge.solution_1_score,judge.solution_2_score)
  return (
    <div className="max-w-xl mx-auto mb-12">

      <div className="bg-[#211f1e] border border-amber-500/40 rounded-xl p-6 text-center">

        <p className="text-xs font-bold tracking-wider text-amber-400">
          🏆 WINNER
        </p>

        <h2 className="mt-2 text-2xl font-bold text-white">
          {winner}
        </h2>

        <p className="mt-2 text-zinc-400">
          Score:{" "}
          <span className="text-white font-semibold">
            {WinnerScore}/10
          </span>
        </p>

      </div>

    </div>
  );
}

export default JudgeResult;