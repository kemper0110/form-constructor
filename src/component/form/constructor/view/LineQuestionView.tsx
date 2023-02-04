import React from 'react';
import QuestionCover from "../../viewer/view/impl/QuestionCover";
import {LineQuestion, QuestionKind} from "../../../../model/Form";
import RequiredCheckbox from "./impl/RequiredCheckbox";
import KindSelector from "./impl/KindSelector";
import FormControl from "../FormControl";
import {observer} from "mobx-react-lite";
import BaseQuestionView from "./BaseQuestionView";

interface LineQuestionViewProps {
    question: LineQuestion
}

const LineQuestionView = observer(
    function LineQuestionView({question}: LineQuestionViewProps) {
        return (
            <BaseQuestionView question={question}>
                <input type="text" disabled value="Краткий ответ"/>
            </BaseQuestionView>
        )
    });

export default LineQuestionView;