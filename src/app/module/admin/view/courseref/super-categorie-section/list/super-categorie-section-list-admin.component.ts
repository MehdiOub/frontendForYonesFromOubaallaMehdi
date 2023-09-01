import {Component, OnInit} from '@angular/core';
import {SuperCategorieSectionService} from 'src/app/controller/service/SuperCategorieSection.service';
import {SuperCategorieSectionDto} from 'src/app/controller/model/SuperCategorieSection.model';
import {SuperCategorieSectionCriteria} from 'src/app/controller/criteria/SuperCategorieSectionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {CategorieSectionDto} from 'src/app/controller/model/CategorieSection.model';
import {CategorieSectionService} from 'src/app/controller/service/CategorieSection.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';


@Component({
  selector: 'app-super-categorie-section-list-admin',
  templateUrl: './super-categorie-section-list-admin.component.html'
})
export class SuperCategorieSectionListAdminComponent extends AbstractListController<SuperCategorieSectionDto, SuperCategorieSectionCriteria, SuperCategorieSectionService>  implements OnInit {

    fileName = 'SuperCategorieSection';


constructor( private superCategorieSectionService: SuperCategorieSectionService , private categorieSectionService: CategorieSectionService) {
        super(superCategorieSectionService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadSuperCategorieSections(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('SuperCategorieSection', 'list');
        isPermistted ? this.service.findAll().subscribe(superCategorieSections => this.items = superCategorieSections,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: SuperCategorieSectionDto) {
        if (res.categorieSections != null) {
             res.categorieSections.forEach(d => { d.superCategorieSection = null; d.id = null; });
        }
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
