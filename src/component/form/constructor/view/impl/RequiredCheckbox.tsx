import React, {useId} from 'react';
import {BaseQuestion} from "../../../../../model/Form";
import {useCreatorStore} from "../../../../../context/FormCreatorContext";
import {observer} from "mobx-react-lite";


interface RequiredCheckboxProps {
    question: BaseQuestion
}

const RequiredCheckbox = observer(function RequiredCheckbox({question}: RequiredCheckboxProps) {
    const store = useCreatorStore();
    const checkboxId = useId();

    return (
        <p>
            <input id={checkboxId} type="checkbox" className="m-1"
                   checked={question.required}
                   onChange={(evt) => question.setRequired(evt.target.checked)}/>
            <label htmlFor={checkboxId}>Обязательный</label>
        </p>
    );
});

export default RequiredCheckbox;