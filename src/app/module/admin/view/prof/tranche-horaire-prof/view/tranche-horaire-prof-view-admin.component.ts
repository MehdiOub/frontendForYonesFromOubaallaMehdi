import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TrancheHoraireProfService} from 'src/app/controller/service/TrancheHoraireProf.service';
import {TrancheHoraireProfDto} from 'src/app/controller/model/TrancheHoraireProf.model';
import {TrancheHoraireProfCriteria} from 'src/app/controller/criteria/TrancheHoraireProfCriteria.model';

import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
@Component({
  selector: 'app-tranche-horaire-prof-view-admin',
  templateUrl: './tranche-horaire-prof-view-admin.component.html'
})
export class TrancheHoraireProfViewAdminComponent extends AbstractViewController<TrancheHoraireProfDto, TrancheHoraireProfCriteria, TrancheHoraireProfService> implements OnInit {


    constructor(private trancheHoraireProfService: TrancheHoraireProfService, private profService: ProfService){
        super(trancheHoraireProfService);
    }

    ngOnInit(): void {
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
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


}
