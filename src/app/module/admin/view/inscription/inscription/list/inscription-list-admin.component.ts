import {Component, OnInit} from '@angular/core';
import {InscriptionService} from 'src/app/controller/service/Inscription.service';
import {InscriptionDto} from 'src/app/controller/model/Inscription.model';
import {InscriptionCriteria} from 'src/app/controller/criteria/InscriptionCriteria.model';
import {AbstractListController} from 'src/app/zynerator/controller/AbstractListController';
import { environment } from 'src/environments/environment';

import {StatutSocialDto} from 'src/app/controller/model/StatutSocial.model';
import {StatutSocialService} from 'src/app/controller/service/StatutSocial.service';
import {EtatInscriptionDto} from 'src/app/controller/model/EtatInscription.model';
import {EtatInscriptionService} from 'src/app/controller/service/EtatInscription.service';
import {InteretEtudiantDto} from 'src/app/controller/model/InteretEtudiant.model';
import {InteretEtudiantService} from 'src/app/controller/service/InteretEtudiant.service';
import {FonctionDto} from 'src/app/controller/model/Fonction.model';
import {FonctionService} from 'src/app/controller/service/Fonction.service';
import {GroupeTypeDto} from 'src/app/controller/model/GroupeType.model';
import {GroupeTypeService} from 'src/app/controller/service/GroupeType.service';
import {PackStudentDto} from 'src/app/controller/model/PackStudent.model';
import {PackStudentService} from 'src/app/controller/service/PackStudent.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {GroupeEtudeDto} from 'src/app/controller/model/GroupeEtude.model';
import {GroupeEtudeService} from 'src/app/controller/service/GroupeEtude.service';
import {NiveauEtudeDto} from 'src/app/controller/model/NiveauEtude.model';
import {NiveauEtudeService} from 'src/app/controller/service/NiveauEtude.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {QuizService} from 'src/app/controller/service/Quiz.service';
import {SkillDto} from 'src/app/controller/model/Skill.model';
import {SkillService} from 'src/app/controller/service/Skill.service';


@Component({
  selector: 'app-inscription-list-admin',
  templateUrl: './inscription-list-admin.component.html'
})
export class InscriptionListAdminComponent extends AbstractListController<InscriptionDto, InscriptionCriteria, InscriptionService>  implements OnInit {

    fileName = 'Inscription';

     yesOrNoQuizFinished :any[] =[];
    etudiants :Array<EtudiantDto>;
    etatInscriptions :Array<EtatInscriptionDto>;
    parcourss :Array<ParcoursDto>;
    groupeEtudes :Array<GroupeEtudeDto>;
    groupeTypes :Array<GroupeTypeDto>;
    statutSocials :Array<StatutSocialDto>;
    interetEtudiants :Array<InteretEtudiantDto>;
    niveauEtudes :Array<NiveauEtudeDto>;
    fonctions :Array<FonctionDto>;
    quizs :Array<QuizDto>;
    packStudents :Array<PackStudentDto>;
    skills :Array<SkillDto>;

constructor( private inscriptionService: InscriptionService , private statutSocialService: StatutSocialService, private etatInscriptionService: EtatInscriptionService, private interetEtudiantService: InteretEtudiantService, private fonctionService: FonctionService, private groupeTypeService: GroupeTypeService, private packStudentService: PackStudentService, private etudiantService: EtudiantService, private groupeEtudeService: GroupeEtudeService, private niveauEtudeService: NiveauEtudeService, private parcoursService: ParcoursService, private quizService: QuizService, private skillService: SkillService) {
        super(inscriptionService);
    }

    ngOnInit() : void {
      this.findPaginatedByCriteria();
      this.initExport();
      this.initCol();
      this.loadEtudiant();
      this.loadEtatInscription();
      this.loadParcours();
      this.loadGroupeEtude();
      this.loadGroupeType();
      this.loadStatutSocial();
      this.loadInteretEtudiant();
      this.loadNiveauEtude();
      this.loadFonction();
      this.loadQuiz();
      this.loadPackStudent();
      this.loadSkill();
    this.yesOrNoQuizFinished =  [{label: 'QuizFinished', value: null},{label: 'Oui', value: 1},{label: 'Non', value: 0}];
    }

    public async loadInscriptions(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.service.findAll().subscribe(inscriptions => this.items = inscriptions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'erreur', detail: 'problème d\'autorisation'});
    }


    public initCol() {
        this.cols = [
            {field: 'numeroInscription', header: 'Numero inscription'},
            {field: 'etudiant?.ref', header: 'Etudiant'},
            {field: 'etatInscription?.libelle', header: 'Etat inscription'},
            {field: 'parcours?.libelle', header: 'Parcours'},
            {field: 'groupeEtude?.libelle', header: 'Groupe etude'},
            {field: 'groupeType?.libelle', header: 'Groupe type'},
            {field: 'statutSocial?.libelle', header: 'Statut social'},
            {field: 'interetEtudiant?.libelle', header: 'Interet etudiant'},
            {field: 'niveauEtude?.libelle', header: 'Niveau etude'},
            {field: 'fonction?.libelle', header: 'Fonction'},
            {field: 'quiz?.lib', header: 'Quiz'},
            {field: 'noteQuizNiveau', header: 'Note quiz niveau'},
            {field: 'quizFinished', header: 'Quiz finished'},
            {field: 'dateRegistration', header: 'Date registration'},
            {field: 'datedebutinscription', header: 'Datedebutinscription'},
            {field: 'datefininscription', header: 'Datefininscription'},
            {field: 'packStudent?.libelle', header: 'Pack student'},
            {field: 'skill?.libelle', header: 'Skill'},
            {field: 'skype', header: 'Skype'},
        ];
    }


    public async loadEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.etudiantService.findAllOptimized().subscribe(etudiants => this.etudiants = etudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadEtatInscription(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.etatInscriptionService.findAllOptimized().subscribe(etatInscriptions => this.etatInscriptions = etatInscriptions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadParcours(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.parcoursService.findAllOptimized().subscribe(parcourss => this.parcourss = parcourss,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadGroupeEtude(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.groupeEtudeService.findAllOptimized().subscribe(groupeEtudes => this.groupeEtudes = groupeEtudes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadGroupeType(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.groupeTypeService.findAllOptimized().subscribe(groupeTypes => this.groupeTypes = groupeTypes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadStatutSocial(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.statutSocialService.findAllOptimized().subscribe(statutSocials => this.statutSocials = statutSocials,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadInteretEtudiant(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.interetEtudiantService.findAllOptimized().subscribe(interetEtudiants => this.interetEtudiants = interetEtudiants,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadNiveauEtude(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.niveauEtudeService.findAllOptimized().subscribe(niveauEtudes => this.niveauEtudes = niveauEtudes,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadFonction(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.fonctionService.findAllOptimized().subscribe(fonctions => this.fonctions = fonctions,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadQuiz(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.quizService.findAllOptimized().subscribe(quizs => this.quizs = quizs,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadPackStudent(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.packStudentService.findAllOptimized().subscribe(packStudents => this.packStudents = packStudents,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }
    public async loadSkill(){
        await this.roleService.findAll();
        const isPermistted = await this.roleService.isPermitted('Inscription', 'list');
        isPermistted ? this.skillService.findAllOptimized().subscribe(skills => this.skills = skills,error=>console.log(error))
        : this.messageService.add({severity: 'error', summary: 'Erreur', detail: 'Problème de permission'});
    }

	public initDuplicate(res: InscriptionDto) {
	}

   public prepareColumnExport() : void {
        this.exportData = this.items.map(e => {
            return {
                 'Numero inscription': e.numeroInscription ,
                'Etudiant': e.etudiant?.ref ,
                'Etat inscription': e.etatInscription?.libelle ,
                'Parcours': e.parcours?.libelle ,
                'Groupe etude': e.groupeEtude?.libelle ,
                'Groupe type': e.groupeType?.libelle ,
                'Statut social': e.statutSocial?.libelle ,
                'Interet etudiant': e.interetEtudiant?.libelle ,
                'Niveau etude': e.niveauEtude?.libelle ,
                'Fonction': e.fonction?.libelle ,
                'Quiz': e.quiz?.lib ,
                 'Note quiz niveau': e.noteQuizNiveau ,
                'Quiz finished': e.quizFinished? 'Vrai' : 'Faux' ,
                 'Date registration': e.dateRegistration ,
                'Datedebutinscription': this.datePipe.transform(e.datedebutinscription , 'dd/MM/yyyy hh:mm'),
                'Datefininscription': this.datePipe.transform(e.datefininscription , 'dd/MM/yyyy hh:mm'),
                'Pack student': e.packStudent?.libelle ,
                'Skill': e.skill?.libelle ,
                 'Skype': e.skype ,
            }
        });

        this.criteriaData = [{
            'Numero inscription Min': this.criteria.numeroInscriptionMin ? this.criteria.numeroInscriptionMin : environment.emptyForExport ,
            'Numero inscription Max': this.criteria.numeroInscriptionMax ? this.criteria.numeroInscriptionMax : environment.emptyForExport ,
        //'Etudiant': this.criteria.etudiant?.ref ? this.criteria.etudiant?.ref : environment.emptyForExport ,
        //'Etat inscription': this.criteria.etatInscription?.libelle ? this.criteria.etatInscription?.libelle : environment.emptyForExport ,
        //'Parcours': this.criteria.parcours?.libelle ? this.criteria.parcours?.libelle : environment.emptyForExport ,
        //'Groupe etude': this.criteria.groupeEtude?.libelle ? this.criteria.groupeEtude?.libelle : environment.emptyForExport ,
        //'Groupe type': this.criteria.groupeType?.libelle ? this.criteria.groupeType?.libelle : environment.emptyForExport ,
        //'Statut social': this.criteria.statutSocial?.libelle ? this.criteria.statutSocial?.libelle : environment.emptyForExport ,
        //'Interet etudiant': this.criteria.interetEtudiant?.libelle ? this.criteria.interetEtudiant?.libelle : environment.emptyForExport ,
        //'Niveau etude': this.criteria.niveauEtude?.libelle ? this.criteria.niveauEtude?.libelle : environment.emptyForExport ,
        //'Fonction': this.criteria.fonction?.libelle ? this.criteria.fonction?.libelle : environment.emptyForExport ,
        //'Quiz': this.criteria.quiz?.lib ? this.criteria.quiz?.lib : environment.emptyForExport ,
            'Note quiz niveau Min': this.criteria.noteQuizNiveauMin ? this.criteria.noteQuizNiveauMin : environment.emptyForExport ,
            'Note quiz niveau Max': this.criteria.noteQuizNiveauMax ? this.criteria.noteQuizNiveauMax : environment.emptyForExport ,
            'Quiz finished': this.criteria.quizFinished ? (this.criteria.quizFinished ? environment.trueValue : environment.falseValue) : environment.emptyForExport ,
            'Date registration': this.criteria.dateRegistration ? this.criteria.dateRegistration : environment.emptyForExport ,
            'Datedebutinscription Min': this.criteria.datedebutinscriptionFrom ? this.datePipe.transform(this.criteria.datedebutinscriptionFrom , this.dateFormat) : environment.emptyForExport ,
            'Datedebutinscription Max': this.criteria.datedebutinscriptionTo ? this.datePipe.transform(this.criteria.datedebutinscriptionTo , this.dateFormat) : environment.emptyForExport ,
            'Datefininscription Min': this.criteria.datefininscriptionFrom ? this.datePipe.transform(this.criteria.datefininscriptionFrom , this.dateFormat) : environment.emptyForExport ,
            'Datefininscription Max': this.criteria.datefininscriptionTo ? this.datePipe.transform(this.criteria.datefininscriptionTo , this.dateFormat) : environment.emptyForExport ,
        //'Pack student': this.criteria.packStudent?.libelle ? this.criteria.packStudent?.libelle : environment.emptyForExport ,
        //'Skill': this.criteria.skill?.libelle ? this.criteria.skill?.libelle : environment.emptyForExport ,
            'Skype': this.criteria.skype ? this.criteria.skype : environment.emptyForExport ,
        }];
      }
}
