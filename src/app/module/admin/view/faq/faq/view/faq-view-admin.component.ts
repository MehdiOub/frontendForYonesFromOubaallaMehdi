import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {FaqService} from 'src/app/controller/service/Faq.service';
import {FaqDto} from 'src/app/controller/model/Faq.model';
import {FaqCriteria} from 'src/app/controller/criteria/FaqCriteria.model';

import {FaqTypeDto} from 'src/app/controller/model/FaqType.model';
import {FaqTypeService} from 'src/app/controller/service/FaqType.service';
@Component({
  selector: 'app-faq-view-admin',
  templateUrl: './faq-view-admin.component.html'
})
export class FaqViewAdminComponent extends AbstractViewController<FaqDto, FaqCriteria, FaqService> implements OnInit {


    constructor(private faqService: FaqService, private faqTypeService: FaqTypeService){
        super(faqService);
    }

    ngOnInit(): void {
        this.faqType = new FaqTypeDto();
        this.faqTypeService.findAll().subscribe((data) => this.faqTypes = data);
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


}
