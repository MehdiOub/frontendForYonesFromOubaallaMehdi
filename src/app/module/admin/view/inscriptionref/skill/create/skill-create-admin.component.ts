import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {SkillService} from 'src/app/controller/service/Skill.service';
import {SkillDto} from 'src/app/controller/model/Skill.model';
import {SkillCriteria} from 'src/app/controller/criteria/SkillCriteria.model';
@Component({
  selector: 'app-skill-create-admin',
  templateUrl: './skill-create-admin.component.html'
})
export class SkillCreateAdminComponent extends AbstractCreateController<SkillDto, SkillCriteria, SkillService>  implements OnInit {



   private _validSkillCode = true;
   private _validSkillLibelle = true;

    constructor( private skillService: SkillService ) {
        super(skillService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validSkillCode = value;
        this.validSkillLibelle = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSkillCode();
        this.validateSkillLibelle();
    }

    public validateSkillCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validSkillCode = false;
        } else {
            this.validSkillCode = true;
        }
    }
    public validateSkillLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
        this.errorMessages.push('Libelle non valide');
        this.validSkillLibelle = false;
        } else {
            this.validSkillLibelle = true;
        }
    }






    get validSkillCode(): boolean {
        return this._validSkillCode;
    }

    set validSkillCode(value: boolean) {
         this._validSkillCode = value;
    }
    get validSkillLibelle(): boolean {
        return this._validSkillLibelle;
    }

    set validSkillLibelle(value: boolean) {
         this._validSkillLibelle = value;
    }



}
