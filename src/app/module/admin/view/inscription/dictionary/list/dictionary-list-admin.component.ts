import {Component, OnInit} from '@angular/core';
import {DictionaryService} from 'src/app/controller/service/Dictionary.service';
import {DictionaryDto} from 'src/app/controller/model/Dictionary.model';
import {DictionaryCriteria} from 'src/app/controller/criteria/DictionaryCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';


@Component({
  selector: 'app-dictionary-list-admin',
  templateUrl: './dictionary-list-admin.component.html'
})
export class DictionaryListAdminComponent extends AbstractListController<DictionaryDto, DictionaryCriteria, DictionaryService>  implements OnInit {

    fileName = 'Dictionary';

    etudiants :Array<EtudiantDto>;

constructor( private dictionaryService: DictionaryService , private etudiantService: EtudiantService) {
        super(dictionaryService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEtudiant();
    }

    public async loadDictionarys(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Dictionary', 'list');
        isPermistted ? this.service.findAll().subscribe(dictionarys => this.items = dictionarys,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'word', header: 'Word'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
        ];
    }


    public async loadEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Dictionary', 'list');
        isPermistted ? this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: DictionaryDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Word': e.word ,
                 'Definition': e.definition ,
                'Etudiant': e.etudiant?.ref ,
            }
        });

        this.criteriaData = [{
            'Word': this.criteria.word ? this.criteria.word : environment.emptyForExport ,
            'Definition': this.criteria.definition ? this.criteria.definition : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        }];
      }
}
