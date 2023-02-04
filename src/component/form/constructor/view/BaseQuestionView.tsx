import React, {useState} from 'react';
import RequiredCheckbox from "./impl/RequiredCheckbox";
import KindSelector from "./impl/KindSelector";
import QuestionCover from "../../viewer/view/impl/QuestionCover";
import {BaseQuestion} from "../../../../model/Form";
import {observer} from "mobx-react-lite";
import {useCreatorStore} from "../../../../context/FormCreatorContext";

interface BaseQuestionViewProps {
    question: BaseQuestion
    children: React.ReactNode
}

const BaseQuestionView = observer(function BaseQuestionView({children, question}: BaseQuestionViewProps) {
    const store = useCreatorStore();
    return (
        <QuestionCover>
            <input type="text" placeholder="Вопрос"
                   value={question.title} onChange={evt => question.setTitle(evt.target.value)}/>
            <RequiredCheckbox question={question}/>
            <KindSelector question={question}/>
            {children}
            <button className="btn btn-danger m-1" onClick={() => store.deleteQuestion(question.id)}>Delete question</button>
        </QuestionCover>
    );
})

export default BaseQuestionView;