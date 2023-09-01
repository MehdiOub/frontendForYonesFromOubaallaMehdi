import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {TypeTeacherService} from 'src/app/controller/service/TypeTeacher.service';
import {TypeTeacherDto} from 'src/app/controller/model/TypeTeacher.model';
import {TypeTeacherCriteria} from 'src/app/controller/criteria/TypeTeacherCriteria.model';

@Component({
  selector: 'app-type-teacher-view-admin',
  templateUrl: './type-teacher-view-admin.component.html'
})
export class TypeTeacherViewAdminComponent extends AbstractViewController<TypeTeacherDto, TypeTeacherCriteria, TypeTeacherService> implements OnInit {


    constructor(private typeTeacherService: TypeTeacherService){
        super(typeTeacherService);
    }

    ngOnInit(): void {
    }




}
