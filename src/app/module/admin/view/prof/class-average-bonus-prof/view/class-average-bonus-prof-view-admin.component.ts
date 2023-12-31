import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ClassAverageBonusProfService} from 'src/app/controller/service/ClassAverageBonusProf.service';
import {ClassAverageBonusProfDto} from 'src/app/controller/model/ClassAverageBonusProf.model';
import {ClassAverageBonusProfCriteria} from 'src/app/controller/criteria/ClassAverageBonusProfCriteria.model';

import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {SalaryDto} from 'src/app/controller/model/Salary.model';
import {SalaryService} from 'src/app/controller/service/Salary.service';
@Component({
  selector: 'app-class-average-bonus-prof-view-admin',
  templateUrl: './class-average-bonus-prof-view-admin.component.html'
})
export class ClassAverageBonusProfViewAdminComponent extends AbstractViewController<ClassAverageBonusProfDto, ClassAverageBonusProfCriteria, ClassAverageBonusProfService> implements OnInit {


    constructor(private classAverageBonusProfService: ClassAverageBonusProfService, private profService: ProfService, private salaryService: SalaryService){
        super(classAverageBonusProfService);
    }

    ngOnInit(): void {
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
        this.salary = new SalaryDto();
        this.salaryService.findAll().subscribe((data) => this.salarys = data);
    }


    get prof(): ProfDto {
       return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs():Array<ProfDto> {
       return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
    }
    get salary(): SalaryDto {
       return this.salaryService.item;
    }
    set salary(value: SalaryDto) {
        this.salaryService.item = value;
    }
    get salarys():Array<SalaryDto> {
       return this.salaryService.items;
    }
    set salarys(value: Array<SalaryDto>) {
        this.salaryService.items = value;
    }


}
