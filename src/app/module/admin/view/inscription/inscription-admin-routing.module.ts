
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { DictionaryListAdminComponent } from './dictionary/list/dictionary-list-admin.component';
import { EtudiantListAdminComponent } from './etudiant/list/etudiant-list-admin.component';
import { InscriptionListAdminComponent } from './inscription/list/inscription-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'dictionary',
                            children: [
                                {
                                    path: 'list',
                                    component: DictionaryListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: EtudiantListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'inscription',
                            children: [
                                {
                                    path: 'list',
                                    component: InscriptionListAdminComponent ,
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
export class InscriptionAdminRoutingModule { }
