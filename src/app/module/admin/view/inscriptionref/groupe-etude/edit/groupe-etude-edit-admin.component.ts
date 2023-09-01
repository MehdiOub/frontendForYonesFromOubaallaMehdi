import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {GroupeEtudeService} from 'src/app/controller/service/GroupeEtude.service';
import {GroupeEtudeDto} from 'src/app/controller/model/GroupeEtude.model';
import {GroupeEtudeCriteria} from 'src/app/controller/criteria/GroupeEtudeCriteria.model';



@Component({
  selector: 'app-groupe-etude-edit-admin',
  templateUrl: './groupe-etude-edit-admin.component.html'
})
export class GroupeEtudeEditAdminComponent extends AbstractEditController<GroupeEtudeDto, GroupeEtudeCriteria, GroupeEtudeService>   implements OnInit {


    private _validGroupeEtudeLibelle = true;




    constructor( private groupeEtudeService: GroupeEtudeService ) {
        super(groupeEtudeService);
    }

    ngOnInit(): void {
}


    public setValidation(value : boolean){
        this.validGroupeEtudeLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateGroupeEtudeLibelle();
    }
    public validateGroupeEtudeLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validGroupeEtudeLibelle = false;
        } else {
            this.validGroupeEtudeLibelle = true;
        }
    }






    get validGroupeEtudeLibelle(): boolean {
        return this._validGroupeEtudeLibelle;
    }
    set validGroupeEtudeLibelle(value: boolean) {
        this._validGroupeEtudeLibelle = value;
    }

}
