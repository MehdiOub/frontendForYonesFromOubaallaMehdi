import {Component, OnInit} from '@angular/core';
import {TypeReclamationProfService} from 'src/app/controller/service/TypeReclamationProf.service';
import {TypeReclamationProfDto} from 'src/app/controller/model/TypeReclamationProf.model';
import {TypeReclamationProfCriteria} from 'src/app/controller/criteria/TypeReclamationProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-type-reclamation-prof-list-admin',
  templateUrl: './type-reclamation-prof-list-admin.component.html'
})
export class TypeReclamationProfListAdminComponent extends AbstractListController<TypeReclamationProfDto, TypeReclamationProfCriteria, TypeReclamationProfService>  implements OnInit {

    fileName = 'TypeReclamationProf';


constructor( private typeReclamationProfService: TypeReclamationProfService ) {
        super(typeReclamationProfService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadTypeReclamationProfs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TypeReclamationProf', 'list');
        isPermistted ? this.service.findAll().subscribe(typeReclamationProfs => this.items = typeReclamationProfs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: TypeReclamationProfDto) {
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
