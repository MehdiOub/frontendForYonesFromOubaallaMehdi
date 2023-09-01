
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ClassAverageBonusListAdminComponent } from './class-average-bonus/list/class-average-bonus-list-admin.component';
import { NewsListAdminComponent } from './news/list/news-list-admin.component';
import { ContactListAdminComponent } from './contact/list/contact-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'class-average-bonus',
                            children: [
                                {
                                    path: 'list',
                                    component: ClassAverageBonusListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'news',
                            children: [
                                {
                                    path: 'list',
                                    component: NewsListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'contact',
                            children: [
                                {
                                    path: 'list',
                                    component: ContactListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                    ]
                },
            ]
        ),
    ],
    exports: [RouterModule],
})
export class CommonAdminRoutingModule { }
