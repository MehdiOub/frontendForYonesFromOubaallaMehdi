import {Component, OnInit} from '@angular/core';
import {GroupeTypeService} from 'src/app/controller/service/GroupeType.service';
import {GroupeTypeDto} from 'src/app/controller/model/GroupeType.model';
import {GroupeTypeCriteria} from 'src/app/controller/criteria/GroupeTypeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-groupe-type-list-admin',
  templateUrl: './groupe-type-list-admin.component.html'
})
export class GroupeTypeListAdminComponent extends AbstractListController<GroupeTypeDto, GroupeTypeCriteria, GroupeTypeService>  implements OnInit {

    fileName = 'GroupeType';


constructor( private groupeTypeService: GroupeTypeService ) {
        super(groupeTypeService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadGroupeTypes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('GroupeType', 'list');
        isPermistted ? this.service.findAll().subscribe(groupeTypes => this.items = groupeTypes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: GroupeTypeDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
