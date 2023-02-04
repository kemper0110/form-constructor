import React from "react";
import {
    BaseQuestion, DropDownListQuestion, LineQuestion, MultipleOfListQuestion,
    OneOfListQuestion, QuestionKind, ScaleQuestion, TextQuestion
} from "../model/Form";
import FormControl from "../component/form/constructor/FormControl";
import LineQuestionView from "../component/form/constructor/view/LineQuestionView";
import {useCreatorStore} from "../context/FormCreatorContext";
import {observer} from "mobx-react-lite";
import TextQuestionView from "../component/form/constructor/view/TextQuestionView";
import OneOfListQuestionView from "../component/form/constructor/view/OneOfListQuestionView";
import DropDownListQuestionView from "../component/form/constructor/view/DropDownListQuestionView";
import ScaleQuestionView from "../component/form/constructor/view/ScaleQuestionView";
import MultipleOfListQuestionView from "../component/form/constructor/view/MultipleOfListQuestionView";

const mapToView = (question: BaseQuestion) => {
    switch (question.kind) {
        case QuestionKind.Line:
            return <LineQuestionView key={question.id} question={question as LineQuestion}/>;
        case QuestionKind.OneOfList:
            return <OneOfListQuestionView key={question.id} question={question as OneOfListQuestion}/>
        case QuestionKind.Text:
            return <TextQuestionView key={question.id} question={question as TextQuestion}/>
        case QuestionKind.DropDownList:
            return <DropDownListQuestionView key={question.id} question={question as DropDownListQuestion}/>
        case QuestionKind.Scale:
            return <ScaleQuestionView key={question.id} question={question as ScaleQuestion}/>
        case QuestionKind.MultipleOfList:
            return <MultipleOfListQuestionView key={question.id} question={question as MultipleOfListQuestion}/>
    }
}


const FormCreator = observer(function FormCreator() {
    const store = useCreatorStore();
    return (
        <div className="shadow p-2">
            <FormControl/>
            <div className="">
                <input className="input-group-text d-lg-block m-3" type="text" name="name"
                       onChange={e => store.setName(e.target.value)}
                       autoComplete="off"
                       placeholder="Новая форма" value={store.name}/>
                <input className="input-group-text d-lg-block m-3" type="text" name="description"
                       onChange={e => store.setDescription(e.target.value)}
                       autoComplete="off"
                       placeholder="Описание" value={store.description}/>
            </div>
            {store.questions.map(mapToView)}
        </div>
    );
});

export default FormCreator;


// {
//     kind: QuestionKind.Scale,
//     title: "Scale question",
//     required: false,
//     scale: { from: 0, to: 10 },
//     label: { from: "Aboba", to: "Eboba" }
// },
// {
//     kind: QuestionKind.OneOfList,
//     title: "One of list simple question",
//     required: false,
//     answers: ["First", "Second", "Third"]
// },
// {
//     kind: QuestionKind.DropDownList,
//     title: "Drop down hard question",
//     required: false,
//     answers: ["DF1", "DF2", "DF3"]
// },
// {
//     kind: QuestionKind.Text,
//     title: "TextArea question",
//     required: false
// }

/*
    информация о элементах хранится
    в дереве ДОМ = исчезнет после рендера
    в массиве рядом = в нем инфа, по ней строится дерево

    по инфе из массива строить элементы

    в массиве
    полиморфные объекты с методом возвращающим разметку =
    готовые компоненты = а как сериализовывать
    структуры с типом и данными = по ним выбирать нужный компонент

    в локал стейте компонентов




 */