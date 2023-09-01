
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { ParcoursListAdminComponent } from './parcours/list/parcours-list-admin.component';
import { CoursListAdminComponent } from './cours/list/cours-list-admin.component';
import { SectionItemListAdminComponent } from './section-item/list/section-item-list-admin.component';
import { SectionListAdminComponent } from './section/list/section-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'parcours',
                            children: [
                                {
                                    path: 'list',
                                    component: ParcoursListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'cours',
                            children: [
                                {
                                    path: 'list',
                                    component: CoursListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'section-item',
                            children: [
                                {
                                    path: 'list',
                                    component: SectionItemListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'section',
                            children: [
                                {
                                    path: 'list',
                                    component: SectionListAdminComponent ,
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
export class CourseAdminRoutingModule { }
