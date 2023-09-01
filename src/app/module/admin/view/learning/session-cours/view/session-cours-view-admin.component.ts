import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {SessionCoursService} from 'src/app/controller/service/SessionCours.service';
import {SessionCoursDto} from 'src/app/controller/model/SessionCours.model';
import {SessionCoursCriteria} from 'src/app/controller/criteria/SessionCoursCriteria.model';

import {CategorieSectionDto} from 'src/app/controller/model/CategorieSection.model';
import {CategorieSectionService} from 'src/app/controller/service/CategorieSection.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
import {SectionItemDto} from 'src/app/controller/model/SectionItem.model';
import {SectionItemService} from 'src/app/controller/service/SectionItem.service';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursService} from 'src/app/controller/service/Cours.service';
import {SalaryDto} from 'src/app/controller/model/Salary.model';
import {SalaryService} from 'src/app/controller/service/Salary.service';
import {GroupeEtudiantDto} from 'src/app/controller/model/GroupeEtudiant.model';
import {GroupeEtudiantService} from 'src/app/controller/service/GroupeEtudiant.service';
@Component({
  selector: 'app-session-cours-view-admin',
  templateUrl: './session-cours-view-admin.component.html'
})
export class SessionCoursViewAdminComponent extends AbstractViewController<SessionCoursDto, SessionCoursCriteria, SessionCoursService> implements OnInit {

    sections = new SectionDto();
    sectionss: Array<SectionDto> = [];

    constructor(private sessionCoursService: SessionCoursService, private profService: ProfService, private categorieSectionService: CategorieSectionService, private coursService: CoursService, private sectionService: SectionService, private salaryService: SalaryService, private groupeEtudiantService: GroupeEtudiantService){
        super(sessionCoursService);
    }

    ngOnInit(): void {
        this.sections.categorieSection = new CategorieSectionDto();
        this.categorieSectionService.findAll().subscribe((data) => this.categorieSections = data);
        this.sections.cours = new CoursDto();
        this.coursService.findAll().subscribe((data) => this.courss = data);
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
        this.cours = new CoursDto();
        this.coursService.findAll().subscribe((data) => this.courss = data);
        this.groupeEtudiant = new GroupeEtudiantDto();
        this.groupeEtudiantService.findAll().subscribe((data) => this.groupeEtudiants = data);
        this.salary = new SalaryDto();
        this.salaryService.findAll().subscribe((data) => this.salarys = data);
    }


    get prof(): ProfDto {
       return this.profService.item;
    }
    set prof(value: ProfDto) {
        this.profService.item = value;
    }
    get profs():Array<ProfDto> {
       return this.profService.items;
    }
    set profs(value: Array<ProfDto>) {
        this.profService.items = value;
    }
    get cours(): CoursDto {
       return this.coursService.item;
    }
    set cours(value: CoursDto) {
        this.coursService.item = value;
    }
    get courss():Array<CoursDto> {
       return this.coursService.items;
    }
    set courss(value: Array<CoursDto>) {
        this.coursService.items = value;
    }
    get groupeEtudiant(): GroupeEtudiantDto {
       return this.groupeEtudiantService.item;
    }
    set groupeEtudiant(value: GroupeEtudiantDto) {
        this.groupeEtudiantService.item = value;
    }
    get groupeEtudiants():Array<GroupeEtudiantDto> {
       return this.groupeEtudiantService.items;
    }
    set groupeEtudiants(value: Array<GroupeEtudiantDto>) {
        this.groupeEtudiantService.items = value;
    }
    get categorieSection(): CategorieSectionDto {
       return this.categorieSectionService.item;
    }
    set categorieSection(value: CategorieSectionDto) {
        this.categorieSectionService.item = value;
    }
    get categorieSections():Array<CategorieSectionDto> {
       return this.categorieSectionService.items;
    }
    set categorieSections(value: Array<CategorieSectionDto>) {
        this.categorieSectionService.items = value;
    }
    get salary(): SalaryDto {
       return this.salaryService.item;
    }
    set salary(value: SalaryDto) {
        this.salaryService.item = value;
    }
    get salarys():Array<SalaryDto> {
       return this.salaryService.items;
    }
    set salarys(value: Array<SalaryDto>) {
        this.salaryService.items = value;
    }


}
