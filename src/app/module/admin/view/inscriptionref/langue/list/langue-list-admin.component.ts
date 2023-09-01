import {Component, OnInit} from '@angular/core';
import {LangueService} from 'src/app/controller/service/Langue.service';
import {LangueDto} from 'src/app/controller/model/Langue.model';
import {LangueCriteria} from 'src/app/controller/criteria/LangueCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-langue-list-admin',
  templateUrl: './langue-list-admin.component.html'
})
export class LangueListAdminComponent extends AbstractListController<LangueDto, LangueCriteria, LangueService>  implements OnInit {

    fileName = 'Langue';


constructor( private langueService: LangueService ) {
        super(langueService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadLangues(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Langue', 'list');
        isPermistted ? this.service.findAll().subscribe(langues => this.items = langues,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: LangueDto) {
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
