import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {GroupeTypeService} from 'src/app/controller/service/GroupeType.service';
import {GroupeTypeDto} from 'src/app/controller/model/GroupeType.model';
import {GroupeTypeCriteria} from 'src/app/controller/criteria/GroupeTypeCriteria.model';

@Component({
  selector: 'app-groupe-type-view-admin',
  templateUrl: './groupe-type-view-admin.component.html'
})
export class GroupeTypeViewAdminComponent extends AbstractViewController<GroupeTypeDto, GroupeTypeCriteria, GroupeTypeService> implements OnInit {


    constructor(private groupeTypeService: GroupeTypeService){
        super(groupeTypeService);
    }

    ngOnInit(): void {
    }




}
