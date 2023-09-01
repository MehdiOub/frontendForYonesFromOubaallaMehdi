import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FreeTrialStudentEmailTemplateService} from 'src/app/controller/service/FreeTrialStudentEmailTemplate.service';
import {FreeTrialStudentEmailTemplateDto} from 'src/app/controller/model/FreeTrialStudentEmailTemplate.model';
import {FreeTrialStudentEmailTemplateCriteria} from 'src/app/controller/criteria/FreeTrialStudentEmailTemplateCriteria.model';
@Component({
  selector: 'app-free-trial-student-email-template-create-admin',
  templateUrl: './free-trial-student-email-template-create-admin.component.html'
})
export class FreeTrialStudentEmailTemplateCreateAdminComponent extends AbstractCreateController<FreeTrialStudentEmailTemplateDto, FreeTrialStudentEmailTemplateCriteria, FreeTrialStudentEmailTemplateService>  implements OnInit {




    constructor( private freeTrialStudentEmailTemplateService: FreeTrialStudentEmailTemplateService ) {
        super(freeTrialStudentEmailTemplateService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
