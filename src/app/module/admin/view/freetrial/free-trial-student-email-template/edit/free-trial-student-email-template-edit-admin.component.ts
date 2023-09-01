import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {FreeTrialStudentEmailTemplateService} from 'src/app/controller/service/FreeTrialStudentEmailTemplate.service';
import {FreeTrialStudentEmailTemplateDto} from 'src/app/controller/model/FreeTrialStudentEmailTemplate.model';
import {FreeTrialStudentEmailTemplateCriteria} from 'src/app/controller/criteria/FreeTrialStudentEmailTemplateCriteria.model';



@Component({
  selector: 'app-free-trial-student-email-template-edit-admin',
  templateUrl: './free-trial-student-email-template-edit-admin.component.html'
})
export class FreeTrialStudentEmailTemplateEditAdminComponent extends AbstractEditController<FreeTrialStudentEmailTemplateDto, FreeTrialStudentEmailTemplateCriteria, FreeTrialStudentEmailTemplateService>   implements OnInit {






    constructor( private freeTrialStudentEmailTemplateService: FreeTrialStudentEmailTemplateService ) {
        super(freeTrialStudentEmailTemplateService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
