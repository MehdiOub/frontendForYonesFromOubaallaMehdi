
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { FaqEtudiantListAdminComponent } from './faq-etudiant/list/faq-etudiant-list-admin.component';
import { FaqProfListAdminComponent } from './faq-prof/list/faq-prof-list-admin.component';
import { FaqListAdminComponent } from './faq/list/faq-list-admin.component';
import { FaqTypeListAdminComponent } from './faq-type/list/faq-type-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'faq-etudiant',
                            children: [
                                {
                                    path: 'list',
                                    component: FaqEtudiantListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'faq-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: FaqProfListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'faq',
                            children: [
                                {
                                    path: 'list',
                                    component: FaqListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'faq-type',
                            children: [
                                {
                                    path: 'list',
                                    component: FaqTypeListAdminComponent ,
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
export class FaqAdminRoutingModule { }
