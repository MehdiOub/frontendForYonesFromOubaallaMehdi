
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { SuperCategorieSectionListAdminComponent } from './super-categorie-section/list/super-categorie-section-list-admin.component';
import { CategorieSectionListAdminComponent } from './categorie-section/list/categorie-section-list-admin.component';
import { CentreListAdminComponent } from './centre/list/centre-list-admin.component';
import { EtatCoursListAdminComponent } from './etat-cours/list/etat-cours-list-admin.component';
import { LevelTestConfigurationListAdminComponent } from './level-test-configuration/list/level-test-configuration-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'super-categorie-section',
                            children: [
                                {
                                    path: 'list',
                                    component: SuperCategorieSectionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'categorie-section',
                            children: [
                                {
                                    path: 'list',
                                    component: CategorieSectionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'centre',
                            children: [
                                {
                                    path: 'list',
                                    component: CentreListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-cours',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatCoursListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'level-test-configuration',
                            children: [
                                {
                                    path: 'list',
                                    component: LevelTestConfigurationListAdminComponent ,
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
export class CourserefAdminRoutingModule { }
