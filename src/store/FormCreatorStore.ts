import {makeAutoObservable} from "mobx";
import {BaseQuestion, LineQuestion, makeQuestionByKind, OneOfListQuestion, QuestionKind} from "../model/Form";


export default class FormCreatorStore {
    name: string = "Новая форма"
    description: string = ""
    questions: BaseQuestion[] = []
    constructor() {
        makeAutoObservable(this)
    }
    setName(name: string) {
        this.name = name
    }
    setDescription(desc: string) {
        this.description = desc
    }
    setKind(uuid: string, kind: QuestionKind) {
        const idx = this.questions.findIndex(question => question.id === uuid)
        if(idx !== -1)
            this.questions[idx] = makeQuestionByKind(kind, this.questions[idx])
    }
    addQuestion() {
        this.questions.push(new LineQuestion())
    }
    deleteQuestion(id: string) {
        this.questions = this.questions.filter(question => question.id !== id)
    }
    replaceQuestion(uuid: string, question: BaseQuestion){
        const idx = this.findQuestionByUUID(uuid)
        if(idx === -1) return
        this.questions[idx] = question
    }
    clearQuestions() {
        this.questions = []
    }
    findQuestionByUUID(uuid: string) {
        return this.questions.findIndex(question => question.id === uuid)
    }
}

