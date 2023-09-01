
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { TypeTeacherListAdminComponent } from './type-teacher/list/type-teacher-list-admin.component';
import { TrancheHoraireProfListAdminComponent } from './tranche-horaire-prof/list/tranche-horaire-prof-list-admin.component';
import { CalendrierProfListAdminComponent } from './calendrier-prof/list/calendrier-prof-list-admin.component';
import { CategorieProfListAdminComponent } from './categorie-prof/list/categorie-prof-list-admin.component';
import { ProfListAdminComponent } from './prof/list/prof-list-admin.component';
import { ClassAverageBonusProfListAdminComponent } from './class-average-bonus-prof/list/class-average-bonus-prof-list-admin.component';
import { ScheduleProfListAdminComponent } from './schedule-prof/list/schedule-prof-list-admin.component';
import {FullScheduleComponent} from "./schedule-prof/full-schedule/full-schedule.component";
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'type-teacher',
                            children: [
                                {
                                    path: 'list',
                                    component: TypeTeacherListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'tranche-horaire-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: TrancheHoraireProfListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'calendrier-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: CalendrierProfListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'categorie-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: CategorieProfListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'prof',
                            children: [
                                {
                                    path: 'list',
                                    component: ProfListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'class-average-bonus-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: ClassAverageBonusProfListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'schedule-prof',
                            children: [
                                {
                                    path: 'list',
                                    component: ScheduleProfListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },
                        {

                            path: 'schedule-prof',
                            children: [
                                {
                                    path: 'full-schedule',
                                    component: FullScheduleComponent ,
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
export class ProfAdminRoutingModule { }
