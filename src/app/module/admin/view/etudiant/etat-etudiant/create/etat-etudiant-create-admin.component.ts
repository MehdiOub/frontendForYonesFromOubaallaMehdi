import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EtatEtudiantService} from 'src/app/controller/service/EtatEtudiant.service';
import {EtatEtudiantDto} from 'src/app/controller/model/EtatEtudiant.model';
import {EtatEtudiantCriteria} from 'src/app/controller/criteria/EtatEtudiantCriteria.model';
@Component({
  selector: 'app-etat-etudiant-create-admin',
  templateUrl: './etat-etudiant-create-admin.component.html'
})
export class EtatEtudiantCreateAdminComponent extends AbstractCreateController<EtatEtudiantDto, EtatEtudiantCriteria, EtatEtudiantService>  implements OnInit {



   private _validEtatEtudiantReference = true;

    constructor( private etatEtudiantService: EtatEtudiantService ) {
        super(etatEtudiantService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validEtatEtudiantReference = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatEtudiantReference();
    }

    public validateEtatEtudiantReference(){
        if (this.stringUtilService.isEmpty(this.item.reference)) {
        this.errorMessages.push('Reference non valide');
        this.validEtatEtudiantReference = false;
        } else {
            this.validEtatEtudiantReference = true;
        }
    }






    get validEtatEtudiantReference(): boolean {
        return this._validEtatEtudiantReference;
    }

    set validEtatEtudiantReference(value: boolean) {
         this._validEtatEtudiantReference = value;
    }



}
