import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {TypeHomeWorkService} from 'src/app/controller/service/TypeHomeWork.service';
import {TypeHomeWorkDto} from 'src/app/controller/model/TypeHomeWork.model';
import {TypeHomeWorkCriteria} from 'src/app/controller/criteria/TypeHomeWorkCriteria.model';



@Component({
  selector: 'app-type-home-work-edit-admin',
  templateUrl: './type-home-work-edit-admin.component.html'
})
export class TypeHomeWorkEditAdminComponent extends AbstractEditController<TypeHomeWorkDto, TypeHomeWorkCriteria, TypeHomeWorkService>   implements OnInit {


    private _validTypeHomeWorkCode = true;
    private _validTypeHomeWorkLib = true;




    constructor( private typeHomeWorkService: TypeHomeWorkService ) {
        super(typeHomeWorkService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validTypeHomeWorkCode = value;
        this.validTypeHomeWorkLib = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeHomeWorkCode();
        this.validateTypeHomeWorkLib();
    }
    public validateTypeHomeWorkCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validTypeHomeWorkCode = false;
        } else {
            this.validTypeHomeWorkCode = true;
        }
    }
    public validateTypeHomeWorkLib(){
        if (this.stringUtilService.isEmpty(this.item.lib)) {
            this.errorMessages.push('Lib non valide');
            this.validTypeHomeWorkLib = false;
        } else {
            this.validTypeHomeWorkLib = true;
        }
    }






    get validTypeHomeWorkCode(): boolean {
        return this._validTypeHomeWorkCode;
    }
    set validTypeHomeWorkCode(value: boolean) {
        this._validTypeHomeWorkCode = value;
    }
    get validTypeHomeWorkLib(): boolean {
        return this._validTypeHomeWorkLib;
    }
    set validTypeHomeWorkLib(value: boolean) {
        this._validTypeHomeWorkLib = value;
    }

}
