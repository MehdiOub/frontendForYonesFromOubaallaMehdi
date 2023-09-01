import {Component, OnInit} from '@angular/core';
import {CentreService} from 'src/app/controller/service/Centre.service';
import {CentreDto} from 'src/app/controller/model/Centre.model';
import {CentreCriteria} from 'src/app/controller/criteria/CentreCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursService} from 'src/app/controller/service/Cours.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';


@Component({
  selector: 'app-centre-list-admin',
  templateUrl: './centre-list-admin.component.html'
})
export class CentreListAdminComponent extends AbstractListController<CentreDto, CentreCriteria, CentreService>  implements OnInit {

    fileName = 'Centre';


constructor( private centreService: CentreService , private parcoursService: ParcoursService) {
        super(centreService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadCentres(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Centre', 'list');
        isPermistted ? this.service.findAll().subscribe(centres => this.items = centres,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'description', header: 'Description'},
            {field: 'log', header: 'Log'},
            {field: 'password', header: 'Password'},
        ];
    }



	public initDuplicate(res: CentreDto) {
        if (res.parcourss != null) {
             res.parcourss.forEach(d => { d.centre = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
                 'Description': e.description ,
                 'Log': e.log ,
                 'Password': e.password ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Log': this.criteria.log ? this.criteria.log : environment.emptyForExport ,
            'Password': this.criteria.password ? this.criteria.password : environment.emptyForExport ,
        }];
      }
}
