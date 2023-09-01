import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FreeTrialTeacherEmailTemplateService} from 'src/app/controller/service/FreeTrialTeacherEmailTemplate.service';
import {FreeTrialTeacherEmailTemplateDto} from 'src/app/controller/model/FreeTrialTeacherEmailTemplate.model';
import {FreeTrialTeacherEmailTemplateCriteria} from 'src/app/controller/criteria/FreeTrialTeacherEmailTemplateCriteria.model';
@Component({
  selector: 'app-free-trial-teacher-email-template-create-admin',
  templateUrl: './free-trial-teacher-email-template-create-admin.component.html'
})
export class FreeTrialTeacherEmailTemplateCreateAdminComponent extends AbstractCreateController<FreeTrialTeacherEmailTemplateDto, FreeTrialTeacherEmailTemplateCriteria, FreeTrialTeacherEmailTemplateService>  implements OnInit {




    constructor( private freeTrialTeacherEmailTemplateService: FreeTrialTeacherEmailTemplateService ) {
        super(freeTrialTeacherEmailTemplateService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
