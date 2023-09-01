
// const root = environment.rootAppUrl;

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/controller/guards/auth.guard';



import { FreeTrialConfigurationListAdminComponent } from './free-trial-configuration/list/free-trial-configuration-list-admin.component';
import { StatutFreeTrialListAdminComponent } from './statut-free-trial/list/statut-free-trial-list-admin.component';
import { ServicesListAdminComponent } from './services/list/services-list-admin.component';
import { FreeTrialStudentWhatsTemplateListAdminComponent } from './free-trial-student-whats-template/list/free-trial-student-whats-template-list-admin.component';
import { FreeTrialTeacherEmailTemplateListAdminComponent } from './free-trial-teacher-email-template/list/free-trial-teacher-email-template-list-admin.component';
import { FreeTrialformuleListAdminComponent } from './free-trialformule/list/free-trialformule-list-admin.component';
import { FreeTrialListAdminComponent } from './free-trial/list/free-trial-list-admin.component';
import { FreeTrialTeacherWhatsTemplateListAdminComponent } from './free-trial-teacher-whats-template/list/free-trial-teacher-whats-template-list-admin.component';
import { FreeTrialStudentEmailTemplateListAdminComponent } from './free-trial-student-email-template/list/free-trial-student-email-template-list-admin.component';
import { FreeTrialDetailListAdminComponent } from './free-trial-detail/list/free-trial-detail-list-admin.component';
@NgModule({
    imports: [
        RouterModule.forChild(
            [
                {
                    path: '',
                    children: [


                        {

                            path: 'free-trial-configuration',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialConfigurationListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'statut-free-trial',
                            children: [
                                {
                                    path: 'list',
                                    component: StatutFreeTrialListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'services',
                            children: [
                                {
                                    path: 'list',
                                    component: ServicesListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial-student-whats-template',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialStudentWhatsTemplateListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial-teacher-email-template',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialTeacherEmailTemplateListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trialformule',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialformuleListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial-teacher-whats-template',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialTeacherWhatsTemplateListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial-student-email-template',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialStudentEmailTemplateListAdminComponent ,
                                    canActivate: [AuthGuard]
                                }
                            ]
                        },

                        {

                            path: 'free-trial-detail',
                            children: [
                                {
                                    path: 'list',
                                    component: FreeTrialDetailListAdminComponent ,
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
export class FreetrialAdminRoutingModule { }
