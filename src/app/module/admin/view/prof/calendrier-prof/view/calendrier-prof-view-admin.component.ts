import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {CalendrierProfService} from 'src/app/controller/service/CalendrierProf.service';
import {CalendrierProfDto} from 'src/app/controller/model/CalendrierProf.model';
import {CalendrierProfCriteria} from 'src/app/controller/criteria/CalendrierProfCriteria.model';

import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
@Component({
  selector: 'app-calendrier-prof-view-admin',
  templateUrl: './calendrier-prof-view-admin.component.html'
})
export class CalendrierProfViewAdminComponent extends AbstractViewController<CalendrierProfDto, CalendrierProfCriteria, CalendrierProfService> implements OnInit {


    constructor(private calendrierProfService: CalendrierProfService, private profService: ProfService, private etudiantService: EtudiantService){
        super(calendrierProfService);
    }

    ngOnInit(): void {
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
        this.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
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
