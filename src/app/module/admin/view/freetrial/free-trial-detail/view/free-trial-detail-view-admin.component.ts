import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FreeTrialDetailService} from 'src/app/controller/service/FreeTrialDetail.service';
import {FreeTrialDetailDto} from 'src/app/controller/model/FreeTrialDetail.model';
import {FreeTrialDetailCriteria} from 'src/app/controller/criteria/FreeTrialDetailCriteria.model';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {FreeTrialDto} from 'src/app/controller/model/FreeTrial.model';
import {FreeTrialService} from 'src/app/controller/service/FreeTrial.service';
@Component({
  selector: 'app-free-trial-detail-view-admin',
  templateUrl: './free-trial-detail-view-admin.component.html'
})
export class FreeTrialDetailViewAdminComponent extends AbstractViewController<FreeTrialDetailDto, FreeTrialDetailCriteria, FreeTrialDetailService> implements OnInit {


    constructor(private freeTrialDetailService: FreeTrialDetailService, private etudiantService: EtudiantService, private freeTrialService: FreeTrialService){
        super(freeTrialDetailService);
    }

    ngOnInit(): void {
        this.freeTrial = new FreeTrialDto();
        this.freeTrialService.findAll().subscribe((data) => this.freeTrials = data);
        this.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
    }


    get freeTrial(): FreeTrialDto {
       return this.freeTrialService.item;
    }
    set freeTrial(value: FreeTrialDto) {
        this.freeTrialService.item = value;
    }
    get freeTrials():Array<FreeTrialDto> {
       return this.freeTrialService.items;
    }
    set freeTrials(value: Array<FreeTrialDto>) {
        this.freeTrialService.items = value;
    }
    get etudiant(): EtudiantDto {
       return this.etudiantService.item;
    }
    set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
    }
    get etudiants():Array<EtudiantDto> {
       return this.etudiantService.items;
    }
    set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
    }


}
