import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {ContactService} from 'src/app/controller/service/Contact.service';
import {ContactDto} from 'src/app/controller/model/Contact.model';
import {ContactCriteria} from 'src/app/controller/criteria/ContactCriteria.model';
@Component({
  selector: 'app-contact-create-admin',
  templateUrl: './contact-create-admin.component.html'
})
export class ContactCreateAdminComponent extends AbstractCreateController<ContactDto, ContactCriteria, ContactService>  implements OnInit {




    constructor( private contactService: ContactService ) {
        super(contactService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }










}
