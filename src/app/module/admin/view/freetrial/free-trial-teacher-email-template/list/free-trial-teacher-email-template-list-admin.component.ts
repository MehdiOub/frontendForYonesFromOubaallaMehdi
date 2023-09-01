import {Component, OnInit} from '@angular/core';
import {FreeTrialTeacherEmailTemplateService} from 'src/app/controller/service/FreeTrialTeacherEmailTemplate.service';
import {FreeTrialTeacherEmailTemplateDto} from 'src/app/controller/model/FreeTrialTeacherEmailTemplate.model';
import {FreeTrialTeacherEmailTemplateCriteria} from 'src/app/controller/criteria/FreeTrialTeacherEmailTemplateCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-free-trial-teacher-email-template-list-admin',
  templateUrl: './free-trial-teacher-email-template-list-admin.component.html'
})
export class FreeTrialTeacherEmailTemplateListAdminComponent extends AbstractListController<FreeTrialTeacherEmailTemplateDto, FreeTrialTeacherEmailTemplateCriteria, FreeTrialTeacherEmailTemplateService>  implements OnInit {

    fileName = 'FreeTrialTeacherEmailTemplate';


constructor( private freeTrialTeacherEmailTemplateService: FreeTrialTeacherEmailTemplateService ) {
        super(freeTrialTeacherEmailTemplateService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadFreeTrialTeacherEmailTemplates(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrialTeacherEmailTemplate', 'list');
        isPermistted ? this.service.findAll().subscribe(freeTrialTeacherEmailTemplates => this.items = freeTrialTeacherEmailTemplates,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'object', header: 'Object'},
            {field: 'source', header: 'Source'},
        ];
    }



	public initDuplicate(res: FreeTrialTeacherEmailTemplateDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Object': e.object ,
                 'Corps': e.corps ,
                 'Source': e.source ,
            }
        });

        this.criteriaData = [{
            'Object': this.criteria.object ? this.criteria.object : environment.emptyForExport ,
            'Corps': this.criteria.corps ? this.criteria.corps : environment.emptyForExport ,
            'Source': this.criteria.source ? this.criteria.source : environment.emptyForExport ,
        }];
      }
}
