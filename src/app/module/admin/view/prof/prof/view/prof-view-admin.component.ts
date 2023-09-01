import {Component, OnInit} from '@angular/core';


import {AbstractViewController} from 'src/app/zynerator/controller/AbstractViewController';
import { environment } from 'src/environments/environment';

import {ProfService} from 'src/app/controller/service/Prof.service';
import {ProfDto} from 'src/app/controller/model/Prof.model';
import {ProfCriteria} from 'src/app/controller/criteria/ProfCriteria.model';

import {TrancheHoraireProfDto} from 'src/app/controller/model/TrancheHoraireProf.model';
import {TrancheHoraireProfService} from 'src/app/controller/service/TrancheHoraireProf.service';
import {ClassRoomDto} from 'src/app/controller/model/ClassRoom.model';
import {ClassRoomService} from 'src/app/controller/service/ClassRoom.service';
import {QuizDto} from 'src/app/controller/model/Quiz.model';
import {QuizService} from 'src/app/controller/service/Quiz.service';
import {TypeTeacherDto} from 'src/app/controller/model/TypeTeacher.model';
import {TypeTeacherService} from 'src/app/controller/service/TypeTeacher.service';
import {RecommendTeacherDto} from 'src/app/controller/model/RecommendTeacher.model';
import {RecommendTeacherService} from 'src/app/controller/service/RecommendTeacher.service';
import {EtudiantDto} from 'src/app/controller/model/Etudiant.model';
import {EtudiantService} from 'src/app/controller/service/Etudiant.service';
import {ParcoursDto} from 'src/app/controller/model/Parcours.model';
import {ParcoursService} from 'src/app/controller/service/Parcours.service';
import {CategorieProfDto} from 'src/app/controller/model/CategorieProf.model';
import {CategorieProfService} from 'src/app/controller/service/CategorieProf.service';
import {QuizClassRoomDto} from 'src/app/controller/model/QuizClassRoom.model';
import {QuizClassRoomService} from 'src/app/controller/service/QuizClassRoom.service';
import {EtudiantClassRoomDto} from 'src/app/controller/model/EtudiantClassRoom.model';
import {EtudiantClassRoomService} from 'src/app/controller/service/EtudiantClassRoom.service';
@Component({
  selector: 'app-prof-view-admin',
  templateUrl: './prof-view-admin.component.html'
})
export class ProfViewAdminComponent extends AbstractViewController<ProfDto, ProfCriteria, ProfService> implements OnInit {

    trancheHoraireProfs = new TrancheHoraireProfDto();
    trancheHoraireProfss: Array<TrancheHoraireProfDto> = [];
    classRooms = new ClassRoomDto();
    classRoomss: Array<ClassRoomDto> = [];
    recommendTeachers = new RecommendTeacherDto();
    recommendTeacherss: Array<RecommendTeacherDto> = [];

    constructor(private profService: ProfService, private trancheHoraireProfService: TrancheHoraireProfService, private classRoomService: ClassRoomService, private recommendTeacherService: RecommendTeacherService, private typeTeacherService: TypeTeacherService, private etudiantService: EtudiantService, private parcoursService: ParcoursService, private quizService: QuizService, private categorieProfService: CategorieProfService){
        super(profService);
    }

    ngOnInit(): void {
        this.parcours = new ParcoursDto();
        this.parcoursService.findAll().subscribe((data) => this.parcourss = data);
        this.categorieProf = new CategorieProfDto();
        this.categorieProfService.findAll().subscribe((data) => this.categorieProfs = data);
        this.typeTeacher = new TypeTeacherDto();
        this.typeTeacherService.findAll().subscribe((data) => this.typeTeachers = data);
    }


    get parcours(): ParcoursDto {
       return this.parcoursService.item;
    }
    set parcours(value: ParcoursDto) {
        this.parcoursService.item = value;
    }
    get parcourss():Array<ParcoursDto> {
       return this.parcoursService.items;
    }
    set parcourss(value: Array<ParcoursDto>) {
        this.parcoursService.items = value;
    }
    get typeTeacher(): TypeTeacherDto {
       return this.typeTeacherService.item;
    }
    set typeTeacher(value: TypeTeacherDto) {
        this.typeTeacherService.item = value;
    }
    get typeTeachers():Array<TypeTeacherDto> {
       return this.typeTeacherService.items;
    }
    set typeTeachers(value: Array<TypeTeacherDto>) {
        this.typeTeacherService.items = value;
    }
    get categorieProf(): CategorieProfDto {
       return this.categorieProfService.item;
    }
    set categorieProf(value: CategorieProfDto) {
        this.categorieProfService.item = value;
    }
    get categorieProfs():Array<CategorieProfDto> {
       return this.categorieProfService.items;
    }
    set categorieProfs(value: Array<CategorieProfDto>) {
        this.categorieProfService.items = value;
    }


}
