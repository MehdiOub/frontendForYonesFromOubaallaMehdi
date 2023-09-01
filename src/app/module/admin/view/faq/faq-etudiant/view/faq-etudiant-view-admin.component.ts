import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FaqEtudiantService} from 'src/app/controller/service/FaqEtudiant.service';
import {FaqEtudiantDto} from 'src/app/controller/model/FaqEtudiant.model';
import {FaqEtudiantCriteria} from 'src/app/controller/criteria/FaqEtudiantCriteria.model';

import {AdminDto} from 'src/app/controller/model/Admin.model';
import {AdminService} from 'src/app/controller/service/Admin.service';
import {FaqTypeDto} from 'src/app/controller/model/FaqType.model';
import {FaqTypeService} from 'src/app/controller/service/FaqType.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
@Component({
  selector: 'app-faq-etudiant-view-admin',
  templateUrl: './faq-etudiant-view-admin.component.html'
})
export class FaqEtudiantViewAdminComponent extends AbstractViewController<FaqEtudiantDto, FaqEtudiantCriteria, FaqEtudiantService> implements OnInit {


    constructor(private faqEtudiantService: FaqEtudiantService, private adminService: AdminService, private faqTypeService: FaqTypeService, private etudiantService: EtudiantService){
        super(faqEtudiantService);
    }

    ngOnInit(): void {
        this.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
        this.admin = new AdminDto();
        this.adminService.findAll().subscribe((data) => this.admins = data);
        this.faqType = new FaqTypeDto();
        this.faqTypeService.findAll().subscribe((data) => this.faqTypes = data);
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
    get faqType(): FaqTypeDto {
       return this.faqTypeService.item;
    }
    set faqType(value: FaqTypeDto) {
        this.faqTypeService.item = value;
    }
    get faqTypes():Array<FaqTypeDto> {
       return this.faqTypeService.items;
    }
    set faqTypes(value: Array<FaqTypeDto>) {
        this.faqTypeService.items = value;
    }
    get admin(): AdminDto {
       return this.adminService.item;
    }
    set admin(value: AdminDto) {
        this.adminService.item = value;
    }
    get admins():Array<AdminDto> {
       return this.adminService.items;
    }
    set admins(value: Array<AdminDto>) {
        this.adminService.items = value;
    }


}
