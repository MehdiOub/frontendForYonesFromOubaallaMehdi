import {Component, OnInit} from '@angular/core';
import {ResultatHomeWorkService} from 'src/app/controller/service/ResultatHomeWork.service';
import {ResultatHomeWorkDto} from 'src/app/controller/model/ResultatHomeWork.model';
import {ResultatHomeWorkCriteria} from 'src/app/controller/criteria/ResultatHomeWorkCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-resultat-home-work-list-admin',
  templateUrl: './resultat-home-work-list-admin.component.html'
})
export class ResultatHomeWorkListAdminComponent extends AbstractListController<ResultatHomeWorkDto, ResultatHomeWorkCriteria, ResultatHomeWorkService>  implements OnInit {

    fileName = 'ResultatHomeWork';


constructor( private resultatHomeWorkService: ResultatHomeWorkService ) {
        super(resultatHomeWorkService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadResultatHomeWorks(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ResultatHomeWork', 'list');
        isPermistted ? this.service.findAll().subscribe(resultatHomeWorks => this.items = resultatHomeWorks,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
        ];
    }



	public initDuplicate(res: ResultatHomeWorkDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Code': e.code ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
        }];
      }
}
