import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {ToastModule} from 'primeng/toast';
import {ToolbarModule} from 'primeng/toolbar';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {InputSwitchModule} from 'primeng/inputswitch';
import {InputTextareaModule} from 'primeng/inputtextarea';

import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CalendarModule} from 'primeng/calendar';
import {PanelModule} from 'primeng/panel';
import {InputNumberModule} from 'primeng/inputnumber';
import {BadgeModule} from 'primeng/badge';
import { MultiSelectModule } from 'primeng/multiselect';
import {TranslateModule} from '@ngx-translate/core';
import {FileUploadModule} from "primeng/fileupload";

import { TypeDeQuestionCreateAdminComponent } from './type-de-question/create/type-de-question-create-admin.component';
import { TypeDeQuestionEditAdminComponent } from './type-de-question/edit/type-de-question-edit-admin.component';
import { TypeDeQuestionViewAdminComponent } from './type-de-question/view/type-de-question-view-admin.component';
import { TypeDeQuestionListAdminComponent } from './type-de-question/list/type-de-question-list-admin.component';
import { EtatReponseCreateAdminComponent } from './etat-reponse/create/etat-reponse-create-admin.component';
import { EtatReponseEditAdminComponent } from './etat-reponse/edit/etat-reponse-edit-admin.component';
import { EtatReponseViewAdminComponent } from './etat-reponse/view/etat-reponse-view-admin.component';
import { EtatReponseListAdminComponent } from './etat-reponse/list/etat-reponse-list-admin.component';

import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {TabViewModule} from 'primeng/tabview';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MessageModule } from 'primeng/message';
import {MessagesModule} from 'primeng/messages';
import {PaginatorModule} from 'primeng/paginator';



@NgModule({
  declarations: [

    TypeDeQuestionCreateAdminComponent,
    TypeDeQuestionListAdminComponent,
    TypeDeQuestionViewAdminComponent,
    TypeDeQuestionEditAdminComponent,
    EtatReponseCreateAdminComponent,
    EtatReponseListAdminComponent,
    EtatReponseViewAdminComponent,
    EtatReponseEditAdminComponent,
  ],
  imports: [
    CommonModule,
    ToastModule,
    ToolbarModule,
    TableModule,
    ConfirmDialogModule,
    DialogModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SplitButtonModule,
    BrowserAnimationsModule,
    DropdownModule,
    TabViewModule,
    InputSwitchModule,
    InputTextareaModule,
    CalendarModule,
    PanelModule,
    MessageModule,
    MessagesModule,
    InputNumberModule,
    BadgeModule,
    MultiSelectModule,
    PaginatorModule,
    TranslateModule,
    FileUploadModule,
  ],
  exports: [
  TypeDeQuestionCreateAdminComponent,
  TypeDeQuestionListAdminComponent,
  TypeDeQuestionViewAdminComponent,
  TypeDeQuestionEditAdminComponent,
  EtatReponseCreateAdminComponent,
  EtatReponseListAdminComponent,
  EtatReponseViewAdminComponent,
  EtatReponseEditAdminComponent,
  ],
  entryComponents: [],
})
export class QuizrefAdminModule { }
