import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import * as moment from 'moment';

import { RoleService } from 'src/app/zynerator/security/Role.service';
import {environment} from 'src/environments/environment';
import {PaginatedList} from 'src/app/zynerator/dto/PaginatedList.model';
import {BaseDto} from 'src/app/zynerator/dto/BaseDto.model';

import {ScheduleProfDto} from '../model/ScheduleProf.model';
import {ScheduleProfCriteria} from '../criteria/ScheduleProfCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {GroupeEtudiantDto} from '../model/GroupeEtudiant.model';
import {CoursDto} from '../model/Cours.model';
import {ProfDto} from '../model/Prof.model';

@Injectable({
  providedIn: 'root'
})
export class ScheduleProfService extends AbstractService<ScheduleProfDto, ScheduleProfCriteria> {
     private _scheduleProf : ScheduleProfDto = new ScheduleProfDto();
     constructor(private http: HttpClient, private roleService: RoleService) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/scheduleProf/');
    }

    public constrcutDto(): ScheduleProfDto {
        return new ScheduleProfDto();
    }

    public constrcutCriteria(): ScheduleProfCriteria {
        return new ScheduleProfCriteria();
    }
    public findAll(): Observable<Array<ScheduleProfDto>> {
        return this.http.get<Array<ScheduleProfDto>>(environment.apiUrl + 'admin/scheduleProf/');
    }
    public findByMonth(mois: number): Observable<Array<ScheduleProfDto>> {
        return this.http.get<Array<ScheduleProfDto>>( environment.apiUrl +'admin/scheduleProf/month/'+ mois);
    }
    public saveNew(scheduleProf : ScheduleProfDto): Observable<ScheduleProfDto> {
        return this.http.post<ScheduleProfDto>(environment.apiUrl + 'admin/scheduleProf/', scheduleProf)
    }
    private _sheduleProfDtos : Array<ScheduleProfDto> = new Array<ScheduleProfDto>();


    get sheduleProfDtos(): Array<ScheduleProfDto> {
        if(!this._sheduleProfDtos){
              this._sheduleProfDtos=new Array<ScheduleProfDto>();
        }
        return this._sheduleProfDtos;
    }

    set sheduleProfDtos(value: Array<ScheduleProfDto>) {
        this._sheduleProfDtos = value;
    }

    get scheduleProf(): ScheduleProfDto {
        if(!this._scheduleProf){
            this._scheduleProf = new ScheduleProfDto();
        }
        return this._scheduleProf;
    }

    set scheduleProf(value: ScheduleProfDto) {
        this._scheduleProf = value;
    }
}
