import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EtatCoursService} from 'src/app/controller/service/EtatCours.service';
import {EtatCoursDto} from 'src/app/controller/model/EtatCours.model';
import {EtatCoursCriteria} from 'src/app/controller/criteria/EtatCoursCriteria.model';
@Component({
  selector: 'app-etat-cours-create-admin',
  templateUrl: './etat-cours-create-admin.component.html'
})
export class EtatCoursCreateAdminComponent extends AbstractCreateController<EtatCoursDto, EtatCoursCriteria, EtatCoursService>  implements OnInit {



   private _validEtatCoursCode = true;
   private _validEtatCoursLibelle = true;

    constructor( private etatCoursService: EtatCoursService ) {
        super(etatCoursService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validEtatCoursCode = value;
        this.validEtatCoursLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatCoursCode();
        this.validateEtatCoursLibelle();
    }

    public validateEtatCoursCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validEtatCoursCode = false;
        } else {
            this.validEtatCoursCode = true;
        }
    }
    public validateEtatCoursLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validEtatCoursLibelle = false;
        } else {
            this.validEtatCoursLibelle = true;
        }
    }






    get validEtatCoursCode(): boolean {
        return this._validEtatCoursCode;
    }

    set validEtatCoursCode(value: boolean) {
         this._validEtatCoursCode = value;
    }
    get validEtatCoursLibelle(): boolean {
        return this._validEtatCoursLibelle;
    }

    set validEtatCoursLibelle(value: boolean) {
         this._validEtatCoursLibelle = value;
    }



}
