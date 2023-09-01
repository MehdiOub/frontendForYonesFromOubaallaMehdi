import {Component, OnInit} from '@angular/core';
import {EtatEtudiantScheduleService} from 'src/app/controller/service/EtatEtudiantSchedule.service';
import {EtatEtudiantScheduleDto} from 'src/app/controller/model/EtatEtudiantSchedule.model';
import {EtatEtudiantScheduleCriteria} from 'src/app/controller/criteria/EtatEtudiantScheduleCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-etat-etudiant-schedule-list-admin',
  templateUrl: './etat-etudiant-schedule-list-admin.component.html'
})
export class EtatEtudiantScheduleListAdminComponent extends AbstractListController<EtatEtudiantScheduleDto, EtatEtudiantScheduleCriteria, EtatEtudiantScheduleService>  implements OnInit {

    fileName = 'EtatEtudiantSchedule';


constructor( private etatEtudiantScheduleService: EtatEtudiantScheduleService ) {
        super(etatEtudiantScheduleService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadEtatEtudiantSchedules(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('EtatEtudiantSchedule', 'list');
        isPermistted ? this.service.findAll().subscribe(etatEtudiantSchedules => this.items = etatEtudiantSchedules,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'libelle', header: 'Libelle'},
            {field: 'couleur', header: 'Couleur'},
        ];
    }



	public initDuplicate(res: EtatEtudiantScheduleDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Libelle': e.libelle ,
                 'Couleur': e.couleur ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Couleur': this.criteria.couleur ? this.criteria.couleur : environment.emptyForExport ,
        }];
      }
}
