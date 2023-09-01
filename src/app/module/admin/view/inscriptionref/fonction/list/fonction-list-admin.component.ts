import {Component, OnInit} from '@angular/core';
import {FonctionService} from 'src/app/controller/service/Fonction.service';
import {FonctionDto} from 'src/app/controller/model/Fonction.model';
import {FonctionCriteria} from 'src/app/controller/criteria/FonctionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-fonction-list-admin',
  templateUrl: './fonction-list-admin.component.html'
})
export class FonctionListAdminComponent extends AbstractListController<FonctionDto, FonctionCriteria, FonctionService>  implements OnInit {

    fileName = 'Fonction';


constructor( private fonctionService: FonctionService ) {
        super(fonctionService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadFonctions(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Fonction', 'list');
        isPermistted ? this.service.findAll().subscribe(fonctions => this.items = fonctions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: FonctionDto) {
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
