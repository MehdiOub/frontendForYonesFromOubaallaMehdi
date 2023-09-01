import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {FreeTrialformuleService} from 'src/app/controller/service/FreeTrialformule.service';
import {FreeTrialformuleDto} from 'src/app/controller/model/FreeTrialformule.model';
import {FreeTrialformuleCriteria} from 'src/app/controller/criteria/FreeTrialformuleCriteria.model';


import {InscriptionDto} from 'src/app/controller/model/Inscription.model';
import {InscriptionService} from 'src/app/controller/service/Inscription.service';

@Component({
  selector: 'app-free-trialformule-edit-admin',
  templateUrl: './free-trialformule-edit-admin.component.html'
})
export class FreeTrialformuleEditAdminComponent extends AbstractEditController<FreeTrialformuleDto, FreeTrialformuleCriteria, FreeTrialformuleService>   implements OnInit {


    private _validFreeTrialformuleCode = true;




    constructor( private freeTrialformuleService: FreeTrialformuleService , private inscriptionService: InscriptionService) {
        super(freeTrialformuleService);
    }

    ngOnInit(): void {
    this.inscription = new InscriptionDto();
    this.inscriptionService.findAll().subscribe((data) => this.inscriptions = data);
}
    public prepareEdit() {
        this.item.dateConfirmation = this.freeTrialformuleService.format(this.item.dateConfirmation);
    }



    public setValidation(value : boolean){
        this.validFreeTrialformuleCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFreeTrialformuleCode();
    }
    public validateFreeTrialformuleCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validFreeTrialformuleCode = false;
        } else {
            this.validFreeTrialformuleCode = true;
        }
    }




   get inscription(): InscriptionDto {
       return this.inscriptionService.item;
   }
  set inscription(value: InscriptionDto) {
        this.inscriptionService.item = value;
   }
   get inscriptions(): Array<InscriptionDto> {
        return this.inscriptionService.items;
   }
   set inscriptions(value: Array<InscriptionDto>) {
        this.inscriptionService.items = value;
   }
   get createInscriptionDialog(): boolean {
       return this.inscriptionService.createDialog;
   }
  set createInscriptionDialog(value: boolean) {
       this.inscriptionService.createDialog= value;
   }


    get validFreeTrialformuleCode(): boolean {
        return this._validFreeTrialformuleCode;
    }
    set validFreeTrialformuleCode(value: boolean) {
        this._validFreeTrialformuleCode = value;
    }

}
