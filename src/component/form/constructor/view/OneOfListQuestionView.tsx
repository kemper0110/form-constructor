import React, {useState} from 'react';
import QuestionCover from "../../viewer/view/impl/QuestionCover";
import {OneOfListQuestion} from "../../../../model/Form";
import BaseQuestionView from "./BaseQuestionView";
import {useCreatorStore} from "../../../../context/FormCreatorContext";
import {observer} from "mobx-react-lite";
import useNextAnswer from "../../../../hooks/useNextAnswer";
import {autoAnnotation} from "mobx/dist/types/autoannotation";


interface OneOfListQuestionViewProps {
    question: OneOfListQuestion
}


const OneOfListQuestionView = observer(
    function OneOfListQuestionView({question}: OneOfListQuestionViewProps) {
        const {next} = useNextAnswer("Вариант ", 1);
        return (
            <BaseQuestionView question={question}>
                <ul>
                    {
                        question.answers.map(
                            (answer, idx) => (
                                <li key={answer.id}>
                                    <input value={answer.text}
                                           onChange={evt => question.replaceAnswer({
                                               id: answer.id,
                                               text: evt.target.value
                                           })}
                                           onClick={e => (e.target as any).select()}
                                           type="text" autoFocus={idx === question.answers.length - 1}/>
                                    <button onClick={() => question.deleteAnswer(answer.id)}>X</button>
                                </li>
                            )
                        )
                    }
                    <li>
                        <input placeholder="Добавить ответ" onFocusCapture={() => question.pushAnswer(next())}/>
                    </li>
                </ul>
            </BaseQuestionView>
        );
    })

export default OneOfListQuestionView;