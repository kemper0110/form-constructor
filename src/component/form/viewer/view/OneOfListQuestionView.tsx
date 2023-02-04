import {OneOfListQuestion} from "../../../../model/Form";
import React from "react";
import QuestionCover from "./impl/QuestionCover";

interface OneOfListQuestionViewProps {
    question: OneOfListQuestion
}

export default function OneOfListQuestionView({question} : OneOfListQuestionViewProps) {
    return (
        <QuestionCover>
            <h3>{question.title}</h3>
            {
                question.answers.map(
                    (answer) => (
                        <div key={answer.id}>
                            <input type="radio" name="option"/>
                            <span>{answer.text}</span>
                        </div>
                    )
                )
            }
        </QuestionCover>
    )
}