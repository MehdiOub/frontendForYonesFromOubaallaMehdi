import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {VocabularyService} from 'src/app/controller/service/Vocabulary.service';
import {VocabularyDto} from 'src/app/controller/model/Vocabulary.model';
import {VocabularyCriteria} from 'src/app/controller/criteria/VocabularyCriteria.model';
import {VocabularyQuizDto} from 'src/app/controller/model/VocabularyQuiz.model';
import {VocabularyQuizService} from 'src/app/controller/service/VocabularyQuiz.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
@Component({
  selector: 'app-vocabulary-create-admin',
  templateUrl: './vocabulary-create-admin.component.html'
})
export class VocabularyCreateAdminComponent extends AbstractCreateController<VocabularyDto, VocabularyCriteria, VocabularyService>  implements OnInit {



    private _validSectionCode = true;
    private _validVocabularyQuizLibelle = true;

    constructor( private vocabularyService: VocabularyService , private vocabularyQuizService: VocabularyQuizService, private sectionService: SectionService) {
        super(vocabularyService);
    }

    ngOnInit(): void {
    this.section = new SectionDto();
    this.sectionService.findAll().subscribe((data) => this.sections = data);
    this.vocabularyQuiz = new VocabularyQuizDto();
    this.vocabularyQuizService.findAll().subscribe((data) => this.vocabularyQuizs = data);
}





    public setValidation(value: boolean){
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
    }



    public async openCreateVocabularyQuiz(vocabularyQuiz: string) {
    const isPermistted = await this.roleService.isPermitted('VocabularyQuiz', 'add');
    if(isPermistted) {
         this.vocabularyQuiz = new VocabularyQuizDto();
         this.createVocabularyQuizDialog = true;
    }else{
        this.messageService.add({
        severity: 'error', summary: 'erreur', detail: 'problème de permission'
        });
     }
    }

    get vocabularyQuiz(): VocabularyQuizDto {
        return this.vocabularyQuizService.item;
    }
    set vocabularyQuiz(value: VocabularyQuizDto) {
        this.vocabularyQuizService.item = value;
    }
    get vocabularyQuizs(): Array<VocabularyQuizDto> {
        return this.vocabularyQuizService.items;
    }
    set vocabularyQuizs(value: Array<VocabularyQuizDto>) {
        this.vocabularyQuizService.items = value;
    }
    get createVocabularyQuizDialog(): boolean {
       return this.vocabularyQuizService.createDialog;
    }
    set createVocabularyQuizDialog(value: boolean) {
        this.vocabularyQuizService.createDialog= value;
    }
    get section(): SectionDto {
        return this.sectionService.item;
    }
    set section(value: SectionDto) {
        this.sectionService.item = value;
    }
    get sections(): Array<SectionDto> {
        return this.sectionService.items;
    }
    set sections(value: Array<SectionDto>) {
        this.sectionService.items = value;
    }
    get createSectionDialog(): boolean {
       return this.sectionService.createDialog;
    }
    set createSectionDialog(value: boolean) {
        this.sectionService.createDialog= value;
    }




    get validSectionCode(): boolean {
        return this._validSectionCode;
    }
    set validSectionCode(value: boolean) {
        this._validSectionCode = value;
    }
    get validVocabularyQuizLibelle(): boolean {
        return this._validVocabularyQuizLibelle;
    }
    set validVocabularyQuizLibelle(value: boolean) {
        this._validVocabularyQuizLibelle = value;
    }


}
