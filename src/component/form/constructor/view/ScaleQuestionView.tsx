import React, {useId, useState} from 'react';
import {observer} from "mobx-react-lite";
import BaseQuestionView from "./BaseQuestionView";
import {ScaleQuestion} from "../../../../model/Form";

interface ScaleQuestionViewProps {
    question: ScaleQuestion
}

const ScaleQuestionView = observer(function ScaleQuestionView({question}: ScaleQuestionViewProps) {
    // const [from, setFrom] = useState(1)
    // const [to, setTo] = useState(5)
    const fromLabelId = useId()
    const toLabelId = useId()
    return (
        <BaseQuestionView question={question}>
            <select className="m-3"
                    value={question.scale.from} onChange={evt => question.setScale({from: Number(evt.target.value)})}>
                <option value={0}>0</option>
                <option value={1}>1</option>
            </select>
            <span className="h3">-</span>
            <select className="m-3"
                    value={question.scale.to} onChange={evt => question.setScale({to: Number(evt.target.value)})}>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
                <option value={6}>6</option>
                <option value={7}>7</option>
                <option value={8}>8</option>
                <option value={9}>9</option>
                <option value={10}>10</option>
            </select>
            <p className="d-table-row">
                <label htmlFor={fromLabelId} className="m-2 d-table-cell">{question.scale.from}</label>
                <input className="m-2 d-table-cell" placeholder="Подпись (необязательно)"
                    id={fromLabelId} value={question.label.from} onChange={evt => question.setLabel({from: evt.target.value})}/>
            </p>
            <p className="d-table-row">
                <label htmlFor={toLabelId} className="m-2 d-table-cell">{question.scale.to}</label>
                <input className="m-2 d-table-cell"  placeholder="Подпись (необязательно)"
                    id={toLabelId} value={question.label.to} onChange={evt => question.setLabel({to: evt.target.value})}/>
            </p>
        </BaseQuestionView>
    );
})

export default ScaleQuestionView;