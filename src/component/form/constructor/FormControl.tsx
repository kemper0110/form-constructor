import React from "react";
import {useCreatorStore} from "../../../context/FormCreatorContext";
import {observer} from "mobx-react-lite";


const FormControl = observer(function FormControl() {
    const store = useCreatorStore()
    const dump = () => {
        console.log(JSON.stringify(store, null, 2))
    };
    return (
        <div className="d-inline">
            <button className="btn btn-primary m-1 fs-1"
                    onClick={() => store.addQuestion()}>Добавить вопрос
            </button>
            <button className="btn btn-primary m-1 fs-1"
                    onClick={() => store.clearQuestions()}>Очистить
            </button>
            <button onClick={dump}>Дамп</button>
        </div>
    )
});

export default FormControl;