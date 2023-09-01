import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ReclamationEtudiantService} from 'src/app/controller/service/ReclamationEtudiant.service';
import {ReclamationEtudiantDto} from 'src/app/controller/model/ReclamationEtudiant.model';
import {ReclamationEtudiantCriteria} from 'src/app/controller/criteria/ReclamationEtudiantCriteria.model';

import {TypeReclamationEtudiantDto} from 'src/app/controller/model/TypeReclamationEtudiant.model';
import {TypeReclamationEtudiantService} from 'src/app/controller/service/TypeReclamationEtudiant.service';
@Component({
  selector: 'app-reclamation-etudiant-view-admin',
  templateUrl: './reclamation-etudiant-view-admin.component.html'
})
export class ReclamationEtudiantViewAdminComponent extends AbstractViewController<ReclamationEtudiantDto, ReclamationEtudiantCriteria, ReclamationEtudiantService> implements OnInit {


    constructor(private reclamationEtudiantService: ReclamationEtudiantService, private typeReclamationEtudiantService: TypeReclamationEtudiantService){
        super(reclamationEtudiantService);
    }

    ngOnInit(): void {
        this.typeReclamationEtudiant = new TypeReclamationEtudiantDto();
        this.typeReclamationEtudiantService.findAll().subscribe((data) => this.typeReclamationEtudiants = data);
    }


    get typeReclamationEtudiant(): TypeReclamationEtudiantDto {
       return this.typeReclamationEtudiantService.item;
    }
    set typeReclamationEtudiant(value: TypeReclamationEtudiantDto) {
        this.typeReclamationEtudiantService.item = value;
    }
    get typeReclamationEtudiants():Array<TypeReclamationEtudiantDto> {
       return this.typeReclamationEtudiantService.items;
    }
    set typeReclamationEtudiants(value: Array<TypeReclamationEtudiantDto>) {
        this.typeReclamationEtudiantService.items = value;
    }


}
