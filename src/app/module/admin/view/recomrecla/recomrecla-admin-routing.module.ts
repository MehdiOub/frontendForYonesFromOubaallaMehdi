
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { TypeReclamationEtudiantListAdminComponent } from './type-reclamation-etudiant/list/type-reclamation-etudiant-list-admin.component';
import { ReclamationEtudiantListAdminComponent } from './reclamation-etudiant/list/reclamation-etudiant-list-admin.component';
import { ReclamationProfListAdminComponent } from './reclamation-prof/list/reclamation-prof-list-admin.component';
import { RecommendTeacherListAdminComponent } from './recommend-teacher/list/recommend-teacher-list-admin.component';
import { TypeReclamationProfListAdminComponent } from './type-reclamation-prof/list/type-reclamation-prof-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'type-reclamation-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeReclamationEtudiantListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'reclamation-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: ReclamationEtudiantListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'reclamation-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: ReclamationProfListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'recommend-teacher',
                            children: [
                                {
                                    path: 'list',
                                    component: RecommendTeacherListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'type-reclamation-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeReclamationProfListAdminComponent ,
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
export class RecomreclaAdminRoutingModule { }
