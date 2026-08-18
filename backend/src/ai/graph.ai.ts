import {
  StateSchema,
  MessagesValue,
  type GraphNode,
  StateGraph,
  START,
  END,
} from "@langchain/langgraph";
import z from "zod";
import { GoogleModel, CohereModel, MistralModel } from "./models.ai.js";
import { createAgent, HumanMessage, providerStrategy } from "langchain";
const State = new StateSchema({
  problem: z.string().default(""),
  solution_1: z.string().default(""),
  solution_2: z.string().default(""),
  judge: z.object({
    solution_1_score: z.number().default(0),
    solution_2_score: z.number().default(0),
    solution_1_feedback: z.string().default(""),
    solution_2_feedback: z.string().default(""),
  }),
});

const solutionNode: GraphNode<typeof State> = async (state) => {
  const [solution_1, solution_2] = await Promise.all([
    MistralModel.invoke(`Solve this problem:
    ${state.problem}
    Give a clear and complete solution.`),
    CohereModel.invoke(
      `Solve this problem:
    ${state.problem}
    Give a clear and complete solution.`,
    ),
  ]);
  return {
    solution_1: solution_1.text,
    solution_2: solution_2.text,
  };
};

const judgeNode: GraphNode<typeof State> = async (state) => {
  const { problem, solution_1, solution_2 } = state;
  const judge = createAgent({
    model: GoogleModel,
    responseFormat: providerStrategy(
      z.object({
        solution_1_score: z.number().min(0).max(10),
        solution_2_score: z.number().min(0).max(10),
        solution_1_feedback: z.string(),
        solution_2_feedback: z.string(),
      }),
    ),
    systemPrompt: `You are an impartial AI judge.

Evaluate Solution 1 and Solution 2 based on:
- Correctness
- Completeness
- Clarity
- Efficiency

Give each solution a score from 0-10.
Explain briefly why each score was given.
Choose the better solution as the winner.

Do not favor either solution based on style or model identity. Judge only the quality of the answers.`,
  });

  const judgeResponse = await judge.invoke({
    messages: [
      new HumanMessage(`
            Problem:
            ${state.problem}

            Solution 1:
            ${state.solution_1}

            Solution 2:
            ${state.solution_2}
            `),
    ],
  });
  const {solution_1_score,solution_2_score,solution_1_feedback,solution_2_feedback}=judgeResponse.structuredResponse
  return {
        judge: {
            solution_1_score,
            solution_2_score,
            solution_1_feedback,
            solution_2_feedback
        }
    }
};

const graph = new StateGraph(State)
    .addNode("solution", solutionNode)
    .addNode("judge_node", judgeNode)
    .addEdge(START, "solution")
    .addEdge("solution", "judge_node")
    .addEdge("judge_node", END)
    .compile()

    export default async function (problem: string) { 

    const result = await graph.invoke({
        problem: problem
    })

    return result

}