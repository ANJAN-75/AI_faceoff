export const battleData = {
  solution_1: {
    model: "GPT-4",
    score: 10,

    code: `function factorial(n) {
    if (n < 0) {
        throw new Error("Factorial not defined");
    }

    if (n === 0 || n === 1) {
        return 1n;
    }

    let result = 1n;

    for (let i = 2n; i <= BigInt(n); i++) {
        result *= i;
    }

    return result;
}`,

    feedback:
      "Robust solution with BigInt and proper negative input handling."
  },

  solution_2: {
    model: "Claude-3",
    score: 8,

    code: `function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    return n * factorial(n - 1);
}`,

    feedback:
      "Simple and correct recursive solution, but lacks validation and can cause stack overflow."
  },

  judge: {
    winner: "GPT-4",
    winnerScore: 10
  }
};