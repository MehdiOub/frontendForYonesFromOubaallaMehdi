import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {SectionDto} from '../model/Section.model';
import {SectionCriteria} from '../criteria/SectionCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

@Injectable({
  providedIn: 'root'
})
export class SectionService extends AbstractService<SectionDto, SectionCriteria> {
     constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/section/');
    }

    public constrcutDto(): SectionDto {
        return new SectionDto();
    }

    public constrcutCriteria(): SectionCriteria {
        return new SectionCriteria();
    }

    public findNeededQuiz(): Observable<Array<SectionDto>> {
        return this.http.get<Array<SectionDto>>(this.API + 'need-quiz')
    }
}
