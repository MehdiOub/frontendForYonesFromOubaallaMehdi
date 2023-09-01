import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {DictionaryService} from 'src/app/controller/service/Dictionary.service';
import {DictionaryDto} from 'src/app/controller/model/Dictionary.model';
import {DictionaryCriteria} from 'src/app/controller/criteria/DictionaryCriteria.model';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
@Component({
  selector: 'app-dictionary-view-admin',
  templateUrl: './dictionary-view-admin.component.html'
})
export class DictionaryViewAdminComponent extends AbstractViewController<DictionaryDto, DictionaryCriteria, DictionaryService> implements OnInit {


    constructor(private dictionaryService: DictionaryService, private etudiantService: EtudiantService){
        super(dictionaryService);
    }

    ngOnInit(): void {
        this.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
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
