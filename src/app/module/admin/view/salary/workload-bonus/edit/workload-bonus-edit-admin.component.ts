import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {WorkloadBonusService} from 'src/app/controller/service/WorkloadBonus.service';
import {WorkloadBonusDto} from 'src/app/controller/model/WorkloadBonus.model';
import {WorkloadBonusCriteria} from 'src/app/controller/criteria/WorkloadBonusCriteria.model';



@Component({
  selector: 'app-workload-bonus-edit-admin',
  templateUrl: './workload-bonus-edit-admin.component.html'
})
export class WorkloadBonusEditAdminComponent extends AbstractEditController<WorkloadBonusDto, WorkloadBonusCriteria, WorkloadBonusService>   implements OnInit {


    private _validWorkloadBonusCode = true;




    constructor( private workloadBonusService: WorkloadBonusService ) {
        super(workloadBonusService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validWorkloadBonusCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateWorkloadBonusCode();
    }
    public validateWorkloadBonusCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validWorkloadBonusCode = false;
        } else {
            this.validWorkloadBonusCode = true;
        }
    }






    get validWorkloadBonusCode(): boolean {
        return this._validWorkloadBonusCode;
    }
    set validWorkloadBonusCode(value: boolean) {
        this._validWorkloadBonusCode = value;
    }

}
