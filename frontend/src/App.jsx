import { useState } from "react";

import axios from "axios"
import Navbar from "./components/Navbar";
import PromptBox from "./components/PromptBox";
import JudgeResult from "./components/JudgeResult";
import BattleResult from "./components/BattleResult";

import { battleData } from "./data/battleData";

function App() {
  const [result, setResult] = useState(null);

  const handleBattle = async(prompt) => {
    console.log("User Prompt:", prompt);

    const response=await axios.post("http://localhost:3000/invoke",{
      prompt:prompt
    })
    // Temporary data
    console.log(response.data.result)
    setResult(response.data.result);

    // Later replace with API call
  };

  return (
    <div className="min-h-screen bg-[#181716]">

      <Navbar />

      <main className="max-w-6xl mx-auto px-5">

        <PromptBox onBattle={handleBattle} />

        {result && (
          <>
            <JudgeResult judge={result.judge} />

            <BattleResult data={result} />
          </>
        )}

      </main>

    </div>
  );
}

export default App;
