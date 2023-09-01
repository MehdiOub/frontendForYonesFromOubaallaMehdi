import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FreeTrialConfigurationService} from 'src/app/controller/service/FreeTrialConfiguration.service';
import {FreeTrialConfigurationDto} from 'src/app/controller/model/FreeTrialConfiguration.model';
import {FreeTrialConfigurationCriteria} from 'src/app/controller/criteria/FreeTrialConfigurationCriteria.model';
@Component({
  selector: 'app-free-trial-configuration-create-admin',
  templateUrl: './free-trial-configuration-create-admin.component.html'
})
export class FreeTrialConfigurationCreateAdminComponent extends AbstractCreateController<FreeTrialConfigurationDto, FreeTrialConfigurationCriteria, FreeTrialConfigurationService>  implements OnInit {




    constructor( private freeTrialConfigurationService: FreeTrialConfigurationService ) {
        super(freeTrialConfigurationService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
