import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {CategorieSectionService} from 'src/app/controller/service/CategorieSection.service';
import {CategorieSectionDto} from 'src/app/controller/model/CategorieSection.model';
import {CategorieSectionCriteria} from 'src/app/controller/criteria/CategorieSectionCriteria.model';
import {SuperCategorieSectionDto} from 'src/app/controller/model/SuperCategorieSection.model';
import {SuperCategorieSectionService} from 'src/app/controller/service/SuperCategorieSection.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
import {SectionItemDto} from 'src/app/controller/model/SectionItem.model';
import {SectionItemService} from 'src/app/controller/service/SectionItem.service';
import {SessionCoursDto} from 'src/app/controller/model/SessionCours.model';
import {SessionCoursService} from 'src/app/controller/service/SessionCours.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursService} from 'src/app/controller/service/Cours.service';
@Component({
  selector: 'app-categorie-section-create-admin',
  templateUrl: './categorie-section-create-admin.component.html'
})
export class CategorieSectionCreateAdminComponent extends AbstractCreateController<CategorieSectionDto, CategorieSectionCriteria, CategorieSectionService>  implements OnInit {

    private _sectionsElement = new SectionDto();


   private _validCategorieSectionCode = true;
    private _validSuperCategorieSectionCode = true;
    private _validSuperCategorieSectionLibelle = true;
    private _validSectionsCode = true;

    constructor( private categorieSectionService: CategorieSectionService , private superCategorieSectionService: SuperCategorieSectionService, private sessionCoursService: SessionCoursService, private coursService: CoursService, private sectionService: SectionService) {
        super(categorieSectionService);
    }

    ngOnInit(): void {
        this.sectionsElement.cours = new CoursDto();
        this.coursService.findAll().subscribe((data) => this.courss = data);
        this.sectionsElement.sessionCours = new SessionCoursDto();
        this.sessionCoursService.findAll().subscribe((data) => this.sessionCourss = data);
    this.superCategorieSection = new SuperCategorieSectionDto();
    this.superCategorieSectionService.findAll().subscribe((data) => this.superCategorieSections = data);
}



    validateSections(){
        this.errorMessages = new Array();
        this.validateSectionsCode();
    }


    public setValidation(value: boolean){
        this.validCategorieSectionCode = value;
        this.validSectionsCode = value;
    }

    public addSections() {
        if( this.item.sections == null )
            this.item.sections = new Array<SectionDto>();
       this.validateSections();
       if (this.errorMessages.length === 0) {
              this.item.sections.push({... this.sectionsElement});
              this.sectionsElement = new SectionDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deletesections(p: SectionDto) {
        this.item.sections.forEach((element, index) => {
            if (element === p) { this.item.sections.splice(index, 1); }
        });
    }

    public editsections(p: SectionDto) {
        this.sectionsElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateCategorieSectionCode();
    }

    public validateCategorieSectionCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validCategorieSectionCode = false;
        } else {
            this.validCategorieSectionCode = true;
        }
    }

    public validateSectionsCode(){
        if (this.sectionsElement.code == null) {
            this.errorMessages.push('Code de la section est  invalide');
            this.validSectionsCode = false;
        } else {
            this.validSectionsCode = true;
        }
    }

    public async openCreateSuperCategorieSection(superCategorieSection: string) {
    const isPermistted = await this.roleService.isPermitted('SuperCategorieSection', 'add');
    if(isPermistted) {
         this.superCategorieSection = new SuperCategorieSectionDto();
         this.createSuperCategorieSectionDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get superCategorieSection(): SuperCategorieSectionDto {
        return this.superCategorieSectionService.item;
    }
    set superCategorieSection(value: SuperCategorieSectionDto) {
        this.superCategorieSectionService.item = value;
    }
    get superCategorieSections(): Array<SuperCategorieSectionDto> {
        return this.superCategorieSectionService.items;
    }
    set superCategorieSections(value: Array<SuperCategorieSectionDto>) {
        this.superCategorieSectionService.items = value;
    }
    get createSuperCategorieSectionDialog(): boolean {
       return this.superCategorieSectionService.createDialog;
    }
    set createSuperCategorieSectionDialog(value: boolean) {
        this.superCategorieSectionService.createDialog= value;
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
    get sessionCours(): SessionCoursDto {
        return this.sessionCoursService.item;
    }
    set sessionCours(value: SessionCoursDto) {
        this.sessionCoursService.item = value;
    }
    get sessionCourss(): Array<SessionCoursDto> {
        return this.sessionCoursService.items;
    }
    set sessionCourss(value: Array<SessionCoursDto>) {
        this.sessionCoursService.items = value;
    }
    get createSessionCoursDialog(): boolean {
       return this.sessionCoursService.createDialog;
    }
    set createSessionCoursDialog(value: boolean) {
        this.sessionCoursService.createDialog= value;
    }



    get validCategorieSectionCode(): boolean {
        return this._validCategorieSectionCode;
    }

    set validCategorieSectionCode(value: boolean) {
         this._validCategorieSectionCode = value;
    }

    get validSuperCategorieSectionCode(): boolean {
        return this._validSuperCategorieSectionCode;
    }
    set validSuperCategorieSectionCode(value: boolean) {
        this._validSuperCategorieSectionCode = value;
    }
    get validSuperCategorieSectionLibelle(): boolean {
        return this._validSuperCategorieSectionLibelle;
    }
    set validSuperCategorieSectionLibelle(value: boolean) {
        this._validSuperCategorieSectionLibelle = value;
    }
    get validSectionsCode(): boolean {
        return this._validSectionsCode;
    }
    set validSectionsCode(value: boolean) {
        this._validSectionsCode = value;
    }

    get sectionsElement(): SectionDto {
        if( this._sectionsElement == null )
            this._sectionsElement = new SectionDto();
        return this._sectionsElement;
    }

    set sectionsElement(value: SectionDto) {
        this._sectionsElement = value;
    }

}
