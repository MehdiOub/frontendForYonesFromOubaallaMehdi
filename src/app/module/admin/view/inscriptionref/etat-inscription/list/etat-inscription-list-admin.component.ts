import {Component, OnInit} from '@angular/core';
import {EtatInscriptionService} from 'src/app/controller/service/EtatInscription.service';
import {EtatInscriptionDto} from 'src/app/controller/model/EtatInscription.model';
import {EtatInscriptionCriteria} from 'src/app/controller/criteria/EtatInscriptionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-etat-inscription-list-admin',
  templateUrl: './etat-inscription-list-admin.component.html'
})
export class EtatInscriptionListAdminComponent extends AbstractListController<EtatInscriptionDto, EtatInscriptionCriteria, EtatInscriptionService>  implements OnInit {

    fileName = 'EtatInscription';


constructor( private etatInscriptionService: EtatInscriptionService ) {
        super(etatInscriptionService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadEtatInscriptions(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtatInscription', 'list');
        isPermistted ? this.service.findAll().subscribe(etatInscriptions => this.items = etatInscriptions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: EtatInscriptionDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
