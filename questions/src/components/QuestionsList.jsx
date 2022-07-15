import React from "react"
import questions from "../data/Questions"
import Question from "./Question"

const QuestionsList = () => {

    return (
        <div>
            {questions.map((question) => {
                return <Question key={question.id} title={question.title} answer={question.answer}/>
            })}
        </div>
    )
}

export default QuestionsList