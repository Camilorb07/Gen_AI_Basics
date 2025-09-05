import React from 'react';
import { CheckCircle, XCircle, ArrowRight } from 'lucide-react';
import { QuizQuestion } from '../types/quiz';

interface AnswerExplanationProps {
  question: QuizQuestion;
  userAnswer: string;
  onContinue: () => void;
  isLastQuestion: boolean;
}

export const AnswerExplanation: React.FC<AnswerExplanationProps> = ({
  question,
  userAnswer,
  onContinue,
  isLastQuestion
}) => {
  const isCorrect = userAnswer === question.question.correctAnswer;

  return (
    <div className="max-w-4xl mx-auto p-8 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <div className="flex items-center mb-6">
          <div className={`p-3 rounded-lg mr-4 ${isCorrect ? 'bg-green-500' : 'bg-red-500'}`}>
            {isCorrect ? (
              <CheckCircle className="w-6 h-6 text-white" />
            ) : (
              <XCircle className="w-6 h-6 text-white" />
            )}
          </div>
          <h2 className={`text-3xl font-bold ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
            {isCorrect ? 'Correct!' : 'Incorrect'}
          </h2>
        </div>
        
        <div className={`p-6 rounded-lg mb-6 ${isCorrect ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'} border-2`}>
          <div className="flex justify-between items-start mb-4">
            <div>
              <p className="text-gray-700 mb-2">
                <span className="font-semibold">Your answer:</span> {userAnswer}
              </p>
              <p className="text-gray-700">
                <span className="font-semibold">Correct answer:</span> {question.answerExplanation.correctAnswer}
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
          <h3 className="text-xl font-semibold text-blue-900 mb-4">Explanation</h3>
          <ul className="space-y-2">
            {question.answerExplanation.details.map((detail, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                <p className="text-gray-700 leading-relaxed">{detail}</p>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-center mt-8">
          <button
            onClick={onContinue}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-3 shadow-lg"
          >
            {isLastQuestion ? 'View Results' : 'Next Question'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};