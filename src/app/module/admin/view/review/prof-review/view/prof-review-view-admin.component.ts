import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ProfReviewService} from 'src/app/controller/service/ProfReview.service';
import {ProfReviewDto} from 'src/app/controller/model/ProfReview.model';
import {ProfReviewCriteria} from 'src/app/controller/criteria/ProfReviewCriteria.model';

import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursService} from 'src/app/controller/service/Cours.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
@Component({
  selector: 'app-prof-review-view-admin',
  templateUrl: './prof-review-view-admin.component.html'
})
export class ProfReviewViewAdminComponent extends AbstractViewController<ProfReviewDto, ProfReviewCriteria, ProfReviewService> implements OnInit {


    constructor(private profReviewService: ProfReviewService, private profService: ProfService, private coursService: CoursService, private etudiantService: EtudiantService){
        super(profReviewService);
    }

    ngOnInit(): void {
        this.etudiant = new EtudiantDto();
        this.etudiantService.findAll().subscribe((data) => this.etudiants = data);
        this.prof = new ProfDto();
        this.profService.findAll().subscribe((data) => this.profs = data);
        this.cours = new CoursDto();
        this.coursService.findAll().subscribe((data) => this.courss = data);
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
    get etudiant(): EtudiantDto {
       return this.etudiantService.item;
    }
    set etudiant(value: EtudiantDto) {
        this.etudiantService.item = value;
    }
    get etudiants():Array<EtudiantDto> {
       return this.etudiantService.items;
    }
    set etudiants(value: Array<EtudiantDto>) {
        this.etudiantService.items = value;
    }


}
