import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {QuizEtudiantService} from 'src/app/controller/service/QuizEtudiant.service';
import {QuizEtudiantDto} from 'src/app/controller/model/QuizEtudiant.model';
import {QuizEtudiantCriteria} from 'src/app/controller/criteria/QuizEtudiantCriteria.model';
import {QuestionDto} from 'src/app/controller/model/Question.model';
import {QuestionService} from 'src/app/controller/service/Question.service';
import {ReponseDto} from 'src/app/controller/model/Reponse.model';
import {ReponseService} from 'src/app/controller/service/Reponse.service';
import {ReponseEtudiantDto} from 'src/app/controller/model/ReponseEtudiant.model';
import {ReponseEtudiantService} from 'src/app/controller/service/ReponseEtudiant.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {QuizService} from 'src/app/controller/service/Quiz.service';
@Component({
  selector: 'app-quiz-etudiant-create-admin',
  templateUrl: './quiz-etudiant-create-admin.component.html'
})
export class QuizEtudiantCreateAdminComponent extends AbstractCreateController<QuizEtudiantDto, QuizEtudiantCriteria, QuizEtudiantService>  implements OnInit {

    private _reponseEtudiantsElement = new ReponseEtudiantDto();


   private _validQuizEtudiantRef = true;
    private _validEtudiantRef = true;
    private _validQuizRef = true;
    private _validQuizLib = true;
    private _validReponseEtudiantsRef = true;

    constructor( private quizEtudiantService: QuizEtudiantService , private questionService: QuestionService, private reponseService: ReponseService, private reponseEtudiantService: ReponseEtudiantService, private etudiantService: EtudiantService, private quizService: QuizService) {
        super(quizEtudiantService);
    }

    ngOnInit(): void {
        this.reponseEtudiantsElement.reponse = new ReponseDto();
        this.reponseService.findAll().subscribe((data) => this.reponses = data);
        this.reponseEtudiantsElement.question = new QuestionDto();
        this.questionService.findAll().subscribe((data) => this.questions = data);
    this.etudiant = new EtudiantDto();
    this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
    this.quiz = new QuizDto();
    this.quizService.findAll().subscribe((data) => this.quizs = data);
}



    validateReponseEtudiants(){
        this.errorMessages = new Array();
        this.validateReponseEtudiantsRef();
    }


    public setValidation(value: boolean){
        this.validQuizEtudiantRef = value;
        this.validReponseEtudiantsRef = value;
    }

    public addReponseEtudiants() {
        if( this.item.reponseEtudiants == null )
            this.item.reponseEtudiants = new Array<ReponseEtudiantDto>();
       this.validateReponseEtudiants();
       if (this.errorMessages.length === 0) {
              this.item.reponseEtudiants.push({... this.reponseEtudiantsElement});
              this.reponseEtudiantsElement = new ReponseEtudiantDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deletereponseEtudiants(p: ReponseEtudiantDto) {
        this.item.reponseEtudiants.forEach((element, index) => {
            if (element === p) { this.item.reponseEtudiants.splice(index, 1); }
        });
    }

    public editreponseEtudiants(p: ReponseEtudiantDto) {
        this.reponseEtudiantsElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateQuizEtudiantRef();
    }

    public validateQuizEtudiantRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validQuizEtudiantRef = false;
        } else {
            this.validQuizEtudiantRef = true;
        }
    }

    public validateReponseEtudiantsRef(){
        if (this.reponseEtudiantsElement.ref == null) {
            this.errorMessages.push('Ref de la reponseEtudiant est  invalide');
            this.validReponseEtudiantsRef = false;
        } else {
            this.validReponseEtudiantsRef = true;
        }
    }


    get reponse(): ReponseDto {
        return this.reponseService.item;
    }
    set reponse(value: ReponseDto) {
        this.reponseService.item = value;
    }
    get reponses(): Array<ReponseDto> {
        return this.reponseService.items;
    }
    set reponses(value: Array<ReponseDto>) {
        this.reponseService.items = value;
    }
    get createReponseDialog(): boolean {
       return this.reponseService.createDialog;
    }
    set createReponseDialog(value: boolean) {
        this.reponseService.createDialog= value;
    }
    get question(): QuestionDto {
        return this.questionService.item;
    }
    set question(value: QuestionDto) {
        this.questionService.item = value;
    }
    get questions(): Array<QuestionDto> {
        return this.questionService.items;
    }
    set questions(value: Array<QuestionDto>) {
        this.questionService.items = value;
    }
    get createQuestionDialog(): boolean {
       return this.questionService.createDialog;
    }
    set createQuestionDialog(value: boolean) {
        this.questionService.createDialog= value;
    }
    get quiz(): QuizDto {
        return this.quizService.item;
    }
    set quiz(value: QuizDto) {
        this.quizService.item = value;
    }
    get quizs(): Array<QuizDto> {
        return this.quizService.items;
    }
    set quizs(value: Array<QuizDto>) {
        this.quizService.items = value;
    }
    get createQuizDialog(): boolean {
       return this.quizService.createDialog;
    }
    set createQuizDialog(value: boolean) {
        this.quizService.createDialog= value;
    }
    get etudiant(): EtudiantDto {
        return this.etudiantService.item;
    }
    set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
    }
    get etudiants(): Array<EtudiantDto> {
        return this.etudiantService.items;
    }
    set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
    }
    get createEtudiantDialog(): boolean {
       return this.etudiantService.createDialog;
    }
    set createEtudiantDialog(value: boolean) {
        this.etudiantService.createDialog= value;
    }



    get validQuizEtudiantRef(): boolean {
        return this._validQuizEtudiantRef;
    }

    set validQuizEtudiantRef(value: boolean) {
         this._validQuizEtudiantRef = value;
    }

    get validEtudiantRef(): boolean {
        return this._validEtudiantRef;
    }
    set validEtudiantRef(value: boolean) {
        this._validEtudiantRef = value;
    }
    get validQuizRef(): boolean {
        return this._validQuizRef;
    }
    set validQuizRef(value: boolean) {
        this._validQuizRef = value;
    }
    get validQuizLib(): boolean {
        return this._validQuizLib;
    }
    set validQuizLib(value: boolean) {
        this._validQuizLib = value;
    }
    get validReponseEtudiantsRef(): boolean {
        return this._validReponseEtudiantsRef;
    }
    set validReponseEtudiantsRef(value: boolean) {
        this._validReponseEtudiantsRef = value;
    }

    get reponseEtudiantsElement(): ReponseEtudiantDto {
        if( this._reponseEtudiantsElement == null )
            this._reponseEtudiantsElement = new ReponseEtudiantDto();
        return this._reponseEtudiantsElement;
    }

    set reponseEtudiantsElement(value: ReponseEtudiantDto) {
        this._reponseEtudiantsElement = value;
    }

}
