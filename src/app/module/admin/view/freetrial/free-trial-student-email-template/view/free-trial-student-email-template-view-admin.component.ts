import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FreeTrialStudentEmailTemplateService} from 'src/app/controller/service/FreeTrialStudentEmailTemplate.service';
import {FreeTrialStudentEmailTemplateDto} from 'src/app/controller/model/FreeTrialStudentEmailTemplate.model';
import {FreeTrialStudentEmailTemplateCriteria} from 'src/app/controller/criteria/FreeTrialStudentEmailTemplateCriteria.model';

@Component({
  selector: 'app-free-trial-student-email-template-view-admin',
  templateUrl: './free-trial-student-email-template-view-admin.component.html'
})
export class FreeTrialStudentEmailTemplateViewAdminComponent extends AbstractViewController<FreeTrialStudentEmailTemplateDto, FreeTrialStudentEmailTemplateCriteria, FreeTrialStudentEmailTemplateService> implements OnInit {


    constructor(private freeTrialStudentEmailTemplateService: FreeTrialStudentEmailTemplateService){
        super(freeTrialStudentEmailTemplateService);
    }

    ngOnInit(): void {
    }




}
