import {Component, OnInit} from '@angular/core';
import {StatutFreeTrialService} from 'src/app/controller/service/StatutFreeTrial.service';
import {StatutFreeTrialDto} from 'src/app/controller/model/StatutFreeTrial.model';
import {StatutFreeTrialCriteria} from 'src/app/controller/criteria/StatutFreeTrialCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-statut-free-trial-list-admin',
  templateUrl: './statut-free-trial-list-admin.component.html'
})
export class StatutFreeTrialListAdminComponent extends AbstractListController<StatutFreeTrialDto, StatutFreeTrialCriteria, StatutFreeTrialService>  implements OnInit {

    fileName = 'StatutFreeTrial';


constructor( private statutFreeTrialService: StatutFreeTrialService ) {
        super(statutFreeTrialService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadStatutFreeTrials(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('StatutFreeTrial', 'list');
        isPermistted ? this.service.findAll().subscribe(statutFreeTrials => this.items = statutFreeTrials,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
            {field: 'style', header: 'Style'},
        ];
    }



	public initDuplicate(res: StatutFreeTrialDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
                 'Style': e.style ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Style': this.criteria.style ? this.criteria.style : environment.emptyForExport ,
        }];
      }
}
