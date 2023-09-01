import {Component, OnInit} from '@angular/core';
import {EtatReponseService} from 'src/app/controller/service/EtatReponse.service';
import {EtatReponseDto} from 'src/app/controller/model/EtatReponse.model';
import {EtatReponseCriteria} from 'src/app/controller/criteria/EtatReponseCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-etat-reponse-list-admin',
  templateUrl: './etat-reponse-list-admin.component.html'
})
export class EtatReponseListAdminComponent extends AbstractListController<EtatReponseDto, EtatReponseCriteria, EtatReponseService>  implements OnInit {

    fileName = 'EtatReponse';


constructor( private etatReponseService: EtatReponseService ) {
        super(etatReponseService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadEtatReponses(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtatReponse', 'list');
        isPermistted ? this.service.findAll().subscribe(etatReponses => this.items = etatReponses,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: EtatReponseDto) {
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
