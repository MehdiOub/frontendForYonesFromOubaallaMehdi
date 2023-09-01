
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { VocabularyListAdminComponent } from './vocabulary/list/vocabulary-list-admin.component';
import { VocabularyQuizListAdminComponent } from './vocabulary-quiz/list/vocabulary-quiz-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'vocabulary',
                            children: [
                                {
                                    path: 'list',
                                    component: VocabularyListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'vocabulary-quiz',
                            children: [
                                {
                                    path: 'list',
                                    component: VocabularyQuizListAdminComponent ,
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
export class VocabAdminRoutingModule { }
