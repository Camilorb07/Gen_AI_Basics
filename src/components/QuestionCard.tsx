import React, { useState } from 'react';
import { HelpCircle, Check } from 'lucide-react';
import { QuizQuestion } from '../types/quiz';

interface QuestionCardProps {
  question: QuizQuestion;
  onAnswer: (answer: string) => void;
}

export const QuestionCard: React.FC<QuestionCardProps> = ({ question, onAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string>('');

  const handleSubmit = () => {
    if (selectedAnswer) {
      onAnswer(selectedAnswer);
    }
  };

  const renderOptions = () => {
    if (question.question.type === 'multiple-choice' && question.question.options) {
      return (
        <div className="space-y-4">
          {question.question.options.map((option, index) => {
            const letter = String.fromCharCode(65 + index); // A, B, C, D
            const isSelected = selectedAnswer === letter;
            
            return (
              <button
                key={index}
                onClick={() => setSelectedAnswer(letter)}
                className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                  isSelected
                    ? 'border-blue-500 bg-blue-50 shadow-md transform scale-[1.02]'
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                    isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                  }`}>
                    {letter}
                  </span>
                  <span className="text-gray-800 leading-relaxed flex-1">{option}</span>
                </div>
              </button>
            );
          })}
        </div>
      );
    }

    // True/False question
    return (
      <div className="space-y-4">
        {['True', 'False'].map((option) => {
          const isSelected = selectedAnswer === option;
          
          return (
            <button
              key={option}
              onClick={() => setSelectedAnswer(option)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                isSelected
                  ? 'border-blue-500 bg-blue-50 shadow-md transform scale-[1.02]'
                  : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  isSelected ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'
                }`}>
                  {isSelected && <Check className="w-4 h-4" />}
                </div>
                <span className="text-gray-800 font-semibold text-lg">{option}</span>
              </div>
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className="max-w-4xl mx-auto p-8 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-r from-green-500 to-teal-600 p-3 rounded-lg mr-4">
            <HelpCircle className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Quiz Question</h2>
        </div>
        
        <div className="bg-gray-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
          <p className="text-xl text-gray-800 leading-relaxed font-medium">
            {question.question.text}
          </p>
        </div>
        
        {renderOptions()}
        
        <div className="flex justify-center mt-8">
          <button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-200 flex items-center gap-3 shadow-lg ${
              selectedAnswer
                ? 'bg-gradient-to-r from-green-500 to-teal-600 text-white hover:from-green-600 hover:to-teal-700 transform hover:scale-105'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Submit Answer
            <Check className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};