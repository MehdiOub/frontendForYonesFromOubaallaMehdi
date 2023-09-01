import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {SuperCategorieSectionService} from 'src/app/controller/service/SuperCategorieSection.service';
import {SuperCategorieSectionDto} from 'src/app/controller/model/SuperCategorieSection.model';
import {SuperCategorieSectionCriteria} from 'src/app/controller/criteria/SuperCategorieSectionCriteria.model';
import {CategorieSectionDto} from 'src/app/controller/model/CategorieSection.model';
import {CategorieSectionService} from 'src/app/controller/service/CategorieSection.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
@Component({
  selector: 'app-super-categorie-section-create-admin',
  templateUrl: './super-categorie-section-create-admin.component.html'
})
export class SuperCategorieSectionCreateAdminComponent extends AbstractCreateController<SuperCategorieSectionDto, SuperCategorieSectionCriteria, SuperCategorieSectionService>  implements OnInit {

    private _categorieSectionsElement = new CategorieSectionDto();


   private _validSuperCategorieSectionCode = true;
   private _validSuperCategorieSectionLibelle = true;
    private _validCategorieSectionsCode = true;

    constructor( private superCategorieSectionService: SuperCategorieSectionService , private categorieSectionService: CategorieSectionService) {
        super(superCategorieSectionService);
    }

    ngOnInit(): void {
}



    validateCategorieSections(){
        this.errorMessages = new Array();
        this.validateCategorieSectionsCode();
    }


    public setValidation(value: boolean){
        this.validSuperCategorieSectionCode = value;
        this.validSuperCategorieSectionLibelle = value;
        this.validCategorieSectionsCode = value;
    }

    public addCategorieSections() {
        if( this.item.categorieSections == null )
            this.item.categorieSections = new Array<CategorieSectionDto>();
       this.validateCategorieSections();
       if (this.errorMessages.length === 0) {
              this.item.categorieSections.push({... this.categorieSectionsElement});
              this.categorieSectionsElement = new CategorieSectionDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs',detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
       }
    }


    public deletecategorieSections(p: CategorieSectionDto) {
        this.item.categorieSections.forEach((element, index) => {
            if (element === p) { this.item.categorieSections.splice(index, 1); }
        });
    }

    public editcategorieSections(p: CategorieSectionDto) {
        this.categorieSectionsElement = {... p};
        this.activeTab = 0;
    }


    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSuperCategorieSectionCode();
        this.validateSuperCategorieSectionLibelle();
    }

    public validateSuperCategorieSectionCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validSuperCategorieSectionCode = false;
        } else {
            this.validSuperCategorieSectionCode = true;
        }
    }
    public validateSuperCategorieSectionLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validSuperCategorieSectionLibelle = false;
        } else {
            this.validSuperCategorieSectionLibelle = true;
        }
    }

    public validateCategorieSectionsCode(){
        if (this.categorieSectionsElement.code == null) {
            this.errorMessages.push('Code de la categorieSection est  invalide');
            this.validCategorieSectionsCode = false;
        } else {
            this.validCategorieSectionsCode = true;
        }
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

    get validCategorieSectionsCode(): boolean {
        return this._validCategorieSectionsCode;
    }
    set validCategorieSectionsCode(value: boolean) {
        this._validCategorieSectionsCode = value;
    }

    get categorieSectionsElement(): CategorieSectionDto {
        if( this._categorieSectionsElement == null )
            this._categorieSectionsElement = new CategorieSectionDto();
        return this._categorieSectionsElement;
    }

    set categorieSectionsElement(value: CategorieSectionDto) {
        this._categorieSectionsElement = value;
    }

}
