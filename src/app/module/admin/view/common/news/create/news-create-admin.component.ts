import {Component, OnInit, Input} from '@angular/core';

import { AbstractCreateController } from 'src/app/zynerator/controller/AbstractCreateController';

import {NewsService} from 'src/app/controller/service/News.service';
import {NewsDto} from 'src/app/controller/model/News.model';
import {NewsCriteria} from 'src/app/controller/criteria/NewsCriteria.model';
@Component({
  selector: 'app-news-create-admin',
  templateUrl: './news-create-admin.component.html'
})
export class NewsCreateAdminComponent extends AbstractCreateController<NewsDto, NewsCriteria, NewsService>  implements OnInit {



   private _validNewsRef = true;

    constructor( private newsService: NewsService ) {
        super(newsService);
    }

    ngOnInit(): void {
}





    public setValidation(value: boolean){
        this.validNewsRef = value;
    }



    public validateForm(): void{
        this.errorMessages = new Array<string>();
        this.validateNewsRef();
    }

    public validateNewsRef(){
        if (this.stringUtilService.isEmpty(this.item.ref)) {
        this.errorMessages.push('Ref non valide');
        this.validNewsRef = false;
        } else {
            this.validNewsRef = true;
        }
    }






    get validNewsRef(): boolean {
        return this._validNewsRef;
    }

    set validNewsRef(value: boolean) {
         this._validNewsRef = value;
    }



}
