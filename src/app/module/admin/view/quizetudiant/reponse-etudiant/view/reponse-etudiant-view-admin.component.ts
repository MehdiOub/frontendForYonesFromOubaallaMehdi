import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ReponseEtudiantService} from 'src/app/controller/service/ReponseEtudiant.service';
import {ReponseEtudiantDto} from 'src/app/controller/model/ReponseEtudiant.model';
import {ReponseEtudiantCriteria} from 'src/app/controller/criteria/ReponseEtudiantCriteria.model';

import {QuestionDto} from 'src/app/controller/model/Question.model';
import {QuestionService} from 'src/app/controller/service/Question.service';
import {QuizEtudiantDto} from 'src/app/controller/model/QuizEtudiant.model';
import {QuizEtudiantService} from 'src/app/controller/service/QuizEtudiant.service';
import {ReponseDto} from 'src/app/controller/model/Reponse.model';
import {ReponseService} from 'src/app/controller/service/Reponse.service';
@Component({
  selector: 'app-reponse-etudiant-view-admin',
  templateUrl: './reponse-etudiant-view-admin.component.html'
})
export class ReponseEtudiantViewAdminComponent extends AbstractViewController<ReponseEtudiantDto, ReponseEtudiantCriteria, ReponseEtudiantService> implements OnInit {


    constructor(private reponseEtudiantService: ReponseEtudiantService, private questionService: QuestionService, private quizEtudiantService: QuizEtudiantService, private reponseService: ReponseService){
        super(reponseEtudiantService);
    }

    ngOnInit(): void {
        this.reponse = new ReponseDto();
        this.reponseService.findAll().subscribe((data) => this.reponses = data);
        this.quizEtudiant = new QuizEtudiantDto();
        this.quizEtudiantService.findAll().subscribe((data) => this.quizEtudiants = data);
        this.question = new QuestionDto();
        this.questionService.findAll().subscribe((data) => this.questions = data);
    }


    get reponse(): ReponseDto {
       return this.reponseService.item;
    }
    set reponse(value: ReponseDto) {
        this.reponseService.item = value;
    }
    get reponses():Array<ReponseDto> {
       return this.reponseService.items;
    }
    set reponses(value: Array<ReponseDto>) {
        this.reponseService.items = value;
    }
    get question(): QuestionDto {
       return this.questionService.item;
    }
    set question(value: QuestionDto) {
        this.questionService.item = value;
    }
    get questions():Array<QuestionDto> {
       return this.questionService.items;
    }
    set questions(value: Array<QuestionDto>) {
        this.questionService.items = value;
    }
    get quizEtudiant(): QuizEtudiantDto {
       return this.quizEtudiantService.item;
    }
    set quizEtudiant(value: QuizEtudiantDto) {
        this.quizEtudiantService.item = value;
    }
    get quizEtudiants():Array<QuizEtudiantDto> {
       return this.quizEtudiantService.items;
    }
    set quizEtudiants(value: Array<QuizEtudiantDto>) {
        this.quizEtudiantService.items = value;
    }


}
