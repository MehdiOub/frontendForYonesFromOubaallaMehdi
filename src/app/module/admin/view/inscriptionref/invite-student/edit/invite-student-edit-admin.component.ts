import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {InviteStudentService} from 'src/app/controller/service/InviteStudent.service';
import {InviteStudentDto} from 'src/app/controller/model/InviteStudent.model';
import {InviteStudentCriteria} from 'src/app/controller/criteria/InviteStudentCriteria.model';


import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';

@Component({
  selector: 'app-invite-student-edit-admin',
  templateUrl: './invite-student-edit-admin.component.html'
})
export class InviteStudentEditAdminComponent extends AbstractEditController<InviteStudentDto, InviteStudentCriteria, InviteStudentService>   implements OnInit {


    private _validInviteStudentCode = true;

    private _validEtudiantRef = true;



    constructor( private inviteStudentService: InviteStudentService , private etudiantService: EtudiantService) {
        super(inviteStudentService);
    }

    ngOnInit(): void {
    this.etudiant = new EtudiantDto();
    this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
}
    public prepareEdit() {
        this.item.dateSentInvitation = this.inviteStudentService.format(this.item.dateSentInvitation);
        this.item.dateAcceptInvitation = this.inviteStudentService.format(this.item.dateAcceptInvitation);
        this.item.datePayPack = this.inviteStudentService.format(this.item.datePayPack);
    }



    public setValidation(value : boolean){
        this.validInviteStudentCode = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateInviteStudentCode();
    }
    public validateInviteStudentCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validInviteStudentCode = false;
        } else {
            this.validInviteStudentCode = true;
        }
    }




   get etudiant(): EtudiantDto {
       return this.etudiantService.item;
   }
  set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
   }
   get etudiants(): Array<EtudiantDto> {
        return this.etudiantService.items;
   }
   set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
   }
   get createEtudiantDialog(): boolean {
       return this.etudiantService.createDialog;
   }
  set createEtudiantDialog(value: boolean) {
       this.etudiantService.createDialog= value;
   }


    get validInviteStudentCode(): boolean {
        return this._validInviteStudentCode;
    }
    set validInviteStudentCode(value: boolean) {
        this._validInviteStudentCode = value;
    }

    get validEtudiantRef(): boolean {
        return this._validEtudiantRef;
    }
    set validEtudiantRef(value: boolean) {
        this._validEtudiantRef = value;
    }
}
