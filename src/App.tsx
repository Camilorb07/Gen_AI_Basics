import React, { useState } from 'react';
import { Brain } from 'lucide-react';
import { QuizState } from './types/quiz';
import { quizQuestions } from './data/quizData';
import { ProgressBar } from './components/ProgressBar';
import { ConceptExplanation } from './components/ConceptExplanation';
import { QuestionCard } from './components/QuestionCard';
import { AnswerExplanation } from './components/AnswerExplanation';
import { Results } from './components/Results';

function App() {
  const [quizState, setQuizState] = useState<QuizState>({
    currentQuestionIndex: 0,
    stage: 'concept',
    userAnswers: {},
    score: 0
  });

  const currentQuestion = quizQuestions[quizState.currentQuestionIndex];

  const handleContinueFromConcept = () => {
    setQuizState(prev => ({ ...prev, stage: 'question' }));
  };

  const handleAnswer = (answer: string) => {
    const isCorrect = answer === currentQuestion.question.correctAnswer;
    
    setQuizState(prev => ({
      ...prev,
      stage: 'answer',
      userAnswers: { ...prev.userAnswers, [currentQuestion.id]: answer },
      score: isCorrect ? prev.score + 1 : prev.score
    }));
  };

  const handleContinueFromAnswer = () => {
    if (quizState.currentQuestionIndex === quizQuestions.length - 1) {
      setQuizState(prev => ({ ...prev, stage: 'results' }));
    } else {
      setQuizState(prev => ({
        ...prev,
        currentQuestionIndex: prev.currentQuestionIndex + 1,
        stage: 'concept'
      }));
    }
  };

  const handleRestart = () => {
    setQuizState({
      currentQuestionIndex: 0,
      stage: 'concept',
      userAnswers: {},
      score: 0
    });
  };

  const renderCurrentStage = () => {
    switch (quizState.stage) {
      case 'concept':
        return (
          <ConceptExplanation
            question={currentQuestion}
            onContinue={handleContinueFromConcept}
          />
        );
      case 'question':
        return (
          <QuestionCard
            question={currentQuestion}
            onAnswer={handleAnswer}
          />
        );
      case 'answer':
        return (
          <AnswerExplanation
            question={currentQuestion}
            userAnswer={quizState.userAnswers[currentQuestion.id]}
            onContinue={handleContinueFromAnswer}
            isLastQuestion={quizState.currentQuestionIndex === quizQuestions.length - 1}
          />
        );
      case 'results':
        return (
          <Results
            score={quizState.score}
            total={quizQuestions.length}
            onRestart={handleRestart}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-8 py-6">
          <div className="flex items-center justify-center">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-lg mr-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              Gen AI Basics Quiz
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        {quizState.stage !== 'results' && (
          <div className="max-w-4xl mx-auto p-8">
            <ProgressBar 
              current={quizState.currentQuestionIndex} 
              total={quizQuestions.length} 
            />
          </div>
        )}
        
        {renderCurrentStage()}
      </main>

      {/* Footer */}
      <footer className="mt-16 bg-white border-t">
        <div className="max-w-6xl mx-auto px-8 py-6 text-center">
          <p className="text-gray-600">
            Learn the fundamentals of Generative AI through interactive quizzes
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;