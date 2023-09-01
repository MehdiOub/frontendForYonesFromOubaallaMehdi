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

import { DictionaryCreateAdminComponent } from './dictionary/create/dictionary-create-admin.component';
import { DictionaryEditAdminComponent } from './dictionary/edit/dictionary-edit-admin.component';
import { DictionaryViewAdminComponent } from './dictionary/view/dictionary-view-admin.component';
import { DictionaryListAdminComponent } from './dictionary/list/dictionary-list-admin.component';
import { EtudiantCreateAdminComponent } from './etudiant/create/etudiant-create-admin.component';
import { EtudiantEditAdminComponent } from './etudiant/edit/etudiant-edit-admin.component';
import { EtudiantViewAdminComponent } from './etudiant/view/etudiant-view-admin.component';
import { EtudiantListAdminComponent } from './etudiant/list/etudiant-list-admin.component';
import { InscriptionCreateAdminComponent } from './inscription/create/inscription-create-admin.component';
import { InscriptionEditAdminComponent } from './inscription/edit/inscription-edit-admin.component';
import { InscriptionViewAdminComponent } from './inscription/view/inscription-view-admin.component';
import { InscriptionListAdminComponent } from './inscription/list/inscription-list-admin.component';

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

    DictionaryCreateAdminComponent,
    DictionaryListAdminComponent,
    DictionaryViewAdminComponent,
    DictionaryEditAdminComponent,
    EtudiantCreateAdminComponent,
    EtudiantListAdminComponent,
    EtudiantViewAdminComponent,
    EtudiantEditAdminComponent,
    InscriptionCreateAdminComponent,
    InscriptionListAdminComponent,
    InscriptionViewAdminComponent,
    InscriptionEditAdminComponent,
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
  DictionaryCreateAdminComponent,
  DictionaryListAdminComponent,
  DictionaryViewAdminComponent,
  DictionaryEditAdminComponent,
  EtudiantCreateAdminComponent,
  EtudiantListAdminComponent,
  EtudiantViewAdminComponent,
  EtudiantEditAdminComponent,
  InscriptionCreateAdminComponent,
  InscriptionListAdminComponent,
  InscriptionViewAdminComponent,
  InscriptionEditAdminComponent,
  ],
  entryComponents: [],
})
export class InscriptionAdminModule { }
