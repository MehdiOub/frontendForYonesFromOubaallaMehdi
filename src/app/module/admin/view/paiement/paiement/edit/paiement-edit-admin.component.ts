import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {PaiementService} from 'src/app/controller/service/Paiement.service';
import {PaiementDto} from 'src/app/controller/model/Paiement.model';
import {PaiementCriteria} from 'src/app/controller/criteria/PaiementCriteria.model';


import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {GroupeEtudiantDto} from 'src/app/controller/model/GroupeEtudiant.model';
import {GroupeEtudiantService} from 'src/app/controller/service/GroupeEtudiant.service';

@Component({
  selector: 'app-paiement-edit-admin',
  templateUrl: './paiement-edit-admin.component.html'
})
export class PaiementEditAdminComponent extends AbstractEditController<PaiementDto, PaiementCriteria, PaiementService>   implements OnInit {



    private _validProfRef = true;



    constructor( private paiementService: PaiementService , private profService: ProfService, private groupeEtudiantService: GroupeEtudiantService) {
        super(paiementService);
    }

    ngOnInit(): void {
    this.prof = new ProfDto();
    this.profService.findAll().subscribe((data) => this.profs = data);
    this.groupeEtudiant = new GroupeEtudiantDto();
    this.groupeEtudiantService.findAll().subscribe((data) => this.groupeEtudiants = data);
}
    public prepareEdit() {
        this.item.datePaiement = this.paiementService.format(this.item.datePaiement);
    }



    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }




   get prof(): ProfDto {
       return this.profService.item;
   }
  set prof(value: ProfDto) {
        this.profService.item = value;
   }
   get profs(): Array<ProfDto> {
        return this.profService.items;
   }
   set profs(value: Array<ProfDto>) {
        this.profService.items = value;
   }
   get createProfDialog(): boolean {
       return this.profService.createDialog;
   }
  set createProfDialog(value: boolean) {
       this.profService.createDialog= value;
   }
   get groupeEtudiant(): GroupeEtudiantDto {
       return this.groupeEtudiantService.item;
   }
  set groupeEtudiant(value: GroupeEtudiantDto) {
        this.groupeEtudiantService.item = value;
   }
   get groupeEtudiants(): Array<GroupeEtudiantDto> {
        return this.groupeEtudiantService.items;
   }
   set groupeEtudiants(value: Array<GroupeEtudiantDto>) {
        this.groupeEtudiantService.items = value;
   }
   get createGroupeEtudiantDialog(): boolean {
       return this.groupeEtudiantService.createDialog;
   }
  set createGroupeEtudiantDialog(value: boolean) {
       this.groupeEtudiantService.createDialog= value;
   }



    get validProfRef(): boolean {
        return this._validProfRef;
    }
    set validProfRef(value: boolean) {
        this._validProfRef = value;
    }
}
