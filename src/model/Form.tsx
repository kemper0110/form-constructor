/*
    Форма
    Заголовок: Название и описание формы
    Тело: массив из элементов формы

    Элементы форма: Вопрос | Название и описание | Изображение с заголовком | Раздел

    Базовый вопрос: заголовок, обязательность, картинка

    Вопрос:
    Базовый вопрос &
    Строка | Абзац | Один из списка | Несколько из списка | Выпадающий список | `Загрузка файла` | Шкала
    Ответ для каждого типа вопроса
*/


import React from "react";

import {v4 as uuidv4} from 'uuid';
import {action, makeAutoObservable, makeObservable, observable} from "mobx";
import {queries} from "@testing-library/react";


export enum QuestionKind {
    OneOfList = "OneOfList", MultipleOfList = "MultipleOfList", DropDownList = "DropDownList",
    Line = "Line", Text = "Text", Scale = "Scale"
}

export class BaseQuestion {
    id: string = uuidv4()
    kind: QuestionKind
    title: string
    required: boolean

    setRequired(state: boolean) {
        this.required = state
    }

    setTitle(title: string) {
        this.title = title
    }

    constructor(kind: QuestionKind, question?: BaseQuestion) {
        this.kind = kind
        this.title = question?.title || ""
        this.required = question?.required || false
        makeObservable(this, {
            id: observable, title: observable, required: observable,
            setRequired: action, setTitle: action
        })
    }
}

type Answer = {
    id: string
    text: string
}

export class ListQuestion extends BaseQuestion {
    answers: Answer[]

    deleteAnswer(id: string) {
        this.answers = this.answers.filter(ans => ans.id !== id)
    }

    pushAnswer(answer: string) {
        this.answers.push({
            id: uuidv4(),
            text: answer
        })
    }

    replaceAnswer(answer: Answer) {
        const idx = this.answers.findIndex(ans => answer.id === ans.id)
        if (idx !== -1) this.answers[idx] = answer;
    }

    constructor(kind: QuestionKind, question?: ListQuestion | BaseQuestion) {
        super(kind, question);
        makeObservable(this, {
            answers: observable,
            deleteAnswer: action, pushAnswer: action, replaceAnswer: action
        })
        const lq = question as ListQuestion
        this.answers = (lq && lq.answers) || []
    }
}

export class OneOfListQuestion extends ListQuestion {
    constructor(question?: BaseQuestion | ListQuestion) {
        super(QuestionKind.OneOfList, question);
        makeObservable(this, {});
    }
}

export class MultipleOfListQuestion extends ListQuestion {
    constructor(question?: BaseQuestion | ListQuestion) {
        super(QuestionKind.MultipleOfList, question);
        makeObservable(this, {});
    }
}

export class DropDownListQuestion extends ListQuestion {
    constructor(question?: BaseQuestion | ListQuestion) {
        super(QuestionKind.DropDownList, question);
        makeObservable(this, {});
    }
}

export class LineQuestion extends BaseQuestion {
    constructor(question?: BaseQuestion) {
        super(QuestionKind.Line, question);
        makeObservable(this, {});
    }
}

export class TextQuestion extends BaseQuestion {
    constructor(question?: BaseQuestion) {
        super(QuestionKind.Text, question);
        makeObservable(this, {});
    }
}


type ScaleType = {
    from: number,
    to: number
};
type LabelType = {
    from: string,
    to: string
}

export class ScaleQuestion extends BaseQuestion {
    scale: ScaleType
    label: LabelType

    setScale(scale: Partial<ScaleType>) {
        this.scale = {
            from: scale.from || this.scale.from,
            to: scale.to || this.scale.to
        }
    }

    setLabel(label: Partial<LabelType>) {
        this.label = {
            from: label.from || this.label.from,
            to: label.to || this.label.to
        }
    }

    constructor(question?: BaseQuestion | ScaleQuestion) {
        super(QuestionKind.Scale, question);
        makeObservable(this, {
            scale: observable, label: observable,
            setScale: action, setLabel: action
        });
        const sq = question as ScaleQuestion
        this.scale = (sq && sq.scale) || {from: 1, to: 5}
        this.label = (sq && sq.label) || {from: "", to: ""}
    }
}

export const makeQuestionByKind = (kind: QuestionKind, question?: BaseQuestion) : BaseQuestion => {
    switch (kind) {
        case QuestionKind.OneOfList:
            // return OneOfListQuestion
            return new OneOfListQuestion(question)
        case QuestionKind.MultipleOfList:
            // return MultipleOfListQuestion
            return new MultipleOfListQuestion(question)
        case QuestionKind.DropDownList:
            // return DropDownListQuestion
            return new DropDownListQuestion(question)
        case QuestionKind.Line:
            // return LineQuestion
            return new LineQuestion(question)
        case QuestionKind.Text:
            // return TextQuestion
            return new TextQuestion(question)
        case QuestionKind.Scale:
            // return ScaleQuestion
            return new ScaleQuestion(question)
    }
}

// export type NameDescription = {
//     kind: "NameDescription",
//     name: string,
//     description: string
// }
// export type NamedImage = {
//     kind: "NamedImage",
//     name: string,
//     image: string
// }

export type Form = {
    name: string,
    description: string,
    elements: Element[]
}
