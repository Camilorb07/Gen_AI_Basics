export interface QuizQuestion {
  id: string;
  concept: string;
  explanation: {
    whatItIs: string;
    whyItMatters: string;
  };
  question: {
    text: string;
    type: 'multiple-choice' | 'true-false';
    options?: string[];
    correctAnswer: string;
  };
  answerExplanation: {
    correctAnswer: string;
    details: string[];
  };
}

export interface QuizState {
  currentQuestionIndex: number;
  stage: 'concept' | 'question' | 'answer' | 'results';
  userAnswers: { [key: string]: string };
  score: number;
}