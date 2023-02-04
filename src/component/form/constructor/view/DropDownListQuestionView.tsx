import React, {useState} from 'react';
import {observer} from "mobx-react-lite";
import {DropDownListQuestion} from "../../../../model/Form";
import BaseQuestionView from "./BaseQuestionView";
import useNextAnswer from "../../../../hooks/useNextAnswer";

interface DropDownListQuestionViewProps {
    question: DropDownListQuestion
}

const DropDownListQuestionView = observer(function DropDownListQuestionView({question}: DropDownListQuestionViewProps) {
    const {next} = useNextAnswer("Вариант ", 1);
    return (
        <BaseQuestionView question={question}>
            <ol>
                {
                    question.answers.map(
                        (answer, idx) => (
                            <li key={answer.id}>
                                <input value={answer.text} onChange={evt => question.replaceAnswer({id: answer.id, text: evt.target.value})}
                                       onClick={ e => (e.target as any).select() }
                                       type="text" autoFocus={idx === question.answers.length - 1}/>
                                <button onClick={() => question.deleteAnswer(answer.id)}>X</button>
                            </li>
                        )
                    )
                }
                <li>
                    <input placeholder="Добавить ответ" onFocusCapture={() => question.pushAnswer(next())}/>
                </li>
            </ol>
        </BaseQuestionView>
    );
});
export default DropDownListQuestionView;