import React, { useContext, useEffect } from "react";
import { QuizContext } from "../context/QuizContext.jsx";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const {
    questions,
    currentQuestionIndex,
    currentQuestion,
    score,
    timer,
    isTimeUp,
    isQuizEnded,
    userAnswers,
    setScore,
    handleAnswer,
    handleNextQuestion,
    handleRestartQuiz,
  } = useContext(QuizContext);

  useEffect(() => {
    if (isTimeUp) {
      handleNextQuestion();
    }
  }, [isTimeUp, handleNextQuestion]);

  if (isQuizEnded) {
    return (
      <div className="min-h-screen flex flex-col items-center p-6 text-sky-100" style={{background:'linear-gradient(180deg,var(--bg-900),var(--bg-700))'}}>
        <div className="container w-full max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Quiz Completed!</h2>
          <p className="mb-4">Your Score: <span className="font-semibold">{score}</span> / <span className="font-semibold">{questions.length}</span></p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <button onClick={handleRestartQuiz} className="theme-cta px-6 py-2 rounded-full" style={{background:'linear-gradient(90deg,var(--cta-from),var(--cta-to))'}}>Restart Quiz</button>
            {/* <button onClick={() => navigate('/')} className="px-5 py-2 rounded-full border border-sky-300 text-sky-100">Back to Home</button> */}
          </div>

          <div className="mt-8 w-full p-4">
            <h3 className="text-2xl font-semibold mb-4">Your Answers</h3>
            <div className="space-y-4">
              {userAnswers.length === 0 && <p className="text-muted">No answers recorded.</p>}
              {userAnswers.map((answerObj, index) => (
                <div key={index} className="p-4 rounded-lg shadow-md border border-sky-300" style={{background:'linear-gradient(90deg,var(--card-from),rgba(14,165,164,0.06))'}}>
                  <p className="font-semibold mb-2 text-sky-100">Q{index + 1}: {answerObj.question?.question}</p>
                  <p className="mb-1">Your Answer: <span className={answerObj.selectedAnswer === answerObj.currentAnswer ? 'text-success font-bold' : 'text-danger font-bold'}>{answerObj.selectedAnswer}</span></p>
                  {answerObj.selectedAnswer !== answerObj.currentAnswer && (
                    <p className="text-sky-100">Correct Answer: <span className="text-success font-bold">{answerObj.currentAnswer}</span></p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const { question, options } = questions[currentQuestionIndex] || {};
  // Progress: 0% at start, 100% only when quiz is ended
  let progress = 0;
  if (questions.length > 0) {
    if (isQuizEnded) {
      progress = 100;
    } else {
      progress = (currentQuestionIndex / questions.length) * 100;
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-2 py-8 text-sky-100 relative" style={{background:'linear-gradient(180deg,var(--bg-900),var(--bg-700))'}}>
      <button
        onClick={() => navigate("/")}
        aria-label="Back to Home"
        title="Back to Home"
        className="fixed left-4 top-4 md:left-8 md:top-8 text-white font-bold rounded-full shadow-lg transition-transform duration-150 z-50 theme-cta text-sm md:text-base px-3 md:px-5 py-2 md:py-2"
        style={{background:'linear-gradient(90deg,var(--cta-from),var(--cta-to))'}}
      >
        ← Home
      </button>
      <div className="container w-full">
      <div className="w-full max-w-3xl flex flex-col gap-4 mb-8">
        <div className="flex flex-row justify-between items-center w-full">
          <p className="text-lg md:text-xl font-bold tracking-wide">Total: <span className="text-sky-200">{questions.length}</span></p>
          <p className="text-lg md:text-xl font-bold tracking-wide">Current: <span className="text-sky-200">{currentQuestionIndex + 1}</span></p>
        </div>
        <div className="w-full flex flex-col gap-2">
          <div className="w-full h-4 bg-gray-700 rounded-full overflow-hidden relative">
            <div
              className="h-full transition-all duration-300"
              style={{ width: `${progress}%`, background: 'linear-gradient(90deg,var(--cta-from),var(--cta-to))' }}
            ></div>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-semibold text-white drop-shadow">
              {Math.round(progress)}% Completed
            </span>
          </div>
        </div>
      </div>
      </div>
      <div className="container w-full">
      <div className="w-full max-w-2xl border border-sky-300 rounded-2xl shadow-2xl p-6 md:p-10 flex flex-col items-center gap-6" style={{background:'linear-gradient(180deg,var(--card-from),var(--card-to))'}}>
        <h2 className="text-2xl md:text-3xl font-extrabold text-center text-sky-100 drop-shadow-lg mb-2">{question}</h2>
        <p className="text-lg md:text-xl text-center mb-2">
          Time Left: <span className="text-danger font-bold animate-pulse">{timer}</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          {options &&
            options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswer(option)}
                className="w-full text-base md:text-lg font-semibold border-2 border-sky-300 py-3 px-4 rounded-xl shadow-lg transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-sky-300"
                style={{background:'linear-gradient(90deg,var(--cta-from),var(--cta-to))'}}
              >
                {option}
              </button>
            ))}
        </div>
        <button
          onClick={handleNextQuestion}
          className="self-end mt-4 text-white font-semibold py-2 px-6 rounded-full shadow transition-all duration-200"
          style={{background:'linear-gradient(90deg,var(--cta-from),var(--cta-to))'}}
        >
          Next
        </button>
      </div>
      </div>
    </div>
  );
};

export default Quiz;
