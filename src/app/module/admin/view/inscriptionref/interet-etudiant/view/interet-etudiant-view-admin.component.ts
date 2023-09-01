import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {InteretEtudiantService} from 'src/app/controller/service/InteretEtudiant.service';
import {InteretEtudiantDto} from 'src/app/controller/model/InteretEtudiant.model';
import {InteretEtudiantCriteria} from 'src/app/controller/criteria/InteretEtudiantCriteria.model';

@Component({
  selector: 'app-interet-etudiant-view-admin',
  templateUrl: './interet-etudiant-view-admin.component.html'
})
export class InteretEtudiantViewAdminComponent extends AbstractViewController<InteretEtudiantDto, InteretEtudiantCriteria, InteretEtudiantService> implements OnInit {


    constructor(private interetEtudiantService: InteretEtudiantService){
        super(interetEtudiantService);
    }

    ngOnInit(): void {
    }




}
