
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { QuizListAdminComponent } from './quiz/list/quiz-list-admin.component';
import { QuestionListAdminComponent } from './question/list/question-list-admin.component';
import { ReponseListAdminComponent } from './reponse/list/reponse-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'quiz',
                            children: [
                                {
                                    path: 'list',
                                    component: QuizListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'question',
                            children: [
                                {
                                    path: 'list',
                                    component: QuestionListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'reponse',
                            children: [
                                {
                                    path: 'list',
                                    component: ReponseListAdminComponent ,
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
export class QuizAdminRoutingModule { }
