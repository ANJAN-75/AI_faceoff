import { useState } from "react";

function PromptBox({ onBattle }) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = () => {
    if (!prompt.trim()) return;

    onBattle(prompt);
  };

  return (
    <section className="text-center py-16">

      <h1 className="text-4xl md:text-5xl font-bold text-white">
        AI Battle Lab
      </h1>

      <p className="mt-4 text-zinc-400">
        Compare two AI models and let an AI judge decide the winner.
      </p>

      <div className="max-w-2xl mx-auto mt-8">

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter your prompt here..."
          className="
            w-full h-32
            bg-[#252321]
            border border-zinc-700
            rounded-lg
            p-4
            text-white
            placeholder:text-zinc-600
            outline-none
            focus:border-amber-500
            resize-none
          "
        />

        <button
          onClick={handleSubmit}
          className="
            mt-4
            px-7 py-3
            bg-amber-500
            hover:bg-amber-400
            text-black
            font-semibold
            rounded-md
            transition
          "
        >
          ▶ Run Battle
        </button>

      </div>
    </section>
  );
}

export default PromptBox;