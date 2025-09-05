import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { QuizQuestion } from '../types/quiz';

interface ConceptExplanationProps {
  question: QuizQuestion;
  onContinue: () => void;
}

export const ConceptExplanation: React.FC<ConceptExplanationProps> = ({ question, onContinue }) => {
  return (
    <div className="max-w-4xl mx-auto p-8 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl p-8">
        <div className="flex items-center mb-6">
          <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
            <BookOpen className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
            {question.concept}
          </h2>
        </div>
        
        <div className="space-y-6">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-blue-900 mb-3">What it is</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {question.explanation.whatItIs}
            </p>
          </div>
          
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h3 className="text-xl font-semibold text-purple-900 mb-3">Why it matters</h3>
            <p className="text-gray-700 leading-relaxed text-lg">
              {question.explanation.whyItMatters}
            </p>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <button
            onClick={onContinue}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-3 shadow-lg"
          >
            Continue to Question
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};