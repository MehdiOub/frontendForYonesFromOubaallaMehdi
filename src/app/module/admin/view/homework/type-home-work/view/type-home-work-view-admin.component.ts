import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeHomeWorkService} from 'src/app/controller/service/TypeHomeWork.service';
import {TypeHomeWorkDto} from 'src/app/controller/model/TypeHomeWork.model';
import {TypeHomeWorkCriteria} from 'src/app/controller/criteria/TypeHomeWorkCriteria.model';

@Component({
  selector: 'app-type-home-work-view-admin',
  templateUrl: './type-home-work-view-admin.component.html'
})
export class TypeHomeWorkViewAdminComponent extends AbstractViewController<TypeHomeWorkDto, TypeHomeWorkCriteria, TypeHomeWorkService> implements OnInit {


    constructor(private typeHomeWorkService: TypeHomeWorkService){
        super(typeHomeWorkService);
    }

    ngOnInit(): void {
    }




}
