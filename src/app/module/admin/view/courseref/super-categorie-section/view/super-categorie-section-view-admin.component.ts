import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {SuperCategorieSectionService} from 'src/app/controller/service/SuperCategorieSection.service';
import {SuperCategorieSectionDto} from 'src/app/controller/model/SuperCategorieSection.model';
import {SuperCategorieSectionCriteria} from 'src/app/controller/criteria/SuperCategorieSectionCriteria.model';

import {CategorieSectionDto} from 'src/app/controller/model/CategorieSection.model';
import {CategorieSectionService} from 'src/app/controller/service/CategorieSection.service';
import {SectionDto} from 'src/app/controller/model/Section.model';
import {SectionService} from 'src/app/controller/service/Section.service';
@Component({
  selector: 'app-super-categorie-section-view-admin',
  templateUrl: './super-categorie-section-view-admin.component.html'
})
export class SuperCategorieSectionViewAdminComponent extends AbstractViewController<SuperCategorieSectionDto, SuperCategorieSectionCriteria, SuperCategorieSectionService> implements OnInit {

    categorieSections = new CategorieSectionDto();
    categorieSectionss: Array<CategorieSectionDto> = [];

    constructor(private superCategorieSectionService: SuperCategorieSectionService, private categorieSectionService: CategorieSectionService){
        super(superCategorieSectionService);
    }

    ngOnInit(): void {
    }




}
