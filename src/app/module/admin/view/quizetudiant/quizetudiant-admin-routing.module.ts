
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { QuizEtudiantListAdminComponent } from './quiz-etudiant/list/quiz-etudiant-list-admin.component';
import { ReponseEtudiantListAdminComponent } from './reponse-etudiant/list/reponse-etudiant-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'quiz-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: QuizEtudiantListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'reponse-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: ReponseEtudiantListAdminComponent ,
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
export class QuizetudiantAdminRoutingModule { }
