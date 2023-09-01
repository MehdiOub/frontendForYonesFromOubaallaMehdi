import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ServicesService} from 'src/app/controller/service/Services.service';
import {ServicesDto} from 'src/app/controller/model/Services.model';
import {ServicesCriteria} from 'src/app/controller/criteria/ServicesCriteria.model';

@Component({
  selector: 'app-services-view-admin',
  templateUrl: './services-view-admin.component.html'
})
export class ServicesViewAdminComponent extends AbstractViewController<ServicesDto, ServicesCriteria, ServicesService> implements OnInit {


    constructor(private servicesService: ServicesService){
        super(servicesService);
    }

    ngOnInit(): void {
    }




}
