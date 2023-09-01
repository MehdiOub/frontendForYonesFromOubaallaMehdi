import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {PackStudentService} from 'src/app/controller/service/PackStudent.service';
import {PackStudentDto} from 'src/app/controller/model/PackStudent.model';
import {PackStudentCriteria} from 'src/app/controller/criteria/PackStudentCriteria.model';


import {PriceDto} from 'src/app/controller/model/Price.model';
import {PriceService} from 'src/app/controller/service/Price.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';

@Component({
  selector: 'app-pack-student-edit-admin',
  templateUrl: './pack-student-edit-admin.component.html'
})
export class PackStudentEditAdminComponent extends AbstractEditController<PackStudentDto, PackStudentCriteria, PackStudentService>   implements OnInit {


    private _validPackStudentCode = true;
    private _validPackStudentLibelle = true;

    private _validParcoursCode = true;
    private _validParcoursLibelle = true;
    private _validPriceLib = true;



    constructor( private packStudentService: PackStudentService , private priceService: PriceService, private parcoursService: ParcoursService) {
        super(packStudentService);
    }

    ngOnInit(): void {
    this.parcours = new ParcoursDto();
    this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
    this.price = new PriceDto();
    this.priceService.findAll().subscribe((data) => this.prices = data);
}


    public setValidation(value : boolean){
        this.validPackStudentCode = value;
        this.validPackStudentLibelle = value;
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validatePackStudentCode();
        this.validatePackStudentLibelle();
    }
    public validatePackStudentCode(){
        if (this.stringUtilService.isEmpty(this.item.code)) {
            this.errorMessages.push('Code non valide');
            this.validPackStudentCode = false;
        } else {
            this.validPackStudentCode = true;
        }
    }
    public validatePackStudentLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validPackStudentLibelle = false;
        } else {
            this.validPackStudentLibelle = true;
        }
    }




   get price(): PriceDto {
       return this.priceService.item;
   }
  set price(value: PriceDto) {
        this.priceService.item = value;
   }
   get prices(): Array<PriceDto> {
        return this.priceService.items;
   }
   set prices(value: Array<PriceDto>) {
        this.priceService.items = value;
   }
   get createPriceDialog(): boolean {
       return this.priceService.createDialog;
   }
  set createPriceDialog(value: boolean) {
       this.priceService.createDialog= value;
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


    get validPackStudentCode(): boolean {
        return this._validPackStudentCode;
    }
    set validPackStudentCode(value: boolean) {
        this._validPackStudentCode = value;
    }
    get validPackStudentLibelle(): boolean {
        return this._validPackStudentLibelle;
    }
    set validPackStudentLibelle(value: boolean) {
        this._validPackStudentLibelle = value;
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
    get validPriceLib(): boolean {
        return this._validPriceLib;
    }
    set validPriceLib(value: boolean) {
        this._validPriceLib = value;
    }
}
