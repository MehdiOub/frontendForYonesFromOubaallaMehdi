import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ClassAverageBonusService} from 'src/app/controller/service/ClassAverageBonus.service';
import {ClassAverageBonusDto} from 'src/app/controller/model/ClassAverageBonus.model';
import {ClassAverageBonusCriteria} from 'src/app/controller/criteria/ClassAverageBonusCriteria.model';

@Component({
  selector: 'app-class-average-bonus-view-admin',
  templateUrl: './class-average-bonus-view-admin.component.html'
})
export class ClassAverageBonusViewAdminComponent extends AbstractViewController<ClassAverageBonusDto, ClassAverageBonusCriteria, ClassAverageBonusService> implements OnInit {


    constructor(private classAverageBonusService: ClassAverageBonusService){
        super(classAverageBonusService);
    }

    ngOnInit(): void {
    }




}
