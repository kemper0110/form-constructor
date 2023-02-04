import {TextQuestion} from "../../../../model/Form";
import QuestionCover from "./impl/QuestionCover";
import React from "react";


interface TextQuestionViewProps {
    question: TextQuestion
}

export default function TextQuestionView({question}: TextQuestionViewProps) {
    return (
        <QuestionCover>
            <h3>{question.title}</h3>
            <textarea/>
        </QuestionCover>
    )
}