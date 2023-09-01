import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {LangueService} from 'src/app/controller/service/Langue.service';
import {LangueDto} from 'src/app/controller/model/Langue.model';
import {LangueCriteria} from 'src/app/controller/criteria/LangueCriteria.model';



@Component({
  selector: 'app-langue-edit-admin',
  templateUrl: './langue-edit-admin.component.html'
})
export class LangueEditAdminComponent extends AbstractEditController<LangueDto, LangueCriteria, LangueService>   implements OnInit {


    private _validLangueRef = true;




    constructor( private langueService: LangueService ) {
        super(langueService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validLangueRef = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateLangueRef();
    }
    public validateLangueRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
            this.errorMessages.push('Ref non valide');
            this.validLangueRef = false;
        } else {
            this.validLangueRef = true;
        }
    }






    get validLangueRef(): boolean {
        return this._validLangueRef;
    }
    set validLangueRef(value: boolean) {
        this._validLangueRef = value;
    }

}
