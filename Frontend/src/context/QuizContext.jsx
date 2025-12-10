import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
export const QuizContext = React.createContext();

const QuizProvider = ({ children }) => {

    const [questions, setQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [timer, setTimer] = useState(10);
    const [isTimeUp, setIsTimeUp] = useState(false);
    const [isQuizEnded, setIsQuizEnded] = useState(false);
    const [userAnswers, setUserAnswers] = useState([]);

    const backendUrl = 'http://localhost:3000';

    // fetch questions from backend API

    const fetchQuestions = async () => {
        try {
            const {data} = await axios.get(`${backendUrl}/api/questions`);
            if (data && data.success) {
                setQuestions(data.questions ?? data);
            } else if (Array.isArray(data)) {
                setQuestions(data);
            }
            
        } catch (error) {
            const msg = error?.message || 'Error fetching questions';
            toast.error(msg);
        }
    };

    // Timer logic can be added here


    useEffect(() => {
        let countdown;
        if (currentQuestionIndex < questions.length && !isTimeUp && !isQuizEnded) {
            countdown = setInterval(() => {
                setTimer((prev) => {
                    if (prev < 1) {
                        clearInterval(countdown);
                        setIsTimeUp(true);// move to next question
                        setCurrentQuestionIndex((prev) => prev + 1);// increment question index
                        return 10; // reset timer for next question
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => clearInterval(countdown);
    }, [currentQuestionIndex, isTimeUp, isQuizEnded, questions.length]);
    
    const handleAnswer = (selectedAnswer) => {
        if (!questions || questions.length === 0) return;
        const currentAnswer = questions[currentQuestionIndex]?.answer;

        // Store user answer
        setUserAnswers((prev) => [...prev, {
            question: questions[currentQuestionIndex],
            currentAnswer,
            selectedAnswer,
        }]);
        if (selectedAnswer === currentAnswer) {
            setScore((prev) => prev + 1);
            toast.success('Correct Answer!');
        }
        setIsTimeUp(true);// trigger next question
    };

    // current question object (convenience for consumers)
    const currentQuestion = questions[currentQuestionIndex];

    // move to next question
    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex((prev) => prev + 1);
            setIsTimeUp(false);
            setTimer(10); // reset timer
        } else {
            setIsQuizEnded(true);
        }
    };

    // Reset quiz

    const handleRestartQuiz = () => {
        setCurrentQuestionIndex(0);
        setScore(0);
        setIsTimeUp(false);
        setIsQuizEnded(false);
        setTimer(10);
        setUserAnswers([]);// clear previous answers
    }

    useEffect(() => {
        fetchQuestions();
    }, []);

    const values = {
        questions,
        // index and object for compatibility with different consumers
        currentQuestionIndex,
        currentQuestion,
        setCurrentQuestionIndex,
        setCurrentQuestion: setCurrentQuestionIndex,
        score,
        timer,
        isTimeUp,
        isQuizEnded,
        userAnswers,
        setScore,
        handleAnswer,
        handleNextQuestion,
        handleRestartQuiz,
    };
    return (
        <QuizContext.Provider value={values}>
            {children}
        </QuizContext.Provider>
    );
}

export default QuizProvider;