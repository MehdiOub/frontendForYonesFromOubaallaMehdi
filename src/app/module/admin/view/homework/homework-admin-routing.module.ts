
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { HomeWorkQuestionListAdminComponent } from './home-work-question/list/home-work-question-list-admin.component';
import { HomeWorkListAdminComponent } from './home-work/list/home-work-list-admin.component';
import { ResultatHomeWorkListAdminComponent } from './resultat-home-work/list/resultat-home-work-list-admin.component';
import { ReponseEtudiantHomeWorkListAdminComponent } from './reponse-etudiant-home-work/list/reponse-etudiant-home-work-list-admin.component';
import { HoweWorkQSTReponseListAdminComponent } from './howe-work-q-s-t-reponse/list/howe-work-q-s-t-reponse-list-admin.component';
import { TypeHomeWorkListAdminComponent } from './type-home-work/list/type-home-work-list-admin.component';
import { HomeWorkEtudiantListAdminComponent } from './home-work-etudiant/list/home-work-etudiant-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'home-work-question',
                            children: [
                                {
                                    path: 'list',
                                    component: HomeWorkQuestionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'home-work',
                            children: [
                                {
                                    path: 'list',
                                    component: HomeWorkListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'resultat-home-work',
                            children: [
                                {
                                    path: 'list',
                                    component: ResultatHomeWorkListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'reponse-etudiant-home-work',
                            children: [
                                {
                                    path: 'list',
                                    component: ReponseEtudiantHomeWorkListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'howe-work-q-s-t-reponse',
                            children: [
                                {
                                    path: 'list',
                                    component: HoweWorkQSTReponseListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-home-work',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeHomeWorkListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'home-work-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: HomeWorkEtudiantListAdminComponent ,
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
export class HomeworkAdminRoutingModule { }
