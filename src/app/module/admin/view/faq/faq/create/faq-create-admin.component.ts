import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FaqService} from 'src/app/controller/service/Faq.service';
import {FaqDto} from 'src/app/controller/model/Faq.model';
import {FaqCriteria} from 'src/app/controller/criteria/FaqCriteria.model';
import {FaqTypeDto} from 'src/app/controller/model/FaqType.model';
import {FaqTypeService} from 'src/app/controller/service/FaqType.service';
@Component({
  selector: 'app-faq-create-admin',
  templateUrl: './faq-create-admin.component.html'
})
export class FaqCreateAdminComponent extends AbstractCreateController<FaqDto, FaqCriteria, FaqService>  implements OnInit {



   private _validFaqLibelle = true;
    private _validFaqTypeLibelle = true;

    constructor( private faqService: FaqService , private faqTypeService: FaqTypeService) {
        super(faqService);
    }

    ngOnInit(): void {
    this.faqType = new FaqTypeDto();
    this.faqTypeService.findAll().subscribe((data) => this.faqTypes = data);
}





    public setValidation(value: boolean){
        this.validFaqLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFaqLibelle();
    }

    public validateFaqLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validFaqLibelle = false;
        } else {
            this.validFaqLibelle = true;
        }
    }


    public async openCreateFaqType(faqType: string) {
    const isPermistted = await this.roleService.isPermitted('FaqType', 'add');
    if(isPermistted) {
         this.faqType = new FaqTypeDto();
         this.createFaqTypeDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get faqType(): FaqTypeDto {
        return this.faqTypeService.item;
    }
    set faqType(value: FaqTypeDto) {
        this.faqTypeService.item = value;
    }
    get faqTypes(): Array<FaqTypeDto> {
        return this.faqTypeService.items;
    }
    set faqTypes(value: Array<FaqTypeDto>) {
        this.faqTypeService.items = value;
    }
    get createFaqTypeDialog(): boolean {
       return this.faqTypeService.createDialog;
    }
    set createFaqTypeDialog(value: boolean) {
        this.faqTypeService.createDialog= value;
    }



    get validFaqLibelle(): boolean {
        return this._validFaqLibelle;
    }

    set validFaqLibelle(value: boolean) {
         this._validFaqLibelle = value;
    }

    get validFaqTypeLibelle(): boolean {
        return this._validFaqTypeLibelle;
    }
    set validFaqTypeLibelle(value: boolean) {
        this._validFaqTypeLibelle = value;
    }


}
