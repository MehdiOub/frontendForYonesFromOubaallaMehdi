import {Component, OnInit} from '@angular/core';
import {FreeTrialStudentEmailTemplateService} from 'src/app/controller/service/FreeTrialStudentEmailTemplate.service';
import {FreeTrialStudentEmailTemplateDto} from 'src/app/controller/model/FreeTrialStudentEmailTemplate.model';
import {FreeTrialStudentEmailTemplateCriteria} from 'src/app/controller/criteria/FreeTrialStudentEmailTemplateCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-free-trial-student-email-template-list-admin',
  templateUrl: './free-trial-student-email-template-list-admin.component.html'
})
export class FreeTrialStudentEmailTemplateListAdminComponent extends AbstractListController<FreeTrialStudentEmailTemplateDto, FreeTrialStudentEmailTemplateCriteria, FreeTrialStudentEmailTemplateService>  implements OnInit {

    fileName = 'FreeTrialStudentEmailTemplate';


constructor( private freeTrialStudentEmailTemplateService: FreeTrialStudentEmailTemplateService ) {
        super(freeTrialStudentEmailTemplateService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadFreeTrialStudentEmailTemplates(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrialStudentEmailTemplate', 'list');
        isPermistted ? this.service.findAll().subscribe(freeTrialStudentEmailTemplates => this.items = freeTrialStudentEmailTemplates,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'object', header: 'Object'},
            {field: 'source', header: 'Source'},
        ];
    }



	public initDuplicate(res: FreeTrialStudentEmailTemplateDto) {
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
