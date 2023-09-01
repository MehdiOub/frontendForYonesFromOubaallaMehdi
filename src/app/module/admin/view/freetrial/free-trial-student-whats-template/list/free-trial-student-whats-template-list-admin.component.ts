import {Component, OnInit} from '@angular/core';
import {FreeTrialStudentWhatsTemplateService} from 'src/app/controller/service/FreeTrialStudentWhatsTemplate.service';
import {FreeTrialStudentWhatsTemplateDto} from 'src/app/controller/model/FreeTrialStudentWhatsTemplate.model';
import {FreeTrialStudentWhatsTemplateCriteria} from 'src/app/controller/criteria/FreeTrialStudentWhatsTemplateCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-free-trial-student-whats-template-list-admin',
  templateUrl: './free-trial-student-whats-template-list-admin.component.html'
})
export class FreeTrialStudentWhatsTemplateListAdminComponent extends AbstractListController<FreeTrialStudentWhatsTemplateDto, FreeTrialStudentWhatsTemplateCriteria, FreeTrialStudentWhatsTemplateService>  implements OnInit {

    fileName = 'FreeTrialStudentWhatsTemplate';


constructor( private freeTrialStudentWhatsTemplateService: FreeTrialStudentWhatsTemplateService ) {
        super(freeTrialStudentWhatsTemplateService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadFreeTrialStudentWhatsTemplates(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrialStudentWhatsTemplate', 'list');
        isPermistted ? this.service.findAll().subscribe(freeTrialStudentWhatsTemplates => this.items = freeTrialStudentWhatsTemplates,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'object', header: 'Object'},
            {field: 'source', header: 'Source'},
        ];
    }



	public initDuplicate(res: FreeTrialStudentWhatsTemplateDto) {
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
