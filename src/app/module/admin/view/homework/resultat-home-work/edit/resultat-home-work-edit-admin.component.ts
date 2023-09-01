import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ResultatHomeWorkService} from 'src/app/controller/service/ResultatHomeWork.service';
import {ResultatHomeWorkDto} from 'src/app/controller/model/ResultatHomeWork.model';
import {ResultatHomeWorkCriteria} from 'src/app/controller/criteria/ResultatHomeWorkCriteria.model';



@Component({
  selector: 'app-resultat-home-work-edit-admin',
  templateUrl: './resultat-home-work-edit-admin.component.html'
})
export class ResultatHomeWorkEditAdminComponent extends AbstractEditController<ResultatHomeWorkDto, ResultatHomeWorkCriteria, ResultatHomeWorkService>   implements OnInit {


    private _validResultatHomeWorkLibelle = true;
    private _validResultatHomeWorkCode = true;




    constructor( private resultatHomeWorkService: ResultatHomeWorkService ) {
        super(resultatHomeWorkService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validResultatHomeWorkLibelle = value;
        this.validResultatHomeWorkCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateResultatHomeWorkLibelle();
        this.validateResultatHomeWorkCode();
    }
    public validateResultatHomeWorkLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validResultatHomeWorkLibelle = false;
        } else {
            this.validResultatHomeWorkLibelle = true;
        }
    }
    public validateResultatHomeWorkCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validResultatHomeWorkCode = false;
        } else {
            this.validResultatHomeWorkCode = true;
        }
    }






    get validResultatHomeWorkLibelle(): boolean {
        return this._validResultatHomeWorkLibelle;
    }
    set validResultatHomeWorkLibelle(value: boolean) {
        this._validResultatHomeWorkLibelle = value;
    }
    get validResultatHomeWorkCode(): boolean {
        return this._validResultatHomeWorkCode;
    }
    set validResultatHomeWorkCode(value: boolean) {
        this._validResultatHomeWorkCode = value;
    }

}
