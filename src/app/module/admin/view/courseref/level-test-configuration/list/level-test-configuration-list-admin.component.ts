import {Component, OnInit} from '@angular/core';
import {LevelTestConfigurationService} from 'src/app/controller/service/LevelTestConfiguration.service';
import {LevelTestConfigurationDto} from 'src/app/controller/model/LevelTestConfiguration.model';
import {LevelTestConfigurationCriteria} from 'src/app/controller/criteria/LevelTestConfigurationCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';


@Component({
  selector: 'app-level-test-configuration-list-admin',
  templateUrl: './level-test-configuration-list-admin.component.html'
})
export class LevelTestConfigurationListAdminComponent extends AbstractListController<LevelTestConfigurationDto, LevelTestConfigurationCriteria, LevelTestConfigurationService>  implements OnInit {

    fileName = 'LevelTestConfiguration';

    parcourss :Array<ParcoursDto>;

constructor( private levelTestConfigurationService: LevelTestConfigurationService , private parcoursService: ParcoursService) {
        super(levelTestConfigurationService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadParcours();
    }

    public async loadLevelTestConfigurations(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('LevelTestConfiguration', 'list');
        isPermistted ? this.service.findAll().subscribe(levelTestConfigurations => this.items = levelTestConfigurations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'noteMin', header: 'Note min'},
            {field: 'noteMax', header: 'Note max'},
            {field: 'parcours?.libelle', header: 'Parcours'},
        ];
    }


    public async loadParcours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('LevelTestConfiguration', 'list');
        isPermistted ? this.parcoursService.findAllOptimized().subscribe(parcourss => this.parcourss = parcourss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: LevelTestConfigurationDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Note min': e.noteMin ,
                 'Note max': e.noteMax ,
                'Parcours': e.parcours?.libelle ,
            }
        });

        this.criteriaData = [{
            'Note min Min': this.criteria.noteMinMin ? this.criteria.noteMinMin : environment.emptyForExport ,
            'Note min Max': this.criteria.noteMinMax ? this.criteria.noteMinMax : environment.emptyForExport ,
            'Note max Min': this.criteria.noteMaxMin ? this.criteria.noteMaxMin : environment.emptyForExport ,
            'Note max Max': this.criteria.noteMaxMax ? this.criteria.noteMaxMax : environment.emptyForExport ,
        //'Parcours': this.criteria.parcours?.libelle ? this.criteria.parcours?.libelle : environment.emptyForExport ,
        }];
      }
}
