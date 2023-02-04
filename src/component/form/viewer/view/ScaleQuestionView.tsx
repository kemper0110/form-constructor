import {ScaleQuestion} from "../../../../model/Form";
import QuestionCover from "./impl/QuestionCover";
import React from "react";

interface ScaleQuestionViewProps {
    question: ScaleQuestion
}

export default function ScaleQuestionView({question}: ScaleQuestionViewProps) {
    return (
        <QuestionCover>
            <h3>{question.title}</h3>
            <div>
                <span>{question.label.from}</span>
                <input type="range" min={question.scale.from} max={question.scale.to} step="1" />
                <span>{question.label.to}</span>
            </div>
        </QuestionCover>
    )
}