import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {NewsService} from 'src/app/controller/service/News.service';
import {NewsDto} from 'src/app/controller/model/News.model';
import {NewsCriteria} from 'src/app/controller/criteria/NewsCriteria.model';

@Component({
  selector: 'app-news-view-admin',
  templateUrl: './news-view-admin.component.html'
})
export class NewsViewAdminComponent extends AbstractViewController<NewsDto, NewsCriteria, NewsService> implements OnInit {


    constructor(private newsService: NewsService){
        super(newsService);
    }

    ngOnInit(): void {
    }




}
