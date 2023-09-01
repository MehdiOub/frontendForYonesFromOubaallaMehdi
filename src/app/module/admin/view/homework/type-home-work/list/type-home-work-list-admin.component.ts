import {Component, OnInit} from '@angular/core';
import {TypeHomeWorkService} from 'src/app/controller/service/TypeHomeWork.service';
import {TypeHomeWorkDto} from 'src/app/controller/model/TypeHomeWork.model';
import {TypeHomeWorkCriteria} from 'src/app/controller/criteria/TypeHomeWorkCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-type-home-work-list-admin',
  templateUrl: './type-home-work-list-admin.component.html'
})
export class TypeHomeWorkListAdminComponent extends AbstractListController<TypeHomeWorkDto, TypeHomeWorkCriteria, TypeHomeWorkService>  implements OnInit {

    fileName = 'TypeHomeWork';


constructor( private typeHomeWorkService: TypeHomeWorkService ) {
        super(typeHomeWorkService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadTypeHomeWorks(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TypeHomeWork', 'list');
        isPermistted ? this.service.findAll().subscribe(typeHomeWorks => this.items = typeHomeWorks,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'lib', header: 'Lib'},
        ];
    }



	public initDuplicate(res: TypeHomeWorkDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Lib': e.lib ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Lib': this.criteria.lib ? this.criteria.lib : environment.emptyForExport ,
        }];
      }
}
