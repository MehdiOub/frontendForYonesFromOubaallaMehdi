import {Component, OnInit} from '@angular/core';
import {QuizService} from 'src/app/controller/service/Quiz.service';
import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {QuizCriteria} from 'src/app/controller/criteria/QuizCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import {environment} from 'src/environments/environment';

import {QuestionDto} from 'src/app/controller/model/Question.model';
import {QuestionService} from 'src/app/controller/service/Question.service';
import {TypeDeQuestionDto} from 'src/app/controller/model/TypeDeQuestion.model';
import {TypeDeQuestionService} from 'src/app/controller/service/TypeDeQuestion.service';
import {ReponseEtudiantDto} from 'src/app/controller/model/ReponseEtudiant.model';
import {ReponseEtudiantService} from 'src/app/controller/service/ReponseEtudiant.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
import {HomeWorkDto} from 'src/app/controller/model/HomeWork.model';
import {HomeWorkService} from 'src/app/controller/service/HomeWork.service';
import {QuizEtudiantDto} from 'src/app/controller/model/QuizEtudiant.model';
import {QuizEtudiantService} from 'src/app/controller/service/QuizEtudiant.service';
import {ReponseDto} from 'src/app/controller/model/Reponse.model';
import {ReponseService} from 'src/app/controller/service/Reponse.service';


@Component({
    selector: 'app-quiz-list-admin',
    templateUrl: './quiz-list-admin.component.html'
})
export class QuizListAdminComponent extends AbstractListController<QuizDto, QuizCriteria, QuizService> implements OnInit {

    fileName = 'Quiz';

    constructor(private quizService: QuizService, private questionService: QuestionService, private typeDeQuestionService: TypeDeQuestionService, private quizEtudiantService: QuizEtudiantService, private etudiantService: EtudiantService, private sectionService: SectionService, private homeWorkService: HomeWorkService) {
        super(quizService);
    }

    ngOnInit(): void {
        this.findPaginatedByCriteria();
        this.initExport();
        this.initCol();
        this.loadSection();
    }

    public async loadQuizs() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Quiz', 'list');
        isPermistted ? this.service.findAll().subscribe(quizs => this.items = quizs, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'lib', header: 'Lib'},
            {field: 'dateDebut', header: 'Date debut'},
            {field: 'dateFin', header: 'Date fin'},
            {field: 'section?.code', header: 'Section'},
            {field: 'numero', header: 'Numero'},
            {field: 'seuilReussite', header: 'Seuil reussite'},
        ];
    }


    public async loadSection() {
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Quiz', 'list');
        isPermistted ? this.sectionService.findNeededQuiz().subscribe(sections => this.sections = sections, error => console.log(error))
            : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

    public initDuplicate(res: QuizDto) {
        if (res.questions != null) {
            res.questions.forEach(d => {
                d.quiz = null;
                d.id = null;
            });
        }
        if (res.quizEtudiants != null) {
            res.quizEtudiants.forEach(d => {
                d.quiz = null;
                d.id = null;
            });
        }
    }

    public prepareColumnExport(): void {
        this.exportData = this.items.map(e => {
            return {
                'Ref': e.ref,
                'Lib': e.lib,
                'Date debut': this.datePipe.transform(e.dateDebut, 'dd/MM/yyyy hh:mm'),
                'Date fin': this.datePipe.transform(e.dateFin, 'dd/MM/yyyy hh:mm'),
                'Section': e.section?.code,
                'Numero': e.numero,
                'Seuil reussite': e.seuilReussite,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport,
            'Lib': this.criteria.lib ? this.criteria.lib : environment.emptyForExport,
            'Date debut Min': this.criteria.dateDebutFrom ? this.datePipe.transform(this.criteria.dateDebutFrom, this.dateFormat) : environment.emptyForExport,
            'Date debut Max': this.criteria.dateDebutTo ? this.datePipe.transform(this.criteria.dateDebutTo, this.dateFormat) : environment.emptyForExport,
            'Date fin Min': this.criteria.dateFinFrom ? this.datePipe.transform(this.criteria.dateFinFrom, this.dateFormat) : environment.emptyForExport,
            'Date fin Max': this.criteria.dateFinTo ? this.datePipe.transform(this.criteria.dateFinTo, this.dateFormat) : environment.emptyForExport,
            //'Section': this.criteria.section?.code ? this.criteria.section?.code : environment.emptyForExport ,
            'Numero Min': this.criteria.numeroMin ? this.criteria.numeroMin : environment.emptyForExport,
            'Numero Max': this.criteria.numeroMax ? this.criteria.numeroMax : environment.emptyForExport,
            'Seuil reussite Min': this.criteria.seuilReussiteMin ? this.criteria.seuilReussiteMin : environment.emptyForExport,
            'Seuil reussite Max': this.criteria.seuilReussiteMax ? this.criteria.seuilReussiteMax : environment.emptyForExport,
        }];
    }


    get sections(): Array<SectionDto> {
        return this.quizService.sections;
    }

    set sections(value: Array<SectionDto>) {
        this.quizService.sections = value;
    }
}
