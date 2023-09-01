import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {SalaryService} from 'src/app/controller/service/Salary.service';
import {SalaryDto} from 'src/app/controller/model/Salary.model';
import {SalaryCriteria} from 'src/app/controller/criteria/SalaryCriteria.model';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
@Component({
  selector: 'app-salary-create-admin',
  templateUrl: './salary-create-admin.component.html'
})
export class SalaryCreateAdminComponent extends AbstractCreateController<SalaryDto, SalaryCriteria, SalaryService>  implements OnInit {



   private _validSalaryCode = true;
    private _validProfRef = true;

    constructor( private salaryService: SalaryService , private profService: ProfService) {
        super(salaryService);
    }

    ngOnInit(): void {
    this.prof = new ProfDto();
    this.profService.findAll().subscribe((data) => this.profs = data);
}





    public setValidation(value: boolean){
        this.validSalaryCode = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateSalaryCode();
    }

    public validateSalaryCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
        this.errorMessages.push('Code non valide');
        this.validSalaryCode = false;
        } else {
            this.validSalaryCode = true;
        }
    }



    get prof(): ProfDto {
        return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs(): Array<ProfDto> {
        return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
    }
    get createProfDialog(): boolean {
       return this.profService.createDialog;
    }
    set createProfDialog(value: boolean) {
        this.profService.createDialog= value;
    }



    get validSalaryCode(): boolean {
        return this._validSalaryCode;
    }

    set validSalaryCode(value: boolean) {
         this._validSalaryCode = value;
    }

    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }


}
