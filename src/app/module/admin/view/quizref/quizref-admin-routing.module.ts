
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { TypeDeQuestionListAdminComponent } from './type-de-question/list/type-de-question-list-admin.component';
import { EtatReponseListAdminComponent } from './etat-reponse/list/etat-reponse-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'type-de-question',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeDeQuestionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etat-reponse',
                            children: [
                                {
                                    path: 'list',
                                    component: EtatReponseListAdminComponent ,
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
export class QuizrefAdminRoutingModule { }
