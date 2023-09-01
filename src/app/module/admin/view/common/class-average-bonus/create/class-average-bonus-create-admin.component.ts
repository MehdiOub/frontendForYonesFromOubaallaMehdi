import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ClassAverageBonusService} from 'src/app/controller/service/ClassAverageBonus.service';
import {ClassAverageBonusDto} from 'src/app/controller/model/ClassAverageBonus.model';
import {ClassAverageBonusCriteria} from 'src/app/controller/criteria/ClassAverageBonusCriteria.model';
@Component({
  selector: 'app-class-average-bonus-create-admin',
  templateUrl: './class-average-bonus-create-admin.component.html'
})
export class ClassAverageBonusCreateAdminComponent extends AbstractCreateController<ClassAverageBonusDto, ClassAverageBonusCriteria, ClassAverageBonusService>  implements OnInit {



   private _validClassAverageBonusCode = true;

    constructor( private classAverageBonusService: ClassAverageBonusService ) {
        super(classAverageBonusService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validClassAverageBonusCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateClassAverageBonusCode();
    }

    public validateClassAverageBonusCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validClassAverageBonusCode = false;
        } else {
            this.validClassAverageBonusCode = true;
        }
    }






    get validClassAverageBonusCode(): boolean {
        return this._validClassAverageBonusCode;
    }

    set validClassAverageBonusCode(value: boolean) {
         this._validClassAverageBonusCode = value;
    }



}
