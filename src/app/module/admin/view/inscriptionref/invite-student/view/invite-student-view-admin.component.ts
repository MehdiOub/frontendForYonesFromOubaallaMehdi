import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {InviteStudentService} from 'src/app/controller/service/InviteStudent.service';
import {InviteStudentDto} from 'src/app/controller/model/InviteStudent.model';
import {InviteStudentCriteria} from 'src/app/controller/criteria/InviteStudentCriteria.model';

import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
@Component({
  selector: 'app-invite-student-view-admin',
  templateUrl: './invite-student-view-admin.component.html'
})
export class InviteStudentViewAdminComponent extends AbstractViewController<InviteStudentDto, InviteStudentCriteria, InviteStudentService> implements OnInit {


    constructor(private inviteStudentService: InviteStudentService, private etudiantService: EtudiantService){
        super(inviteStudentService);
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
