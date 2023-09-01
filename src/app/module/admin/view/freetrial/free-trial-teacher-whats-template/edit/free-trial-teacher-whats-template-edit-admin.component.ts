import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {FreeTrialTeacherWhatsTemplateService} from 'src/app/controller/service/FreeTrialTeacherWhatsTemplate.service';
import {FreeTrialTeacherWhatsTemplateDto} from 'src/app/controller/model/FreeTrialTeacherWhatsTemplate.model';
import {FreeTrialTeacherWhatsTemplateCriteria} from 'src/app/controller/criteria/FreeTrialTeacherWhatsTemplateCriteria.model';



@Component({
  selector: 'app-free-trial-teacher-whats-template-edit-admin',
  templateUrl: './free-trial-teacher-whats-template-edit-admin.component.html'
})
export class FreeTrialTeacherWhatsTemplateEditAdminComponent extends AbstractEditController<FreeTrialTeacherWhatsTemplateDto, FreeTrialTeacherWhatsTemplateCriteria, FreeTrialTeacherWhatsTemplateService>   implements OnInit {






    constructor( private freeTrialTeacherWhatsTemplateService: FreeTrialTeacherWhatsTemplateService ) {
        super(freeTrialTeacherWhatsTemplateService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
