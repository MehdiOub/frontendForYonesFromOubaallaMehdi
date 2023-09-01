import {Component, OnInit} from '@angular/core';
import {FreeTrialService} from 'src/app/controller/service/FreeTrial.service';
import {FreeTrialDto} from 'src/app/controller/model/FreeTrial.model';
import {FreeTrialCriteria} from 'src/app/controller/criteria/FreeTrialCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {FreeTrialTeacherWhatsTemplateDto} from 'src/app/controller/model/FreeTrialTeacherWhatsTemplate.model';
import {FreeTrialTeacherWhatsTemplateService} from 'src/app/controller/service/FreeTrialTeacherWhatsTemplate.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {FreeTrialStudentWhatsTemplateDto} from 'src/app/controller/model/FreeTrialStudentWhatsTemplate.model';
import {FreeTrialStudentWhatsTemplateService} from 'src/app/controller/service/FreeTrialStudentWhatsTemplate.service';
import {FreeTrialDetailDto} from 'src/app/controller/model/FreeTrialDetail.model';
import {FreeTrialDetailService} from 'src/app/controller/service/FreeTrialDetail.service';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfService} from 'src/app/controller/service/Prof.service';
import {StatutFreeTrialDto} from 'src/app/controller/model/StatutFreeTrial.model';
import {StatutFreeTrialService} from 'src/app/controller/service/StatutFreeTrial.service';
import {FreeTrialTeacherEmailTemplateDto} from 'src/app/controller/model/FreeTrialTeacherEmailTemplate.model';
import {FreeTrialTeacherEmailTemplateService} from 'src/app/controller/service/FreeTrialTeacherEmailTemplate.service';
import {NiveauEtudeDto} from 'src/app/controller/model/NiveauEtude.model';
import {NiveauEtudeService} from 'src/app/controller/service/NiveauEtude.service';
import {FreeTrialStudentEmailTemplateDto} from 'src/app/controller/model/FreeTrialStudentEmailTemplate.model';
import {FreeTrialStudentEmailTemplateService} from 'src/app/controller/service/FreeTrialStudentEmailTemplate.service';
import {FreeTrialConfigurationDto} from 'src/app/controller/model/FreeTrialConfiguration.model';
import {FreeTrialConfigurationService} from 'src/app/controller/service/FreeTrialConfiguration.service';


@Component({
  selector: 'app-free-trial-list-admin',
  templateUrl: './free-trial-list-admin.component.html'
})
export class FreeTrialListAdminComponent extends AbstractListController<FreeTrialDto, FreeTrialCriteria, FreeTrialService>  implements OnInit {

    fileName = 'FreeTrial';

     yesOrNoEmailTeacherSent :any[] =[];
     yesOrNoWhatsTeacherSent :any[] =[];
    profs :Array<ProfDto>;
    niveauEtudes :Array<NiveauEtudeDto>;
    freeTrialStudentWhatsTemplates :Array<FreeTrialStudentWhatsTemplateDto>;
    freeTrialStudentEmailTemplates :Array<FreeTrialStudentEmailTemplateDto>;
    freeTrialTeacherEmailTemplates :Array<FreeTrialTeacherEmailTemplateDto>;
    freeTrialTeacherWhatsTemplates :Array<FreeTrialTeacherWhatsTemplateDto>;
    freeTrialConfigurations :Array<FreeTrialConfigurationDto>;
    statutFreeTrials :Array<StatutFreeTrialDto>;

constructor( private freeTrialService: FreeTrialService , private freeTrialTeacherWhatsTemplateService: FreeTrialTeacherWhatsTemplateService, private freeTrialDetailService: FreeTrialDetailService, private profService: ProfService, private statutFreeTrialService: StatutFreeTrialService, private freeTrialTeacherEmailTemplateService: FreeTrialTeacherEmailTemplateService, private etudiantService: EtudiantService, private niveauEtudeService: NiveauEtudeService, private freeTrialStudentEmailTemplateService: FreeTrialStudentEmailTemplateService, private freeTrialStudentWhatsTemplateService: FreeTrialStudentWhatsTemplateService, private freeTrialConfigurationService: FreeTrialConfigurationService) {
        super(freeTrialService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadProf();
      this.loadNiveauEtude();
      this.loadFreeTrialStudentWhatsTemplate();
      this.loadFreeTrialStudentEmailTemplate();
      this.loadFreeTrialTeacherEmailTemplate();
      this.loadFreeTrialTeacherWhatsTemplate();
      this.loadFreeTrialConfiguration();
      this.loadStatutFreeTrial();
    this.yesOrNoEmailTeacherSent =  [{label: 'EmailTeacherSent', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    this.yesOrNoWhatsTeacherSent =  [{label: 'WhatsTeacherSent', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadFreeTrials(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrial', 'list');
        isPermistted ? this.service.findAll().subscribe(freeTrials => this.items = freeTrials,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'reference', header: 'Reference'},
            {field: 'prof?.ref', header: 'Prof'},
            {field: 'niveauEtude?.libelle', header: 'Niveau etude'},
            {field: 'dateFreeTrial', header: 'Date free trial'},
            {field: 'link', header: 'Link'},
            {field: 'emailTeacherSent', header: 'Email teacher sent'},
            {field: 'emailTeacherSendingDate', header: 'Email teacher sending date'},
            {field: 'whatsTeacherSent', header: 'Whats teacher sent'},
            {field: 'whatsTeacherSendingDate', header: 'Whats teacher sending date'},
            {field: 'freeTrialStudentWhatsTemplate?.id', header: 'Free trial student whats template'},
            {field: 'freeTrialStudentEmailTemplate?.id', header: 'Free trial student email template'},
            {field: 'freeTrialTeacherEmailTemplate?.id', header: 'Free trial teacher email template'},
            {field: 'freeTrialTeacherWhatsTemplate?.id', header: 'Free trial teacher whats template'},
            {field: 'dateFreeTrialPremierRappel', header: 'Date free trial premier rappel'},
            {field: 'dateFreeTrialPremierDeuxiemeRappel', header: 'Date free trial premier deuxieme rappel'},
            {field: 'nombreStudentTotal', header: 'Nombre student total'},
            {field: 'freeTrialConfiguration?.id', header: 'Free trial configuration'},
            {field: 'nombreStudentAbonne', header: 'Nombre student abonne'},
            {field: 'nombreStudentPresent', header: 'Nombre student present'},
            {field: 'statutFreeTrial?.libelle', header: 'Statut free trial'},
        ];
    }


    public async loadProf(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrial', 'list');
        isPermistted ? this.profService.findAllOptimized().subscribe(profs => this.profs = profs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadNiveauEtude(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrial', 'list');
        isPermistted ? this.niveauEtudeService.findAllOptimized().subscribe(niveauEtudes => this.niveauEtudes = niveauEtudes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadFreeTrialStudentWhatsTemplate(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrial', 'list');
        isPermistted ? this.freeTrialStudentWhatsTemplateService.findAll().subscribe(freeTrialStudentWhatsTemplates => this.freeTrialStudentWhatsTemplates = freeTrialStudentWhatsTemplates,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadFreeTrialStudentEmailTemplate(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrial', 'list');
        isPermistted ? this.freeTrialStudentEmailTemplateService.findAll().subscribe(freeTrialStudentEmailTemplates => this.freeTrialStudentEmailTemplates = freeTrialStudentEmailTemplates,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadFreeTrialTeacherEmailTemplate(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrial', 'list');
        isPermistted ? this.freeTrialTeacherEmailTemplateService.findAll().subscribe(freeTrialTeacherEmailTemplates => this.freeTrialTeacherEmailTemplates = freeTrialTeacherEmailTemplates,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadFreeTrialTeacherWhatsTemplate(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrial', 'list');
        isPermistted ? this.freeTrialTeacherWhatsTemplateService.findAll().subscribe(freeTrialTeacherWhatsTemplates => this.freeTrialTeacherWhatsTemplates = freeTrialTeacherWhatsTemplates,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadFreeTrialConfiguration(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrial', 'list');
        isPermistted ? this.freeTrialConfigurationService.findAll().subscribe(freeTrialConfigurations => this.freeTrialConfigurations = freeTrialConfigurations,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadStatutFreeTrial(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('FreeTrial', 'list');
        isPermistted ? this.statutFreeTrialService.findAllOptimized().subscribe(statutFreeTrials => this.statutFreeTrials = statutFreeTrials,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: FreeTrialDto) {
        if (res.freeTrialDetails != null) {
             res.freeTrialDetails.forEach(d => { d.freeTrial = null; d.id = null; });
        }
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Reference': e.reference ,
                'Prof': e.prof?.ref ,
                'Niveau etude': e.niveauEtude?.libelle ,
                'Date free trial': this.datePipe.transform(e.dateFreeTrial , 'dd/MM/yyyy hh:mm'),
                 'Link': e.link ,
                'Email teacher sent': e.emailTeacherSent? 'Vrai' : 'Faux' ,
                'Email teacher sending date': this.datePipe.transform(e.emailTeacherSendingDate , 'dd/MM/yyyy hh:mm'),
                'Whats teacher sent': e.whatsTeacherSent? 'Vrai' : 'Faux' ,
                'Whats teacher sending date': this.datePipe.transform(e.whatsTeacherSendingDate , 'dd/MM/yyyy hh:mm'),
                'Free trial student whats template': e.freeTrialStudentWhatsTemplate?.id ,
                'Free trial student email template': e.freeTrialStudentEmailTemplate?.id ,
                'Free trial teacher email template': e.freeTrialTeacherEmailTemplate?.id ,
                'Free trial teacher whats template': e.freeTrialTeacherWhatsTemplate?.id ,
                'Date free trial premier rappel': this.datePipe.transform(e.dateFreeTrialPremierRappel , 'dd/MM/yyyy hh:mm'),
                'Date free trial premier deuxieme rappel': this.datePipe.transform(e.dateFreeTrialPremierDeuxiemeRappel , 'dd/MM/yyyy hh:mm'),
                 'Nombre student total': e.nombreStudentTotal ,
                'Free trial configuration': e.freeTrialConfiguration?.id ,
                 'Nombre student abonne': e.nombreStudentAbonne ,
                 'Nombre student present': e.nombreStudentPresent ,
                'Statut free trial': e.statutFreeTrial?.libelle ,
            }
        });

        this.criteriaData = [{
            'Reference': this.criteria.reference ? this.criteria.reference : environment.emptyForExport ,
        //'Prof': this.criteria.prof?.ref ? this.criteria.prof?.ref : environment.emptyForExport ,
        //'Niveau etude': this.criteria.niveauEtude?.libelle ? this.criteria.niveauEtude?.libelle : environment.emptyForExport ,
            'Date free trial Min': this.criteria.dateFreeTrialFrom ? this.datePipe.transform(this.criteria.dateFreeTrialFrom , this.dateFormat) : environment.emptyForExport ,
            'Date free trial Max': this.criteria.dateFreeTrialTo ? this.datePipe.transform(this.criteria.dateFreeTrialTo , this.dateFormat) : environment.emptyForExport ,
            'Link': this.criteria.link ? this.criteria.link : environment.emptyForExport ,
            'Email teacher sent': this.criteria.emailTeacherSent ? (this.criteria.emailTeacherSent ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Email teacher sending date Min': this.criteria.emailTeacherSendingDateFrom ? this.datePipe.transform(this.criteria.emailTeacherSendingDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Email teacher sending date Max': this.criteria.emailTeacherSendingDateTo ? this.datePipe.transform(this.criteria.emailTeacherSendingDateTo , this.dateFormat) : environment.emptyForExport ,
            'Whats teacher sent': this.criteria.whatsTeacherSent ? (this.criteria.whatsTeacherSent ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Whats teacher sending date Min': this.criteria.whatsTeacherSendingDateFrom ? this.datePipe.transform(this.criteria.whatsTeacherSendingDateFrom , this.dateFormat) : environment.emptyForExport ,
            'Whats teacher sending date Max': this.criteria.whatsTeacherSendingDateTo ? this.datePipe.transform(this.criteria.whatsTeacherSendingDateTo , this.dateFormat) : environment.emptyForExport ,
        //'Free trial student whats template': this.criteria.freeTrialStudentWhatsTemplate?.id ? this.criteria.freeTrialStudentWhatsTemplate?.id : environment.emptyForExport ,
        //'Free trial student email template': this.criteria.freeTrialStudentEmailTemplate?.id ? this.criteria.freeTrialStudentEmailTemplate?.id : environment.emptyForExport ,
        //'Free trial teacher email template': this.criteria.freeTrialTeacherEmailTemplate?.id ? this.criteria.freeTrialTeacherEmailTemplate?.id : environment.emptyForExport ,
        //'Free trial teacher whats template': this.criteria.freeTrialTeacherWhatsTemplate?.id ? this.criteria.freeTrialTeacherWhatsTemplate?.id : environment.emptyForExport ,
            'Date free trial premier rappel Min': this.criteria.dateFreeTrialPremierRappelFrom ? this.datePipe.transform(this.criteria.dateFreeTrialPremierRappelFrom , this.dateFormat) : environment.emptyForExport ,
            'Date free trial premier rappel Max': this.criteria.dateFreeTrialPremierRappelTo ? this.datePipe.transform(this.criteria.dateFreeTrialPremierRappelTo , this.dateFormat) : environment.emptyForExport ,
            'Date free trial premier deuxieme rappel Min': this.criteria.dateFreeTrialPremierDeuxiemeRappelFrom ? this.datePipe.transform(this.criteria.dateFreeTrialPremierDeuxiemeRappelFrom , this.dateFormat) : environment.emptyForExport ,
            'Date free trial premier deuxieme rappel Max': this.criteria.dateFreeTrialPremierDeuxiemeRappelTo ? this.datePipe.transform(this.criteria.dateFreeTrialPremierDeuxiemeRappelTo , this.dateFormat) : environment.emptyForExport ,
            'Nombre student total Min': this.criteria.nombreStudentTotalMin ? this.criteria.nombreStudentTotalMin : environment.emptyForExport ,
            'Nombre student total Max': this.criteria.nombreStudentTotalMax ? this.criteria.nombreStudentTotalMax : environment.emptyForExport ,
        //'Free trial configuration': this.criteria.freeTrialConfiguration?.id ? this.criteria.freeTrialConfiguration?.id : environment.emptyForExport ,
            'Nombre student abonne Min': this.criteria.nombreStudentAbonneMin ? this.criteria.nombreStudentAbonneMin : environment.emptyForExport ,
            'Nombre student abonne Max': this.criteria.nombreStudentAbonneMax ? this.criteria.nombreStudentAbonneMax : environment.emptyForExport ,
            'Nombre student present Min': this.criteria.nombreStudentPresentMin ? this.criteria.nombreStudentPresentMin : environment.emptyForExport ,
            'Nombre student present Max': this.criteria.nombreStudentPresentMax ? this.criteria.nombreStudentPresentMax : environment.emptyForExport ,
        //'Statut free trial': this.criteria.statutFreeTrial?.libelle ? this.criteria.statutFreeTrial?.libelle : environment.emptyForExport ,
        }];
      }
}
