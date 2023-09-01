import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {TypeTeacherService} from 'src/app/controller/service/TypeTeacher.service';
import {TypeTeacherDto} from 'src/app/controller/model/TypeTeacher.model';
import {TypeTeacherCriteria} from 'src/app/controller/criteria/TypeTeacherCriteria.model';
@Component({
  selector: 'app-type-teacher-create-admin',
  templateUrl: './type-teacher-create-admin.component.html'
})
export class TypeTeacherCreateAdminComponent extends AbstractCreateController<TypeTeacherDto, TypeTeacherCriteria, TypeTeacherService>  implements OnInit {



   private _validTypeTeacherLibelle = true;
   private _validTypeTeacherCode = true;

    constructor( private typeTeacherService: TypeTeacherService ) {
        super(typeTeacherService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validTypeTeacherLibelle = value;
        this.validTypeTeacherCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateTypeTeacherLibelle();
        this.validateTypeTeacherCode();
    }

    public validateTypeTeacherLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validTypeTeacherLibelle = false;
        } else {
            this.validTypeTeacherLibelle = true;
        }
    }
    public validateTypeTeacherCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validTypeTeacherCode = false;
        } else {
            this.validTypeTeacherCode = true;
        }
    }






    get validTypeTeacherLibelle(): boolean {
        return this._validTypeTeacherLibelle;
    }

    set validTypeTeacherLibelle(value: boolean) {
         this._validTypeTeacherLibelle = value;
    }
    get validTypeTeacherCode(): boolean {
        return this._validTypeTeacherCode;
    }

    set validTypeTeacherCode(value: boolean) {
         this._validTypeTeacherCode = value;
    }



}
