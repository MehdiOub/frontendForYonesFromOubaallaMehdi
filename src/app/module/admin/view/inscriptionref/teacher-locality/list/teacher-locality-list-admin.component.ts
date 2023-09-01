import {Component, OnInit} from '@angular/core';
import {TeacherLocalityService} from 'src/app/controller/service/TeacherLocality.service';
import {TeacherLocalityDto} from 'src/app/controller/model/TeacherLocality.model';
import {TeacherLocalityCriteria} from 'src/app/controller/criteria/TeacherLocalityCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-teacher-locality-list-admin',
  templateUrl: './teacher-locality-list-admin.component.html'
})
export class TeacherLocalityListAdminComponent extends AbstractListController<TeacherLocalityDto, TeacherLocalityCriteria, TeacherLocalityService>  implements OnInit {

    fileName = 'TeacherLocality';


constructor( private teacherLocalityService: TeacherLocalityService ) {
        super(teacherLocalityService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadTeacherLocalitys(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TeacherLocality', 'list');
        isPermistted ? this.service.findAll().subscribe(teacherLocalitys => this.items = teacherLocalitys,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'code', header: 'Code'},
            {field: 'libelle', header: 'Libelle'},
        ];
    }



	public initDuplicate(res: TeacherLocalityDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Code': e.code ,
                 'Libelle': e.libelle ,
            }
        });

        this.criteriaData = [{
            'Code': this.criteria.code ? this.criteria.code : environment.emptyForExport ,
            'Libelle': this.criteria.libelle ? this.criteria.libelle : environment.emptyForExport ,
        }];
      }
}
