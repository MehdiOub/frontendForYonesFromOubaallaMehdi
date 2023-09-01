import {Component, OnInit} from '@angular/core';
import {ClassAverageBonusService} from 'src/app/controller/service/ClassAverageBonus.service';
import {ClassAverageBonusDto} from 'src/app/controller/model/ClassAverageBonus.model';
import {ClassAverageBonusCriteria} from 'src/app/controller/criteria/ClassAverageBonusCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-class-average-bonus-list-admin',
  templateUrl: './class-average-bonus-list-admin.component.html'
})
export class ClassAverageBonusListAdminComponent extends AbstractListController<ClassAverageBonusDto, ClassAverageBonusCriteria, ClassAverageBonusService>  implements OnInit {

    fileName = 'ClassAverageBonus';


constructor( private classAverageBonusService: ClassAverageBonusService ) {
        super(classAverageBonusService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadClassAverageBonuss(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ClassAverageBonus', 'list');
        isPermistted ? this.service.findAll().subscribe(classAverageBonuss => this.items = classAverageBonuss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'nombreSession', header: 'Nombre session'},
            {field: 'prix', header: 'Prix'},
        ];
    }



	public initDuplicate(res: ClassAverageBonusDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Nombre session': e.nombreSession ,
                 'Prix': e.prix ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Nombre session Min': this.criteria.nombreSessionMin ? this.criteria.nombreSessionMin : environment.emptyForExport ,
            'Nombre session Max': this.criteria.nombreSessionMax ? this.criteria.nombreSessionMax : environment.emptyForExport ,
            'Prix Min': this.criteria.prixMin ? this.criteria.prixMin : environment.emptyForExport ,
            'Prix Max': this.criteria.prixMax ? this.criteria.prixMax : environment.emptyForExport ,
        }];
      }
}
