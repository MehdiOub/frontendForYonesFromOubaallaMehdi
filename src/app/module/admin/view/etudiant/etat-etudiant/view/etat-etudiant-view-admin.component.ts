import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {EtatEtudiantService} from 'src/app/controller/service/EtatEtudiant.service';
import {EtatEtudiantDto} from 'src/app/controller/model/EtatEtudiant.model';
import {EtatEtudiantCriteria} from 'src/app/controller/criteria/EtatEtudiantCriteria.model';

@Component({
  selector: 'app-etat-etudiant-view-admin',
  templateUrl: './etat-etudiant-view-admin.component.html'
})
export class EtatEtudiantViewAdminComponent extends AbstractViewController<EtatEtudiantDto, EtatEtudiantCriteria, EtatEtudiantService> implements OnInit {


    constructor(private etatEtudiantService: EtatEtudiantService){
        super(etatEtudiantService);
    }

    ngOnInit(): void {
    }




}
