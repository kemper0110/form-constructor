import {LineQuestion} from "../../../../model/Form";
import QuestionCover from "./impl/QuestionCover";
import React from "react";


interface LineQuestionViewProps {
    question: LineQuestion
}

export default function LineQuestionView({question}: LineQuestionViewProps) {
    return (
        <QuestionCover>
            <h3>{question.title}</h3>
            <input type="text"/>
        </QuestionCover>
    )
}