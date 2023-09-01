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

import { VocabularyCreateAdminComponent } from './vocabulary/create/vocabulary-create-admin.component';
import { VocabularyEditAdminComponent } from './vocabulary/edit/vocabulary-edit-admin.component';
import { VocabularyViewAdminComponent } from './vocabulary/view/vocabulary-view-admin.component';
import { VocabularyListAdminComponent } from './vocabulary/list/vocabulary-list-admin.component';
import { VocabularyQuizCreateAdminComponent } from './vocabulary-quiz/create/vocabulary-quiz-create-admin.component';
import { VocabularyQuizEditAdminComponent } from './vocabulary-quiz/edit/vocabulary-quiz-edit-admin.component';
import { VocabularyQuizViewAdminComponent } from './vocabulary-quiz/view/vocabulary-quiz-view-admin.component';
import { VocabularyQuizListAdminComponent } from './vocabulary-quiz/list/vocabulary-quiz-list-admin.component';

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

    VocabularyCreateAdminComponent,
    VocabularyListAdminComponent,
    VocabularyViewAdminComponent,
    VocabularyEditAdminComponent,
    VocabularyQuizCreateAdminComponent,
    VocabularyQuizListAdminComponent,
    VocabularyQuizViewAdminComponent,
    VocabularyQuizEditAdminComponent,
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
  VocabularyCreateAdminComponent,
  VocabularyListAdminComponent,
  VocabularyViewAdminComponent,
  VocabularyEditAdminComponent,
  VocabularyQuizCreateAdminComponent,
  VocabularyQuizListAdminComponent,
  VocabularyQuizViewAdminComponent,
  VocabularyQuizEditAdminComponent,
  ],
  entryComponents: [],
})
export class VocabAdminModule { }
