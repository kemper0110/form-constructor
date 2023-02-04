import React from 'react';
import useNextAnswer from "../../../../hooks/useNextAnswer";
import BaseQuestionView from "./BaseQuestionView";
import {observer} from "mobx-react-lite";
import {MultipleOfListQuestion} from "../../../../model/Form";

interface MultipleOfListQuestionViewProps {
    question: MultipleOfListQuestion
}

const MultipleOfListQuestionView = observer(
    function MultipleOfListQuestionView({question}: MultipleOfListQuestionViewProps) {
        const {next} = useNextAnswer("Вариант ", 1);
        return (
            <BaseQuestionView question={question}>
                <ul style={{listStyleType: '"\\2610    "'}}>
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
    }
)
export default MultipleOfListQuestionView;