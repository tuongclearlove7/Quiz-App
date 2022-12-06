import QuizContext from "./quizContext";
import { useEffect, useState } from "react";


const QuizState = (props) => {
    const [questions, setQuestions] = useState([]);

    const [url, setUrl] = useState('');

    const fetchQuestions = async (api) => {
        const response = await fetch(api);
        const data = await response.json();
        let results = data.results;
        setQuestions(results);
        setLoading(false);
    };

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchQuestions(url);
    }, [url]);


    const [score, setScore] = useState({ 'rightAnswers': 0, 'wrongAnswers': 0 });
    const [next, setNext] = useState(0)

    return (
        <QuizContext.Provider value={{ questions, setQuestions, url, setUrl, fetchQuestions, loading, setLoading, score, setScore, next, setNext }}>
            {props.children}
        </QuizContext.Provider>
    )
}

export default QuizState