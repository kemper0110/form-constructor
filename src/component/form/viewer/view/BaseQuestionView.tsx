import React, {useState} from 'react';
import QuestionCover from "../../viewer/view/impl/QuestionCover";
import {BaseQuestion} from "../../../../model/Form";
import {observer} from "mobx-react-lite";

interface BaseQuestionViewProps {
    question: BaseQuestion
    children: React.ReactNode
}

const BaseQuestionView = observer(function BaseQuestionView({children, question}: BaseQuestionViewProps) {
    // const store = useCreatorStore();
    return (
        <QuestionCover>
            <input type="text" placeholder="Вопрос"
                   value={question.title} onChange={evt => question.setTitle(evt.target.value)}/>
            {children}
        </QuestionCover>
    );
})

export default BaseQuestionView;