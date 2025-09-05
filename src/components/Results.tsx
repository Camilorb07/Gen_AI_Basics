import React from 'react';
import { Trophy, RotateCcw, Star } from 'lucide-react';

interface ResultsProps {
  score: number;
  total: number;
  onRestart: () => void;
}

export const Results: React.FC<ResultsProps> = ({ score, total, onRestart }) => {
  const percentage = Math.round((score / total) * 100);
  
  const getGrade = () => {
    if (percentage >= 90) return { grade: 'Excellent!', color: 'text-green-600', stars: 3 };
    if (percentage >= 70) return { grade: 'Good Job!', color: 'text-blue-600', stars: 2 };
    if (percentage >= 50) return { grade: 'Not Bad!', color: 'text-yellow-600', stars: 1 };
    return { grade: 'Keep Learning!', color: 'text-red-600', stars: 1 };
  };

  const { grade, color, stars } = getGrade();

  return (
    <div className="max-w-4xl mx-auto p-8 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl p-8 text-center">
        <div className="mb-6">
          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-4 rounded-full w-20 h-20 mx-auto mb-4 flex items-center justify-center">
            <Trophy className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2">
            Quiz Complete!
          </h2>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(3)].map((_, index) => (
              <Star 
                key={index} 
                className={`w-6 h-6 ${index < stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
              />
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-8 mb-8">
          <div className="text-6xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            {score}/{total}
          </div>
          <div className="text-3xl font-bold mb-2 text-gray-700">
            {percentage}%
          </div>
          <div className={`text-xl font-semibold ${color}`}>
            {grade}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-green-700">{score}</div>
            <div className="text-green-600">Correct Answers</div>
          </div>
          <div className="bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-red-700">{total - score}</div>
            <div className="text-red-600">Incorrect Answers</div>
          </div>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="text-2xl font-bold text-blue-700">{total}</div>
            <div className="text-blue-600">Total Questions</div>
          </div>
        </div>
        
        <button
          onClick={onRestart}
          className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 flex items-center gap-3 mx-auto shadow-lg"
        >
          <RotateCcw className="w-5 h-5" />
          Take Quiz Again
        </button>
      </div>
    </div>
  );
};