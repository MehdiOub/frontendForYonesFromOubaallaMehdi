import {Component, OnInit} from '@angular/core';
import {SessionCoursService} from 'src/app/controller/service/SessionCours.service';
import {SessionCoursDto} from 'src/app/controller/model/SessionCours.model';
import {SessionCoursCriteria} from 'src/app/controller/criteria/SessionCoursCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

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
  selector: 'app-session-cours-list-admin',
  templateUrl: './session-cours-list-admin.component.html'
})
export class SessionCoursListAdminComponent extends AbstractListController<SessionCoursDto, SessionCoursCriteria, SessionCoursService>  implements OnInit {

    fileName = 'SessionCours';

     yesOrNoPayer :any[] =[];
    profs :Array<ProfDto>;
    courss :Array<CoursDto>;
    groupeEtudiants :Array<GroupeEtudiantDto>;
    salarys :Array<SalaryDto>;

constructor( private sessionCoursService: SessionCoursService , private profService: ProfService, private categorieSectionService: CategorieSectionService, private coursService: CoursService, private sectionService: SectionService, private salaryService: SalaryService, private groupeEtudiantService: GroupeEtudiantService) {
        super(sessionCoursService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadProf();
      this.loadCours();
      this.loadGroupeEtudiant();
      this.loadSalary();
    this.yesOrNoPayer =  [{label: 'Payer', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadSessionCourss(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('SessionCours', 'list');
        isPermistted ? this.service.findAll().subscribe(sessionCourss => this.items = sessionCourss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'cours?.libelle', header: 'Cours'},
            {field: 'groupeEtudiant?.id', header: 'Groupe etudiant'},
            {field: 'duree', header: 'Duree'},
            {field: 'totalheure', header: 'Totalheure'},
            {field: 'mois', header: 'Mois'},
            {field: 'annee', header: 'Annee'},
            {field: 'dateFin', header: 'Date fin'},
            {field: 'dateDebut', header: 'Date debut'},
            {field: 'payer', header: 'Payer'},
            {field: 'salary?.code', header: 'Salary'},
        ];
    }


    public async loadProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('SessionCours', 'list');
        isPermistted ? this.profService.findAllOptimized().subscribe(profs => this.profs = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadCours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('SessionCours', 'list');
        isPermistted ? this.coursService.findAllOptimized().subscribe(courss => this.courss = courss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadGroupeEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('SessionCours', 'list');
        isPermistted ? this.groupeEtudiantService.findAll().subscribe(groupeEtudiants => this.groupeEtudiants = groupeEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadSalary(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('SessionCours', 'list');
        isPermistted ? this.salaryService.findAllOptimized().subscribe(salarys => this.salarys = salarys,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: SessionCoursDto) {
        if (res.sections != null) {
             res.sections.forEach(d => { d.sessionCours = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Prof': e.prof?.ref ,
                'Cours': e.cours?.libelle ,
                'Groupe etudiant': e.groupeEtudiant?.id ,
                 'Duree': e.duree ,
                 'Totalheure': e.totalheure ,
                 'Mois': e.mois ,
                 'Annee': e.annee ,
                'Date fin': this.datePipe.transform(e.dateFin , 'dd/MM/yyyy hh:mm'),
                'Date debut': this.datePipe.transform(e.dateDebut , 'dd/MM/yyyy hh:mm'),
                'Payer': e.payer? 'Vrai' : 'Faux' ,
                'Salary': e.salary?.code ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        //'Cours': this.criteria.cours?.libelle ? this.criteria.cours?.libelle : environment.emptyForExport ,
        //'Groupe etudiant': this.criteria.groupeEtudiant?.id ? this.criteria.groupeEtudiant?.id : environment.emptyForExport ,
            'Duree Min': this.criteria.dureeMin ? this.criteria.dureeMin : environment.emptyForExport ,
            'Duree Max': this.criteria.dureeMax ? this.criteria.dureeMax : environment.emptyForExport ,
            'Totalheure Min': this.criteria.totalheureMin ? this.criteria.totalheureMin : environment.emptyForExport ,
            'Totalheure Max': this.criteria.totalheureMax ? this.criteria.totalheureMax : environment.emptyForExport ,
            'Mois Min': this.criteria.moisMin ? this.criteria.moisMin : environment.emptyForExport ,
            'Mois Max': this.criteria.moisMax ? this.criteria.moisMax : environment.emptyForExport ,
            'Annee Min': this.criteria.anneeMin ? this.criteria.anneeMin : environment.emptyForExport ,
            'Annee Max': this.criteria.anneeMax ? this.criteria.anneeMax : environment.emptyForExport ,
            'Date fin Min': this.criteria.dateFinFrom ? this.datePipe.transform(this.criteria.dateFinFrom , this.dateFormat) : environment.emptyForExport ,
            'Date fin Max': this.criteria.dateFinTo ? this.datePipe.transform(this.criteria.dateFinTo , this.dateFormat) : environment.emptyForExport ,
            'Date debut Min': this.criteria.dateDebutFrom ? this.datePipe.transform(this.criteria.dateDebutFrom , this.dateFormat) : environment.emptyForExport ,
            'Date debut Max': this.criteria.dateDebutTo ? this.datePipe.transform(this.criteria.dateDebutTo , this.dateFormat) : environment.emptyForExport ,
            'Payer': this.criteria.payer ? (this.criteria.payer ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
        //'Salary': this.criteria.salary?.code ? this.criteria.salary?.code : environment.emptyForExport ,
        }];
      }
}
