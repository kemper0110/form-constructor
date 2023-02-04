import React from 'react';
import {BaseQuestion, QuestionKind} from "../../../../../model/Form";
import {useCreatorStore} from "../../../../../context/FormCreatorContext";

interface KindSelectorProps {
    question: BaseQuestion,
}
const KindSelector = ({question}: KindSelectorProps) => {
    const store = useCreatorStore();
    const onChange = (evt: React.ChangeEvent<HTMLSelectElement>) => {
        const kind = evt.target.value as QuestionKind
        store.setKind(question.id, kind)
    };

    return (
        <p>
            <select onChange={onChange} value={question.kind}>
                <option value={QuestionKind.OneOfList}>Один из списка</option>
                <option value={QuestionKind.DropDownList}>Выпадающий список</option>
                <option value={QuestionKind.MultipleOfList}>Несколько из списка</option>
                <option value={QuestionKind.Line}>Строка</option>
                <option value={QuestionKind.Text}>Абзац</option>
                <option value={QuestionKind.Scale}>Шкала</option>
            </select>
        </p>
    );
};

export default KindSelector;