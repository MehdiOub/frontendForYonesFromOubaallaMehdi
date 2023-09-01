import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {FaqTypeService} from 'src/app/controller/service/FaqType.service';
import {FaqTypeDto} from 'src/app/controller/model/FaqType.model';
import {FaqTypeCriteria} from 'src/app/controller/criteria/FaqTypeCriteria.model';
@Component({
  selector: 'app-faq-type-create-admin',
  templateUrl: './faq-type-create-admin.component.html'
})
export class FaqTypeCreateAdminComponent extends AbstractCreateController<FaqTypeDto, FaqTypeCriteria, FaqTypeService>  implements OnInit {



   private _validFaqTypeLibelle = true;

    constructor( private faqTypeService: FaqTypeService ) {
        super(faqTypeService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validFaqTypeLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateFaqTypeLibelle();
    }

    public validateFaqTypeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validFaqTypeLibelle = false;
        } else {
            this.validFaqTypeLibelle = true;
        }
    }






    get validFaqTypeLibelle(): boolean {
        return this._validFaqTypeLibelle;
    }

    set validFaqTypeLibelle(value: boolean) {
         this._validFaqTypeLibelle = value;
    }



}
