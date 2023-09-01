import {Component, OnInit} from '@angular/core';
import {EtatCoursService} from 'src/app/controller/service/EtatCours.service';
import {EtatCoursDto} from 'src/app/controller/model/EtatCours.model';
import {EtatCoursCriteria} from 'src/app/controller/criteria/EtatCoursCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-etat-cours-list-admin',
  templateUrl: './etat-cours-list-admin.component.html'
})
export class EtatCoursListAdminComponent extends AbstractListController<EtatCoursDto, EtatCoursCriteria, EtatCoursService>  implements OnInit {

    fileName = 'EtatCours';


constructor( private etatCoursService: EtatCoursService ) {
        super(etatCoursService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadEtatCourss(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtatCours', 'list');
        isPermistted ? this.service.findAll().subscribe(etatCourss => this.items = etatCourss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: EtatCoursDto) {
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
