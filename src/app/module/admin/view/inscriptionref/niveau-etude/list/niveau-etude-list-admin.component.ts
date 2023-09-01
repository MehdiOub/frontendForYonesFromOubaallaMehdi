import {Component, OnInit} from '@angular/core';
import {NiveauEtudeService} from 'src/app/controller/service/NiveauEtude.service';
import {NiveauEtudeDto} from 'src/app/controller/model/NiveauEtude.model';
import {NiveauEtudeCriteria} from 'src/app/controller/criteria/NiveauEtudeCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-niveau-etude-list-admin',
  templateUrl: './niveau-etude-list-admin.component.html'
})
export class NiveauEtudeListAdminComponent extends AbstractListController<NiveauEtudeDto, NiveauEtudeCriteria, NiveauEtudeService>  implements OnInit {

    fileName = 'NiveauEtude';


constructor( private niveauEtudeService: NiveauEtudeService ) {
        super(niveauEtudeService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadNiveauEtudes(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('NiveauEtude', 'list');
        isPermistted ? this.service.findAll().subscribe(niveauEtudes => this.items = niveauEtudes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'code', header: 'Code'},
        ];
    }



	public initDuplicate(res: NiveauEtudeDto) {
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
