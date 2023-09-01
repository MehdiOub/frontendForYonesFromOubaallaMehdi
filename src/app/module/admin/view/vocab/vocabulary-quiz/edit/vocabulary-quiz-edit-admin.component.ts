import {Component, OnInit, Input} from '@angular/core';


import {AbstractEditController} from 'src/app/zynerator/controller/AbstractEditController';

import {VocabularyQuizService} from 'src/app/controller/service/VocabularyQuiz.service';
import {VocabularyQuizDto} from 'src/app/controller/model/VocabularyQuiz.model';
import {VocabularyQuizCriteria} from 'src/app/controller/criteria/VocabularyQuizCriteria.model';


import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
import {VocabularyDto} from 'src/app/controller/model/Vocabulary.model';
import {VocabularyService} from 'src/app/controller/service/Vocabulary.service';

@Component({
  selector: 'app-vocabulary-quiz-edit-admin',
  templateUrl: './vocabulary-quiz-edit-admin.component.html'
})
export class VocabularyQuizEditAdminComponent extends AbstractEditController<VocabularyQuizDto, VocabularyQuizCriteria, VocabularyQuizService>   implements OnInit {

    private _vocabularysElement = new VocabularyDto();

    private _validVocabularyQuizLibelle = true;

    private _validSectionCode = true;



    constructor( private vocabularyQuizService: VocabularyQuizService , private sectionService: SectionService, private vocabularyService: VocabularyService) {
        super(vocabularyQuizService);
    }

    ngOnInit(): void {
        this.vocabularysElement.section = new SectionDto();
        this.sectionService.findAll().subscribe((data) => this.sections = data);

    this.section = new SectionDto();
    this.sectionService.findAll().subscribe((data) => this.sections = data);
}
    public prepareEdit() {
        this.item.dateDebut = this.vocabularyQuizService.format(this.item.dateDebut);
        this.item.dateFin = this.vocabularyQuizService.format(this.item.dateFin);
    }



    public validateVocabularys(){
        this.errorMessages = new Array();
    }
    public setValidation(value : boolean){
        this.validVocabularyQuizLibelle = value;
        }
   public addVocabularys() {
        if( this.item.vocabularys == null )
            this.item.vocabularys = new Array<VocabularyDto>();
       this.validateVocabularys();
       if (this.errorMessages.length === 0) {
            if(this.vocabularysElement.id == null){
                this.item.vocabularys.push(this.vocabularysElement);
            }else{
                const index = this.item.vocabularys.findIndex(e => e.id == this.vocabularysElement.id);
                this.item.vocabularys[index] = this.vocabularysElement;
            }
          this.vocabularysElement = new VocabularyDto();
       }else{
            this.messageService.add({severity: 'error',summary: 'Erreurs', detail: 'Merci de corrigé les erreurs suivant : ' + this.errorMessages});
        }
   }

    public deleteVocabularys(p: VocabularyDto) {
        this.item.vocabularys.forEach((element, index) => {
            if (element === p) { this.item.vocabularys.splice(index, 1); }
        });
    }

    public editVocabularys(p: VocabularyDto) {
        this.vocabularysElement = {... p};
        this.activeTab = 0;
    }
    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateVocabularyQuizLibelle();
    }
    public validateVocabularyQuizLibelle(){
        if (this.stringUtilService.isEmpty(this.item.libelle)) {
            this.errorMessages.push('Libelle non valide');
            this.validVocabularyQuizLibelle = false;
        } else {
            this.validVocabularyQuizLibelle = true;
        }
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

    get vocabularysElement(): VocabularyDto {
        if( this._vocabularysElement == null )
            this._vocabularysElement = new VocabularyDto();
         return this._vocabularysElement;
    }

    set vocabularysElement(value: VocabularyDto) {
        this._vocabularysElement = value;
    }

    get validVocabularyQuizLibelle(): boolean {
        return this._validVocabularyQuizLibelle;
    }
    set validVocabularyQuizLibelle(value: boolean) {
        this._validVocabularyQuizLibelle = value;
    }

    get validSectionCode(): boolean {
        return this._validSectionCode;
    }
    set validSectionCode(value: boolean) {
        this._validSectionCode = value;
    }
}
