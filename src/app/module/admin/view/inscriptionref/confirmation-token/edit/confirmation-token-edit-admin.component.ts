import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ConfirmationTokenService} from 'src/app/controller/service/ConfirmationToken.service';
import {ConfirmationTokenDto} from 'src/app/controller/model/ConfirmationToken.model';
import {ConfirmationTokenCriteria} from 'src/app/controller/criteria/ConfirmationTokenCriteria.model';


import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';

@Component({
  selector: 'app-confirmation-token-edit-admin',
  templateUrl: './confirmation-token-edit-admin.component.html'
})
export class ConfirmationTokenEditAdminComponent extends AbstractEditController<ConfirmationTokenDto, ConfirmationTokenCriteria, ConfirmationTokenService>   implements OnInit {



    private _validEtudiantRef = true;



    constructor( private confirmationTokenService: ConfirmationTokenService , private etudiantService: EtudiantService) {
        super(confirmationTokenService);
    }

    ngOnInit(): void {
    this.etudiant = new EtudiantDto();
    this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
}
    public prepareEdit() {
        this.item.expiresAt = this.confirmationTokenService.format(this.item.expiresAt);
        this.item.createdAt = this.confirmationTokenService.format(this.item.createdAt);
        this.item.confirmedAt = this.confirmationTokenService.format(this.item.confirmedAt);
    }



    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
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



    get validEtudiantRef(): boolean {
        return this._validEtudiantRef;
    }
    set validEtudiantRef(value: boolean) {
        this._validEtudiantRef = value;
    }
}
