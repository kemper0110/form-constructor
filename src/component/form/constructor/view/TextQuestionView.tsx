import React from 'react';
import {TextQuestion} from "../../../../model/Form";
import BaseQuestionView from "./BaseQuestionView";
import {observer} from "mobx-react-lite";

interface TextQuestionViewProps {
    question: TextQuestion
}

const TextQuestionView = observer(function TextQuestionView({question}: TextQuestionViewProps) {
    return (
        <BaseQuestionView question={question}>
            <textarea disabled value="Развернутый ответ"/>
        </BaseQuestionView>
    );
});

export default TextQuestionView;