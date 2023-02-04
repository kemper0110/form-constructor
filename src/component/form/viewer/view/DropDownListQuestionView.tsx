import React from "react";
import {DropDownListQuestion} from "../../../../model/Form";
import QuestionCover from "./impl/QuestionCover";


interface DropDownListQuestionProps {
    question: DropDownListQuestion
}

export default function DropDownListQuestionView({question}: DropDownListQuestionProps) {
    return (
        <QuestionCover>
            <h3>{question.title}</h3>
            <select>
                <option value=""></option>
                {question.answers.map(answer => <option key={answer.id} value={answer.text}>{answer.text}</option>)}
            </select>
        </QuestionCover>
    )
}