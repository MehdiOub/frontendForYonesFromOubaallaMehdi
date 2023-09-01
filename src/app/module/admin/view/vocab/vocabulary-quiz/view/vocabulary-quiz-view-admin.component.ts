import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {VocabularyQuizService} from 'src/app/controller/service/VocabularyQuiz.service';
import {VocabularyQuizDto} from 'src/app/controller/model/VocabularyQuiz.model';
import {VocabularyQuizCriteria} from 'src/app/controller/criteria/VocabularyQuizCriteria.model';

import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
import {VocabularyDto} from 'src/app/controller/model/Vocabulary.model';
import {VocabularyService} from 'src/app/controller/service/Vocabulary.service';
@Component({
  selector: 'app-vocabulary-quiz-view-admin',
  templateUrl: './vocabulary-quiz-view-admin.component.html'
})
export class VocabularyQuizViewAdminComponent extends AbstractViewController<VocabularyQuizDto, VocabularyQuizCriteria, VocabularyQuizService> implements OnInit {

    vocabularys = new VocabularyDto();
    vocabularyss: Array<VocabularyDto> = [];

    constructor(private vocabularyQuizService: VocabularyQuizService, private sectionService: SectionService, private vocabularyService: VocabularyService){
        super(vocabularyQuizService);
    }

    ngOnInit(): void {
        this.vocabularys.section = new SectionDto();
        this.sectionService.findAll().subscribe((data) => this.sections = data);
        this.section = new SectionDto();
        this.sectionService.findAll().subscribe((data) => this.sections = data);
    }


    get section(): SectionDto {
       return this.sectionService.item;
    }
    set section(value: SectionDto) {
        this.sectionService.item = value;
    }
    get sections():Array<SectionDto> {
       return this.sectionService.items;
    }
    set sections(value: Array<SectionDto>) {
        this.sectionService.items = value;
    }


}
