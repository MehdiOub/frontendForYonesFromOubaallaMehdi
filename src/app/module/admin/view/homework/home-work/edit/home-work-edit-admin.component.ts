import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {HomeWorkService} from 'src/app/controller/service/HomeWork.service';
import {HomeWorkDto} from 'src/app/controller/model/HomeWork.model';
import {HomeWorkCriteria} from 'src/app/controller/criteria/HomeWorkCriteria.model';


import {TypeDeQuestionDto} from 'src/app/controller/model/TypeDeQuestion.model';
import {TypeDeQuestionService} from 'src/app/controller/service/TypeDeQuestion.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {ResultatHomeWorkDto} from 'src/app/controller/model/ResultatHomeWork.model';
import {ResultatHomeWorkService} from 'src/app/controller/service/ResultatHomeWork.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursService} from 'src/app/controller/service/Cours.service';
import {HoweWorkQSTReponseDto} from 'src/app/controller/model/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseService} from 'src/app/controller/service/HoweWorkQSTReponse.service';
import {ReponseEtudiantHomeWorkDto} from 'src/app/controller/model/ReponseEtudiantHomeWork.model';
import {ReponseEtudiantHomeWorkService} from 'src/app/controller/service/ReponseEtudiantHomeWork.service';
import {HomeWorkQuestionDto} from 'src/app/controller/model/HomeWorkQuestion.model';
import {HomeWorkQuestionService} from 'src/app/controller/service/HomeWorkQuestion.service';
import {HomeWorkEtudiantDto} from 'src/app/controller/model/HomeWorkEtudiant.model';
import {HomeWorkEtudiantService} from 'src/app/controller/service/HomeWorkEtudiant.service';
import {TypeHomeWorkDto} from 'src/app/controller/model/TypeHomeWork.model';
import {TypeHomeWorkService} from 'src/app/controller/service/TypeHomeWork.service';

@Component({
  selector: 'app-home-work-edit-admin',
  templateUrl: './home-work-edit-admin.component.html'
})
export class HomeWorkEditAdminComponent extends AbstractEditController<HomeWorkDto, HomeWorkCriteria, HomeWorkService>   implements OnInit {

    private _homeWorkQuestionsElement = new HomeWorkQuestionDto();
    private _homeWorkEtudiantsElement = new HomeWorkEtudiantDto();

    private _validHomeWorkLibelle = true;

    private _validHomeWorkQuestionsRef = true;
    private _validHomeWorkQuestionsLibelle = true;
    private _validCoursCode = true;
    private _validCoursLibelle = true;
    private _validTypeHomeWorkCode = true;
    private _validTypeHomeWorkLib = true;



    constructor( private homeWorkService: HomeWorkService , private typeDeQuestionService: TypeDeQuestionService, private resultatHomeWorkService: ResultatHomeWorkService, private coursService: CoursService, private homeWorkQuestionService: HomeWorkQuestionService, private etudiantService: EtudiantService, private homeWorkEtudiantService: HomeWorkEtudiantService, private typeHomeWorkService: TypeHomeWorkService) {
        super(homeWorkService);
    }

    ngOnInit(): void {
        this.homeWorkQuestionsElement.typeDeQuestion = new TypeDeQuestionDto();
        this.typeDeQuestionService.findAll().subscribe((data) => this.typeDeQuestions = data);

        this.homeWorkEtudiantsElement.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
        this.homeWorkEtudiantsElement.resultatHomeWork = new ResultatHomeWorkDto();
        this.resultatHomeWorkService.findAll().subscribe((data) => this.resultatHomeWorks = data);

    this.cours = new CoursDto();
    this.coursService.findAll().subscribe((data) => this.courss = data);
    this.typeHomeWork = new TypeHomeWorkDto();
    this.typeHomeWorkService.findAll().subscribe((data) => this.typeHomeWorks = data);
}


    public validateHomeWorkQuestions(){
        this.errorMessages = new Array();
        this.validateHomeWorkQuestionsRef();
        this.validateHomeWorkQuestionsLibelle();
    }
    public validateHomeWorkEtudiants(){
        this.errorMessages = new Array();
    }
    public setValidation(value : boolean){
        this.validHomeWorkLibelle = value;
        this.validHomeWorkQuestionsRef = value;
        this.validHomeWorkQuestionsLibelle = value;
        }
   public addHomeWorkQuestions() {
        if( this.item.homeWorkQuestions == null )
            this.item.homeWorkQuestions = new Array<HomeWorkQuestionDto>();
       this.validateHomeWorkQuestions();
       if (this.errorMessages.length === 0) {
            if(this.homeWorkQuestionsElement.id == null){
                this.item.homeWorkQuestions.push(this.homeWorkQuestionsElement);
            }else{
                const index = this.item.homeWorkQuestions.findIndex(e => e.id == this.homeWorkQuestionsElement.id);
                this.item.homeWorkQuestions[index] = this.homeWorkQuestionsElement;
            }
          this.homeWorkQuestionsElement = new HomeWorkQuestionDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteHomeWorkQuestions(p: HomeWorkQuestionDto) {
        this.item.homeWorkQuestions.forEach((element, index) => {
            if (element === p) { this.item.homeWorkQuestions.splice(index, 1); }
        });
    }

    public editHomeWorkQuestions(p: HomeWorkQuestionDto) {
        this.homeWorkQuestionsElement = {... p};
        this.activeTab = 0;
    }
   public addHomeWorkEtudiants() {
        if( this.item.homeWorkEtudiants == null )
            this.item.homeWorkEtudiants = new Array<HomeWorkEtudiantDto>();
       this.validateHomeWorkEtudiants();
       if (this.errorMessages.length === 0) {
            if(this.homeWorkEtudiantsElement.id == null){
                this.item.homeWorkEtudiants.push(this.homeWorkEtudiantsElement);
            }else{
                const index = this.item.homeWorkEtudiants.findIndex(e => e.id == this.homeWorkEtudiantsElement.id);
                this.item.homeWorkEtudiants[index] = this.homeWorkEtudiantsElement;
            }
          this.homeWorkEtudiantsElement = new HomeWorkEtudiantDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteHomeWorkEtudiants(p: HomeWorkEtudiantDto) {
        this.item.homeWorkEtudiants.forEach((element, index) => {
            if (element === p) { this.item.homeWorkEtudiants.splice(index, 1); }
        });
    }

    public editHomeWorkEtudiants(p: HomeWorkEtudiantDto) {
        this.homeWorkEtudiantsElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateHomeWorkLibelle();
    }
    public validateHomeWorkLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validHomeWorkLibelle = false;
        } else {
            this.validHomeWorkLibelle = true;
        }
    }


    private validateHomeWorkQuestionsRef(){
        if (this.homeWorkQuestionsElement.ref == null) {
        this.errorMessages.push('Ref de la homeWorkQuestion est  invalide');
            this.validHomeWorkQuestionsRef = false;
        } else {
            this.validHomeWorkQuestionsRef = true;
        }
    }
    private validateHomeWorkQuestionsLibelle(){
        if (this.homeWorkQuestionsElement.libelle == null) {
        this.errorMessages.push('Libelle de la homeWorkQuestion est  invalide');
            this.validHomeWorkQuestionsLibelle = false;
        } else {
            this.validHomeWorkQuestionsLibelle = true;
        }
    }

   public async openCreateTypeHomeWork(typeHomeWork: string) {
        const isPermistted = await this.roleService.isPermitted('TypeHomeWork', 'edit');
        if(isPermistted) {
             this.typeHomeWork = new TypeHomeWorkDto();
             this.createTypeHomeWorkDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }
   public async openCreateResultatHomeWork(resultatHomeWork: string) {
        const isPermistted = await this.roleService.isPermitted('ResultatHomeWork', 'edit');
        if(isPermistted) {
             this.resultatHomeWork = new ResultatHomeWorkDto();
             this.createResultatHomeWorkDialog = true;
        }else{
             this.messageService.add({
                severity: 'error', summary: 'erreur', detail: 'problème de permission'
            });
        }
    }

   get typeHomeWork(): TypeHomeWorkDto {
       return this.typeHomeWorkService.item;
   }
  set typeHomeWork(value: TypeHomeWorkDto) {
        this.typeHomeWorkService.item = value;
   }
   get typeHomeWorks(): Array<TypeHomeWorkDto> {
        return this.typeHomeWorkService.items;
   }
   set typeHomeWorks(value: Array<TypeHomeWorkDto>) {
        this.typeHomeWorkService.items = value;
   }
   get createTypeHomeWorkDialog(): boolean {
       return this.typeHomeWorkService.createDialog;
   }
  set createTypeHomeWorkDialog(value: boolean) {
       this.typeHomeWorkService.createDialog= value;
   }
   get cours(): CoursDto {
       return this.coursService.item;
   }
  set cours(value: CoursDto) {
        this.coursService.item = value;
   }
   get courss(): Array<CoursDto> {
        return this.coursService.items;
   }
   set courss(value: Array<CoursDto>) {
        this.coursService.items = value;
   }
   get createCoursDialog(): boolean {
       return this.coursService.createDialog;
   }
  set createCoursDialog(value: boolean) {
       this.coursService.createDialog= value;
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
   get resultatHomeWork(): ResultatHomeWorkDto {
       return this.resultatHomeWorkService.item;
   }
  set resultatHomeWork(value: ResultatHomeWorkDto) {
        this.resultatHomeWorkService.item = value;
   }
   get resultatHomeWorks(): Array<ResultatHomeWorkDto> {
        return this.resultatHomeWorkService.items;
   }
   set resultatHomeWorks(value: Array<ResultatHomeWorkDto>) {
        this.resultatHomeWorkService.items = value;
   }
   get createResultatHomeWorkDialog(): boolean {
       return this.resultatHomeWorkService.createDialog;
   }
  set createResultatHomeWorkDialog(value: boolean) {
       this.resultatHomeWorkService.createDialog= value;
   }
   get typeDeQuestion(): TypeDeQuestionDto {
       return this.typeDeQuestionService.item;
   }
  set typeDeQuestion(value: TypeDeQuestionDto) {
        this.typeDeQuestionService.item = value;
   }
   get typeDeQuestions(): Array<TypeDeQuestionDto> {
        return this.typeDeQuestionService.items;
   }
   set typeDeQuestions(value: Array<TypeDeQuestionDto>) {
        this.typeDeQuestionService.items = value;
   }
   get createTypeDeQuestionDialog(): boolean {
       return this.typeDeQuestionService.createDialog;
   }
  set createTypeDeQuestionDialog(value: boolean) {
       this.typeDeQuestionService.createDialog= value;
   }

    get homeWorkQuestionsElement(): HomeWorkQuestionDto {
        if( this._homeWorkQuestionsElement == null )
            this._homeWorkQuestionsElement = new HomeWorkQuestionDto();
         return this._homeWorkQuestionsElement;
    }

    set homeWorkQuestionsElement(value: HomeWorkQuestionDto) {
        this._homeWorkQuestionsElement = value;
    }
    get homeWorkEtudiantsElement(): HomeWorkEtudiantDto {
        if( this._homeWorkEtudiantsElement == null )
            this._homeWorkEtudiantsElement = new HomeWorkEtudiantDto();
         return this._homeWorkEtudiantsElement;
    }

    set homeWorkEtudiantsElement(value: HomeWorkEtudiantDto) {
        this._homeWorkEtudiantsElement = value;
    }

    get validHomeWorkLibelle(): boolean {
        return this._validHomeWorkLibelle;
    }
    set validHomeWorkLibelle(value: boolean) {
        this._validHomeWorkLibelle = value;
    }

    get validHomeWorkQuestionsRef(): boolean {
        return this._validHomeWorkQuestionsRef;
    }
    set validHomeWorkQuestionsRef(value: boolean) {
        this._validHomeWorkQuestionsRef = value;
    }
    get validHomeWorkQuestionsLibelle(): boolean {
        return this._validHomeWorkQuestionsLibelle;
    }
    set validHomeWorkQuestionsLibelle(value: boolean) {
        this._validHomeWorkQuestionsLibelle = value;
    }
    get validCoursCode(): boolean {
        return this._validCoursCode;
    }
    set validCoursCode(value: boolean) {
        this._validCoursCode = value;
    }
    get validCoursLibelle(): boolean {
        return this._validCoursLibelle;
    }
    set validCoursLibelle(value: boolean) {
        this._validCoursLibelle = value;
    }
    get validTypeHomeWorkCode(): boolean {
        return this._validTypeHomeWorkCode;
    }
    set validTypeHomeWorkCode(value: boolean) {
        this._validTypeHomeWorkCode = value;
    }
    get validTypeHomeWorkLib(): boolean {
        return this._validTypeHomeWorkLib;
    }
    set validTypeHomeWorkLib(value: boolean) {
        this._validTypeHomeWorkLib = value;
    }
}
