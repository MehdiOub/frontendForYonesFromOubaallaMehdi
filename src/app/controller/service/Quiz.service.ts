import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

import {environment} from 'src/environments/environment';

import {QuizDto} from '../model/Quiz.model';
import {QuizCriteria} from '../criteria/QuizCriteria.model';
import {AbstractService} from 'src/app/zynerator/service/AbstractService';

import {SectionDto} from '../model/Section.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService extends AbstractService<QuizDto, QuizCriteria> {
    private _sections: Array<SectionDto>

    constructor(private http: HttpClient) {
        super();
        this.setHttp(http);
        this.setApi(environment.apiUrl + 'admin/quiz/');
    }

    public findBySection(section: SectionDto): Observable<Array<QuizDto>> {
        return this.http.post<Array<QuizDto>>(this.API + 'by-section', section)
    }

    public constrcutDto(): QuizDto {
        return new QuizDto();
    }

    public constrcutCriteria(): QuizCriteria {
        return new QuizCriteria();
    }

    get sections(): Array<SectionDto> {
        if (this._sections == null)
            this._sections = new Array<SectionDto>()
        return this._sections;
    }

    set sections(value: Array<SectionDto>) {
        this._sections = value;
    }
}
