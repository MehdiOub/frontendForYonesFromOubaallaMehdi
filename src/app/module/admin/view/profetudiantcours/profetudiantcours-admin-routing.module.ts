
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { EtudiantCoursListAdminComponent } from './etudiant-cours/list/etudiant-cours-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'etudiant-cours',
                            children: [
                                {
                                    path: 'list',
                                    component: EtudiantCoursListAdminComponent ,
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
export class ProfetudiantcoursAdminRoutingModule { }
