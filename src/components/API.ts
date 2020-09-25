import { shuffleArray } from "../utils";

let modifiedEndpoint:string;

export type Question = {
  category: string;
  correct_answer: string;
  difficulty: string;
  incorrect_answers: string[];
  question: string;
  type: string;
};

export type QuestionState = Question & { answers: string[] };

export enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

export const setQuizControls = (
  numberOfQuestions: number,
   Category: number, 
   Difficulty: Difficulty,
   ) => {
     const NOQ = numberOfQuestions || 20;
     const CAT = Category || null;
     const DIFF = Difficulty || null;
     const modifiedEndpoint = `https://opentdb.com/api.php?amount=${NOQ}&category=${CAT}&difficulty=${DIFF}&type=multiple`;
      return modifiedEndpoint
     
   }


export const fetchQuizQuestions = async (
  Amount: number,
  difficulty: Difficulty
) => {
  const endpoint = modifiedEndpoint ? (modifiedEndpoint):`https://opentdb.com/api.php?amount=20&difficulty=easy&type=multiple`;
  const data = await (await fetch(endpoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
