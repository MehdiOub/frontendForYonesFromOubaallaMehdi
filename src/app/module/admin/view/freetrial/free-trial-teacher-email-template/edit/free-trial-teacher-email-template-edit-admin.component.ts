import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {FreeTrialTeacherEmailTemplateService} from 'src/app/controller/service/FreeTrialTeacherEmailTemplate.service';
import {FreeTrialTeacherEmailTemplateDto} from 'src/app/controller/model/FreeTrialTeacherEmailTemplate.model';
import {FreeTrialTeacherEmailTemplateCriteria} from 'src/app/controller/criteria/FreeTrialTeacherEmailTemplateCriteria.model';



@Component({
  selector: 'app-free-trial-teacher-email-template-edit-admin',
  templateUrl: './free-trial-teacher-email-template-edit-admin.component.html'
})
export class FreeTrialTeacherEmailTemplateEditAdminComponent extends AbstractEditController<FreeTrialTeacherEmailTemplateDto, FreeTrialTeacherEmailTemplateCriteria, FreeTrialTeacherEmailTemplateService>   implements OnInit {






    constructor( private freeTrialTeacherEmailTemplateService: FreeTrialTeacherEmailTemplateService ) {
        super(freeTrialTeacherEmailTemplateService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
