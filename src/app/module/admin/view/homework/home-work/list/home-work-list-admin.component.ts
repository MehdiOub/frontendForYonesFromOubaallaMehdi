import {Component, OnInit} from '@angular/core';
import {HomeWorkService} from 'src/app/controller/service/HomeWork.service';
import {HomeWorkDto} from 'src/app/controller/model/HomeWork.model';
import {HomeWorkCriteria} from 'src/app/controller/criteria/HomeWorkCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {TypeDeQuestionDto} from 'src/app/controller/model/TypeDeQuestion.model';
import {TypeDeQuestionService} from 'src/app/controller/service/TypeDeQuestion.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {ResultatHomeWorkDto} from 'src/app/controller/model/ResultatHomeWork.model';
import {ResultatHomeWorkService} from 'src/app/controller/service/ResultatHomeWork.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursService} from 'src/app/controller/service/Cours.service';
import {HoweWorkQSTReponseDto} from 'src/app/controller/model/HoweWorkQSTReponse.model';
import {HoweWorkQSTReponseService} from 'src/app/controller/service/HoweWorkQSTReponse.service';
import {ReponseEtudiantHomeWorkDto} from 'src/app/controller/model/ReponseEtudiantHomeWork.model';
import {ReponseEtudiantHomeWorkService} from 'src/app/controller/service/ReponseEtudiantHomeWork.service';
import {HomeWorkQuestionDto} from 'src/app/controller/model/HomeWorkQuestion.model';
import {HomeWorkQuestionService} from 'src/app/controller/service/HomeWorkQuestion.service';
import {HomeWorkEtudiantDto} from 'src/app/controller/model/HomeWorkEtudiant.model';
import {HomeWorkEtudiantService} from 'src/app/controller/service/HomeWorkEtudiant.service';
import {TypeHomeWorkDto} from 'src/app/controller/model/TypeHomeWork.model';
import {TypeHomeWorkService} from 'src/app/controller/service/TypeHomeWork.service';


@Component({
  selector: 'app-home-work-list-admin',
  templateUrl: './home-work-list-admin.component.html'
})
export class HomeWorkListAdminComponent extends AbstractListController<HomeWorkDto, HomeWorkCriteria, HomeWorkService>  implements OnInit {

    fileName = 'HomeWork';

    courss :Array<CoursDto>;
    typeHomeWorks :Array<TypeHomeWorkDto>;

constructor( private homeWorkService: HomeWorkService , private typeDeQuestionService: TypeDeQuestionService, private resultatHomeWorkService: ResultatHomeWorkService, private coursService: CoursService, private homeWorkQuestionService: HomeWorkQuestionService, private etudiantService: EtudiantService, private homeWorkEtudiantService: HomeWorkEtudiantService, private typeHomeWorkService: TypeHomeWorkService) {
        super(homeWorkService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadCours();
      this.loadTypeHomeWork();
    }

    public async loadHomeWorks(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('HomeWork', 'list');
        isPermistted ? this.service.findAll().subscribe(homeWorks => this.items = homeWorks,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'libelle', header: 'Libelle'},
            {field: 'urlImage', header: 'Url image'},
            {field: 'urlVideo', header: 'Url video'},
            {field: 'cours?.libelle', header: 'Cours'},
            {field: 'typeHomeWork?.lib', header: 'Type home work'},
        ];
    }


    public async loadCours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('HomeWork', 'list');
        isPermistted ? this.coursService.findAllOptimized().subscribe(courss => this.courss = courss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadTypeHomeWork(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('HomeWork', 'list');
        isPermistted ? this.typeHomeWorkService.findAllOptimized().subscribe(typeHomeWorks => this.typeHomeWorks = typeHomeWorks,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: HomeWorkDto) {
        if (res.homeWorkQuestions != null) {
             res.homeWorkQuestions.forEach(d => { d.homeWork = null; d.id = null; });
        }
        if (res.homeWorkEtudiants != null) {
             res.homeWorkEtudiants.forEach(d => { d.homeWork = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Libelle': e.libelle ,
                 'Url image': e.urlImage ,
                 'Url video': e.urlVideo ,
                'Cours': e.cours?.libelle ,
                'Type home work': e.typeHomeWork?.lib ,
            }
        });

        this.criteriaData = [{
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
            'Url image': this.criteria.urlImage ? this.criteria.urlImage : environment.emptyForExport ,
            'Url video': this.criteria.urlVideo ? this.criteria.urlVideo : environment.emptyForExport ,
        //'Cours': this.criteria.cours?.libelle ? this.criteria.cours?.libelle : environment.emptyForExport ,
        //'Type home work': this.criteria.typeHomeWork?.lib ? this.criteria.typeHomeWork?.lib : environment.emptyForExport ,
        }];
      }
}
