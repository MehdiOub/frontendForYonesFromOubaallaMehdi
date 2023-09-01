import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {WorkloadBonusService} from 'src/app/controller/service/WorkloadBonus.service';
import {WorkloadBonusDto} from 'src/app/controller/model/WorkloadBonus.model';
import {WorkloadBonusCriteria} from 'src/app/controller/criteria/WorkloadBonusCriteria.model';

@Component({
  selector: 'app-workload-bonus-view-admin',
  templateUrl: './workload-bonus-view-admin.component.html'
})
export class WorkloadBonusViewAdminComponent extends AbstractViewController<WorkloadBonusDto, WorkloadBonusCriteria, WorkloadBonusService> implements OnInit {


    constructor(private workloadBonusService: WorkloadBonusService){
        super(workloadBonusService);
    }

    ngOnInit(): void {
    }




}
