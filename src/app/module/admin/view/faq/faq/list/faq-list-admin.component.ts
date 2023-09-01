import {Component, OnInit} from '@angular/core';
import {FaqService} from 'src/app/controller/service/Faq.service';
import {FaqDto} from 'src/app/controller/model/Faq.model';
import {FaqCriteria} from 'src/app/controller/criteria/FaqCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {FaqTypeDto} from 'src/app/controller/model/FaqType.model';
import {FaqTypeService} from 'src/app/controller/service/FaqType.service';


@Component({
  selector: 'app-faq-list-admin',
  templateUrl: './faq-list-admin.component.html'
})
export class FaqListAdminComponent extends AbstractListController<FaqDto, FaqCriteria, FaqService>  implements OnInit {

    fileName = 'Faq';

    faqTypes :Array<FaqTypeDto>;

constructor( private faqService: FaqService , private faqTypeService: FaqTypeService) {
        super(faqService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadFaqType();
    }

    public async loadFaqs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Faq', 'list');
        isPermistted ? this.service.findAll().subscribe(faqs => this.items = faqs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'faqType?.libelle', header: 'Faq type'},
        ];
    }


    public async loadFaqType(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Faq', 'list');
        isPermistted ? this.faqTypeService.findAllOptimized().subscribe(faqTypes => this.faqTypes = faqTypes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: FaqDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Description': e.description ,
                 'Libelle': e.libelle ,
                'Faq type': e.faqType?.libelle ,
            }
        });

        this.criteriaData = [{
            'Description': this.criteria.description ? this.criteria.description : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        //'Faq type': this.criteria.faqType?.libelle ? this.criteria.faqType?.libelle : environment.emptyForExport ,
        }];
      }
}
