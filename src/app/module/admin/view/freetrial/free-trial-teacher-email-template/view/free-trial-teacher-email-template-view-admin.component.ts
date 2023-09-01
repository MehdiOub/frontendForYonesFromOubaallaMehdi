import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FreeTrialTeacherEmailTemplateService} from 'src/app/controller/service/FreeTrialTeacherEmailTemplate.service';
import {FreeTrialTeacherEmailTemplateDto} from 'src/app/controller/model/FreeTrialTeacherEmailTemplate.model';
import {FreeTrialTeacherEmailTemplateCriteria} from 'src/app/controller/criteria/FreeTrialTeacherEmailTemplateCriteria.model';

@Component({
  selector: 'app-free-trial-teacher-email-template-view-admin',
  templateUrl: './free-trial-teacher-email-template-view-admin.component.html'
})
export class FreeTrialTeacherEmailTemplateViewAdminComponent extends AbstractViewController<FreeTrialTeacherEmailTemplateDto, FreeTrialTeacherEmailTemplateCriteria, FreeTrialTeacherEmailTemplateService> implements OnInit {


    constructor(private freeTrialTeacherEmailTemplateService: FreeTrialTeacherEmailTemplateService){
        super(freeTrialTeacherEmailTemplateService);
    }

    ngOnInit(): void {
    }




}
