import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {EtatEtudiantScheduleService} from 'src/app/controller/service/EtatEtudiantSchedule.service';
import {EtatEtudiantScheduleDto} from 'src/app/controller/model/EtatEtudiantSchedule.model';
import {EtatEtudiantScheduleCriteria} from 'src/app/controller/criteria/EtatEtudiantScheduleCriteria.model';
@Component({
  selector: 'app-etat-etudiant-schedule-create-admin',
  templateUrl: './etat-etudiant-schedule-create-admin.component.html'
})
export class EtatEtudiantScheduleCreateAdminComponent extends AbstractCreateController<EtatEtudiantScheduleDto, EtatEtudiantScheduleCriteria, EtatEtudiantScheduleService>  implements OnInit {



   private _validEtatEtudiantScheduleRef = true;

    constructor( private etatEtudiantScheduleService: EtatEtudiantScheduleService ) {
        super(etatEtudiantScheduleService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validEtatEtudiantScheduleRef = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateEtatEtudiantScheduleRef();
    }

    public validateEtatEtudiantScheduleRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validEtatEtudiantScheduleRef = false;
        } else {
            this.validEtatEtudiantScheduleRef = true;
        }
    }






    get validEtatEtudiantScheduleRef(): boolean {
        return this._validEtatEtudiantScheduleRef;
    }

    set validEtatEtudiantScheduleRef(value: boolean) {
         this._validEtatEtudiantScheduleRef = value;
    }



}
