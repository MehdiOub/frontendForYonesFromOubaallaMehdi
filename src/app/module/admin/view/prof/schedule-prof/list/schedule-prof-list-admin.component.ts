import {Component, OnInit} from '@angular/core';
import {ScheduleProfService} from 'src/app/controller/service/ScheduleProf.service';
import {ScheduleProfDto} from 'src/app/controller/model/ScheduleProf.model';
import {ScheduleProfCriteria} from 'src/app/controller/criteria/ScheduleProfCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {CoursDto} from 'src/app/controller/model/Cours.model';
import {CoursService} from 'src/app/controller/service/Cours.service';
import {GroupeEtudiantDto} from 'src/app/controller/model/GroupeEtudiant.model';
import {GroupeEtudiantService} from 'src/app/controller/service/GroupeEtudiant.service';


@Component({
  selector: 'app-schedule-prof-list-admin',
  templateUrl: './schedule-prof-list-admin.component.html'
})
export class ScheduleProfListAdminComponent extends AbstractListController<ScheduleProfDto, ScheduleProfCriteria, ScheduleProfService>  implements OnInit {

    fileName = 'ScheduleProf';

    groupeEtudiants :Array<GroupeEtudiantDto>;
    profs :Array<ProfDto>;
    courss :Array<CoursDto>;

constructor( private scheduleProfService: ScheduleProfService , private profService: ProfService, private coursService: CoursService, private groupeEtudiantService: GroupeEtudiantService) {
        super(scheduleProfService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadGroupeEtudiant();
      this.loadProf();
      this.loadCours();
    }

    public async loadScheduleProfs(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ScheduleProf', 'list');
        isPermistted ? this.service.findAll().subscribe(scheduleProfs => this.items = scheduleProfs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'subject', header: 'Subject'},
            {field: 'startTime', header: 'Start time'},
            {field: 'endTime', header: 'End time'},
            {field: 'ref', header: 'Ref'},
            {field: 'groupeEtudiant?.id', header: 'Groupe etudiant'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'cours?.libelle', header: 'Cours'},
            {field: 'grpName', header: 'Grp name'},
            {field: 'profName', header: 'Prof name'},
            {field: 'profsId', header: 'Profs id'},
        ];
    }


    public async loadGroupeEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ScheduleProf', 'list');
        isPermistted ? this.groupeEtudiantService.findAll().subscribe(groupeEtudiants => this.groupeEtudiants = groupeEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ScheduleProf', 'list');
        isPermistted ? this.profService.findAllOptimized().subscribe(profs => this.profs = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadCours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('ScheduleProf', 'list');
        isPermistted ? this.coursService.findAllOptimized().subscribe(courss => this.courss = courss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: ScheduleProfDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Subject': e.subject ,
                'Start time': this.datePipe.transform(e.startTime , 'dd/MM/yyyy hh:mm'),
                'End time': this.datePipe.transform(e.endTime , 'dd/MM/yyyy hh:mm'),
                 'Ref': e.ref ,
                'Groupe etudiant': e.groupeEtudiant?.id ,
                'Prof': e.prof?.ref ,
                'Cours': e.cours?.libelle ,
                 'Grp name': e.grpName ,
                 'Prof name': e.profName ,
                 'Profs id': e.profsId ,
            }
        });

        this.criteriaData = [{
            'Subject': this.criteria.subject ? this.criteria.subject : environment.emptyForExport ,
            'Start time Min': this.criteria.startTimeFrom ? this.datePipe.transform(this.criteria.startTimeFrom , this.dateFormat) : environment.emptyForExport ,
            'Start time Max': this.criteria.startTimeTo ? this.datePipe.transform(this.criteria.startTimeTo , this.dateFormat) : environment.emptyForExport ,
            'End time Min': this.criteria.endTimeFrom ? this.datePipe.transform(this.criteria.endTimeFrom , this.dateFormat) : environment.emptyForExport ,
            'End time Max': this.criteria.endTimeTo ? this.datePipe.transform(this.criteria.endTimeTo , this.dateFormat) : environment.emptyForExport ,
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
        //'Groupe etudiant': this.criteria.groupeEtudiant?.id ? this.criteria.groupeEtudiant?.id : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        //'Cours': this.criteria.cours?.libelle ? this.criteria.cours?.libelle : environment.emptyForExport ,
            'Grp name': this.criteria.grpName ? this.criteria.grpName : environment.emptyForExport ,
            'Prof name': this.criteria.profName ? this.criteria.profName : environment.emptyForExport ,
            'Profs id Min': this.criteria.profsIdMin ? this.criteria.profsIdMin : environment.emptyForExport ,
            'Profs id Max': this.criteria.profsIdMax ? this.criteria.profsIdMax : environment.emptyForExport ,
        }];
      }
}
