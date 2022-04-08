import { React, useState, useEffect } from 'react';

import '../styles/quizPage.css';

import Header from "./Header";
import TimerBar from './TimerBar';



function QuizPage(props) {
    
    const { category, questions } = props;

    const firstIndex = 0;
    const emptyQuizDetails = {
        streak: 0,
        category: category,
        elapsedTime: '00:00:00'
    }

    let gameOver = 'game-over'
    const [isOver, setIsOver] = useState(null)

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(firstIndex);
    const [answers, setAnswers] = useState([]);
    const [numberOfQuestions, setNumberOfQuestions] = useState(0);
    const [quizDetails, setQuizDetails] = useState(emptyQuizDetails);

    const shuffleAnswers = (answers) => {
        const shuffled = answers.sort((a, b) => 0.5 - Math.random());
        return shuffled;
    }
    const getAnswers = (question) => {
        console.log(question);
        let answers = [];
        answers.push(question.correctAnswer);
        for (let i = 0; i < question.incorrectAnswers.length; i++) {
            answers.push(question.incorrectAnswers[i]);
        }
        const shuffledAnswers = shuffleAnswers(answers);
        setAnswers(shuffledAnswers);
    }

    useEffect(() => {
        if (questions[currentQuestionIndex]) {
            getAnswers(questions[currentQuestionIndex]);
            setNumberOfQuestions(questions.length);
        }
    }, [questions, currentQuestionIndex])

    const handleUserChoice = (e) => {
        e.preventDefault();
        const userAnswer = e.target.value.slice(3);
        const realAnswer = questions[currentQuestionIndex].correctAnswer;
        if (userAnswer === realAnswer) {
            // setCorrect(true);
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setQuizDetails({
                ...quizDetails, streak: quizDetails.streak + 1
            })
        }
    }

    console.log(quizDetails);

    return(
        <div className="main-container" id={isOver}>
            <Header />
            <div className="quiz-main">
                <TimerBar setIsOver={setIsOver}/>
                <div className='question'>
                    {questions[currentQuestionIndex] && <h2>{questions[currentQuestionIndex].question}</h2>}
                </div>
                
                    <div className='mcq-answers'>
                        <form>
                            <input 
                                type='button'
                                id='mcq-answer' 
                                value={`A) ${answers[0]}`}
                                onClick={(e) => handleUserChoice(e)}
                            />
                            <input 
                                type='button'
                                id='mcq-answer'
                                value={`B) ${answers[1]}`}
                                onClick={(e) => handleUserChoice(e)}
                            />
                            <input 
                                type='button'
                                id='mcq-answer' 
                                value={`C) ${answers[2]}`}
                                onClick={(e) => handleUserChoice(e)}
                            />
                            <input 
                                type='button'
                                id='mcq-answer'
                                value={`D) ${answers[3]}`}
                                onClick={(e) => handleUserChoice(e)}
                            />
                        </form>
                    </div>
                
            </div>
        </div>
    )
}

export default QuizPage;