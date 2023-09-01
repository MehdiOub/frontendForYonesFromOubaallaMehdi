import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {LevelTestConfigurationService} from 'src/app/controller/service/LevelTestConfiguration.service';
import {LevelTestConfigurationDto} from 'src/app/controller/model/LevelTestConfiguration.model';
import {LevelTestConfigurationCriteria} from 'src/app/controller/criteria/LevelTestConfigurationCriteria.model';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
@Component({
  selector: 'app-level-test-configuration-create-admin',
  templateUrl: './level-test-configuration-create-admin.component.html'
})
export class LevelTestConfigurationCreateAdminComponent extends AbstractCreateController<LevelTestConfigurationDto, LevelTestConfigurationCriteria, LevelTestConfigurationService>  implements OnInit {



    private _validParcoursCode = true;
    private _validParcoursLibelle = true;

    constructor( private levelTestConfigurationService: LevelTestConfigurationService , private parcoursService: ParcoursService) {
        super(levelTestConfigurationService);
    }

    ngOnInit(): void {
    this.parcours = new ParcoursDto();
    this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }




    get parcours(): ParcoursDto {
        return this.parcoursService.item;
    }
    set parcours(value: ParcoursDto) {
        this.parcoursService.item = value;
    }
    get parcourss(): Array<ParcoursDto> {
        return this.parcoursService.items;
    }
    set parcourss(value: Array<ParcoursDto>) {
        this.parcoursService.items = value;
    }
    get createParcoursDialog(): boolean {
       return this.parcoursService.createDialog;
    }
    set createParcoursDialog(value: boolean) {
        this.parcoursService.createDialog= value;
    }




    get validParcoursCode(): boolean {
        return this._validParcoursCode;
    }
    set validParcoursCode(value: boolean) {
        this._validParcoursCode = value;
    }
    get validParcoursLibelle(): boolean {
        return this._validParcoursLibelle;
    }
    set validParcoursLibelle(value: boolean) {
        this._validParcoursLibelle = value;
    }


}
