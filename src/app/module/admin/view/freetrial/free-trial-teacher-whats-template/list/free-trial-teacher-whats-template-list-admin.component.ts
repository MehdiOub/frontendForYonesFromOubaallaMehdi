import {Component, OnInit} from '@angular/core';
import {FreeTrialTeacherWhatsTemplateService} from 'src/app/controller/service/FreeTrialTeacherWhatsTemplate.service';
import {FreeTrialTeacherWhatsTemplateDto} from 'src/app/controller/model/FreeTrialTeacherWhatsTemplate.model';
import {FreeTrialTeacherWhatsTemplateCriteria} from 'src/app/controller/criteria/FreeTrialTeacherWhatsTemplateCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-free-trial-teacher-whats-template-list-admin',
  templateUrl: './free-trial-teacher-whats-template-list-admin.component.html'
})
export class FreeTrialTeacherWhatsTemplateListAdminComponent extends AbstractListController<FreeTrialTeacherWhatsTemplateDto, FreeTrialTeacherWhatsTemplateCriteria, FreeTrialTeacherWhatsTemplateService>  implements OnInit {

    fileName = 'FreeTrialTeacherWhatsTemplate';


constructor( private freeTrialTeacherWhatsTemplateService: FreeTrialTeacherWhatsTemplateService ) {
        super(freeTrialTeacherWhatsTemplateService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadFreeTrialTeacherWhatsTemplates(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrialTeacherWhatsTemplate', 'list');
        isPermistted ? this.service.findAll().subscribe(freeTrialTeacherWhatsTemplates => this.items = freeTrialTeacherWhatsTemplates,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'object', header: 'Object'},
            {field: 'source', header: 'Source'},
        ];
    }



	public initDuplicate(res: FreeTrialTeacherWhatsTemplateDto) {
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
