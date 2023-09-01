import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ReponseService} from 'src/app/controller/service/Reponse.service';
import {ReponseDto} from 'src/app/controller/model/Reponse.model';
import {ReponseCriteria} from 'src/app/controller/criteria/ReponseCriteria.model';

import {EtatReponseDto} from 'src/app/controller/model/EtatReponse.model';
import {EtatReponseService} from 'src/app/controller/service/EtatReponse.service';
import {QuestionDto} from 'src/app/controller/model/Question.model';
import {QuestionService} from 'src/app/controller/service/Question.service';
@Component({
  selector: 'app-reponse-view-admin',
  templateUrl: './reponse-view-admin.component.html'
})
export class ReponseViewAdminComponent extends AbstractViewController<ReponseDto, ReponseCriteria, ReponseService> implements OnInit {


    constructor(private reponseService: ReponseService, private etatReponseService: EtatReponseService, private questionService: QuestionService){
        super(reponseService);
    }

    ngOnInit(): void {
        this.etatReponse = new EtatReponseDto();
        this.etatReponseService.findAll().subscribe((data) => this.etatReponses = data);
        this.question = new QuestionDto();
        this.questionService.findAll().subscribe((data) => this.questions = data);
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
    get etatReponse(): EtatReponseDto {
       return this.etatReponseService.item;
    }
    set etatReponse(value: EtatReponseDto) {
        this.etatReponseService.item = value;
    }
    get etatReponses():Array<EtatReponseDto> {
       return this.etatReponseService.items;
    }
    set etatReponses(value: Array<EtatReponseDto>) {
        this.etatReponseService.items = value;
    }


}
