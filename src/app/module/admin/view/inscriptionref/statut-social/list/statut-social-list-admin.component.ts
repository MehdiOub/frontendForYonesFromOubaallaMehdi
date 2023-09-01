import {Component, OnInit} from '@angular/core';
import {StatutSocialService} from 'src/app/controller/service/StatutSocial.service';
import {StatutSocialDto} from 'src/app/controller/model/StatutSocial.model';
import {StatutSocialCriteria} from 'src/app/controller/criteria/StatutSocialCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-statut-social-list-admin',
  templateUrl: './statut-social-list-admin.component.html'
})
export class StatutSocialListAdminComponent extends AbstractListController<StatutSocialDto, StatutSocialCriteria, StatutSocialService>  implements OnInit {

    fileName = 'StatutSocial';


constructor( private statutSocialService: StatutSocialService ) {
        super(statutSocialService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadStatutSocials(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('StatutSocial', 'list');
        isPermistted ? this.service.findAll().subscribe(statutSocials => this.items = statutSocials,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: StatutSocialDto) {
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
