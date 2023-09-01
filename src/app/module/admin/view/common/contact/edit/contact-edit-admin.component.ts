import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {ContactService} from 'src/app/controller/service/Contact.service';
import {ContactDto} from 'src/app/controller/model/Contact.model';
import {ContactCriteria} from 'src/app/controller/criteria/ContactCriteria.model';



@Component({
  selector: 'app-contact-edit-admin',
  templateUrl: './contact-edit-admin.component.html'
})
export class ContactEditAdminComponent extends AbstractEditController<ContactDto, ContactCriteria, ContactService>   implements OnInit {






    constructor( private contactService: ContactService ) {
        super(contactService);
    }

    ngOnInit(): void {
}
    public prepareEdit() {
        this.item.dateContact = this.contactService.format(this.item.dateContact);
    }



    public setValidation(value : boolean){
        }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }







}
