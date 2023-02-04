import React from "react";
import {QuestionKind} from "../model/Form";
import OneOfListQuestionView from "../component/form/viewer/view/OneOfListQuestionView";
import DropDownListQuestionView from "../component/form/viewer/view/DropDownListQuestionView";
import LineQuestionView from "../component/form/viewer/view/LineQuestionView";
import TextQuestionView from "../component/form/viewer/view/TextQuestionView";
import ScaleQuestionView from "../component/form/viewer/view/ScaleQuestionView";


function mapToQuestionView(question) {
    switch (question.kind) {
        case QuestionKind.OneOfList:
            return <OneOfListQuestionView question={question}/>
        case QuestionKind.DropDownList:
            return <DropDownListQuestionView question={question}/>
        case QuestionKind.MultipleOfList:
            return;
        case QuestionKind.Line:
            return <LineQuestionView question={question}/>
        case QuestionKind.Text:
            return <TextQuestionView question={question}/>
        case QuestionKind.Scale:
            return <ScaleQuestionView question={question}/>
        default:
            break;
    }
}

export default function FormViewer() {
    return (
        <div>
            <h1>{}</h1>
            <div>
                {}
            </div>
        </div>
    )
}