import {Component, OnInit} from '@angular/core';
import {TypeDeQuestionService} from 'src/app/controller/service/TypeDeQuestion.service';
import {TypeDeQuestionDto} from 'src/app/controller/model/TypeDeQuestion.model';
import {TypeDeQuestionCriteria} from 'src/app/controller/criteria/TypeDeQuestionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';



@Component({
  selector: 'app-type-de-question-list-admin',
  templateUrl: './type-de-question-list-admin.component.html'
})
export class TypeDeQuestionListAdminComponent extends AbstractListController<TypeDeQuestionDto, TypeDeQuestionCriteria, TypeDeQuestionService>  implements OnInit {

    fileName = 'TypeDeQuestion';


constructor( private typeDeQuestionService: TypeDeQuestionService ) {
        super(typeDeQuestionService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
    }

    public async loadTypeDeQuestions(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('TypeDeQuestion', 'list');
        isPermistted ? this.service.findAll().subscribe(typeDeQuestions => this.items = typeDeQuestions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'ref', header: 'Ref'},
            {field: 'lib', header: 'Lib'},
        ];
    }



	public initDuplicate(res: TypeDeQuestionDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Ref': e.ref ,
                 'Lib': e.lib ,
            }
        });

        this.criteriaData = [{
            'Ref': this.criteria.ref ? this.criteria.ref : environment.emptyForExport ,
            'Lib': this.criteria.lib ? this.criteria.lib : environment.emptyForExport ,
        }];
      }
}
