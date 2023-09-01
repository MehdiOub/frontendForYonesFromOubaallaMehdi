import {Component, OnInit, ChangeDetectorRef, ViewChild} from '@angular/core';
import {CalendarOptions, EventClickArg} from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { ScheduleProfDto } from '../../../../../../controller/model/ScheduleProf.model';
import { ScheduleProfService } from '../../../../../../controller/service/ScheduleProf.service';
import {ScheduleProfCriteria} from "../../../../../../controller/criteria/ScheduleProfCriteria.model";
import {ProfService} from "../../../../../../controller/service/Prof.service";
import {CoursService} from "../../../../../../controller/service/Cours.service";
import {GroupeEtudiantService} from "../../../../../../controller/service/GroupeEtudiant.service";
import {FullCalendarComponent} from "@fullcalendar/angular";
import {AbstractListController} from "../../../../../../zynerator/controller/AbstractListController";
import {ProfDto} from "../../../../../../controller/model/Prof.model";
import {GroupeEtudiantDto} from "../../../../../../controller/model/GroupeEtudiant.model";
import {CoursDto} from "../../../../../../controller/model/Cours.model";
import {co} from "@fullcalendar/core/internal-common";
@Component({
  selector: 'app-full-schedule',
  templateUrl: './full-schedule.component.html',
  styleUrls: ['./full-schedule.component.scss']
})
export class FullScheduleComponent extends AbstractListController<ScheduleProfDto, ScheduleProfCriteria, ScheduleProfService> implements OnInit {
  public currentMonth: number;
  public scheduleprofsmonth: ScheduleProfDto[];
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;
  public visibleMonthNumber: number;
  public events: Array<any> = new Array<any>();
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    initialView: 'timeGridWeek',
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'timeGridWeek,timeGridDay,dayGridMonth'
    },
    dateClick: this.handleDateClick.bind(this),
    eventClick: this.handleEventClick.bind(this),
  };
  ngAfterViewInit() {
    const calendarApi = this.calendarComponent.getApi();
    this.currentMonth = new Date().getMonth() + 1;
    // Listen for the datesSet event to update current month when the view changes
    calendarApi.on('datesSet', (arg) => {
      const newView = calendarApi.view;
      this.currentMonth = newView.currentStart.getMonth() + 1;
      this.findScheduleDataByMonth(); // Call to update data when month changes
    });
  }
  constructor(private _scheduleProfService: ScheduleProfService, private profService: ProfService, private coursService: CoursService,
              private groupeEtudiantService: GroupeEtudiantService , private cdRef: ChangeDetectorRef ) {
    super(_scheduleProfService);
  }

  ngOnInit() {
    this.findScheduleDataByMonth();
    this.currentMonth = new Date().getMonth() + 1;
    this.groupeEtudiantService.findAll().subscribe((data) => (this.groupeEtudiants = data));
    this.prof = new ProfDto();
    this.profService.findAll().subscribe((data) => (this.profs = data));
    this.cours = new CoursDto();
    this.coursService.findAll().subscribe((data) => (this.courss = data));
  }
  findScheduleDataByMonth(): void {
    this._scheduleProfService.findByMonth(this.currentMonth).subscribe((data) => {
      this.scheduleprofsmonth = data;
      this.updateFullCalendarEvents();
      this.cdRef.detectChanges();
    });
  }
  updateFullCalendarEvents(viewType: string = 'timeGridWeek'): void {
    this.calendarOptions.initialView = viewType;
    this.events = this.scheduleprofsmonth.map((item) => ({ // Changed to scheduleprofsmonth
      title: item.subject,
      start: new Date(item.startTime),
      end: new Date(item.endTime)

    }));
    this.calendarOptions.events = this.events;
    console.log('update function',this.events);
  }

  /*saveitem(): void {
    const event = {
      title: this.item.subject,
      start: new Date(this.item.startTime),
      end: new Date(this.item.endTime)
    }
    this.events.push({...event});
    this.calendarComponent.getApi().addEvent(event);
    this.calendarComponent.getApi().refetchEvents();
    this.cdRef.markForCheck();
    this.createDialogVisible=false;
  }*/
  saveNew(): void {
    this._scheduleProfService.saveNew(this.item).subscribe((data) => {
      console.log('save fun',data);

      // Create an event based on the saved data
      const event = {
        title: data.subject,
        start: new Date(data.startTime ),
        end: new Date(data.endTime)
      };
      alert(event.start);
      event.start.setDate(event.start.getDate()+1);
      event.end.setDate(event.end.getDate()+1);

      // Add the event to the calendar
      this.calendarComponent.getApi().addEvent(event);
      // Refresh the events and Angular's change detection
      this.calendarComponent.getApi().refetchEvents();
      this.cdRef.markForCheck();

      // Hide the create dialog
      this.createDialogVisible = false;
    });
  }

  createDialogVisible : boolean =false;
  handleDateClick(info: any) {

    const clickedDate = info.date;
    // You can perform actions based on the clicked date
    console.log('Clicked Date:', clickedDate);
    console.log('Clicked Date:', info);
    this.createDialogVisible =true , this.item.startTime = new Date(clickedDate),
        this.item.startTime = new Date(clickedDate), this.item.endTime = new Date(this.item.startTime.getTime() + 60 * 60 * 1000),
        this.createDialog = true;
    this.calendarComponent.getApi().refetchEvents();
    this.cdRef.markForCheck();
  }
  handleEventClick(clickInfo: EventClickArg) {
    const eventTitle = clickInfo.event.title;
    const clickedDate = clickInfo.event.start;
    const itemIndex = this.scheduleprofsmonth.findIndex(item => item.subject === eventTitle);
    if (itemIndex !== -1) {
      this.item = { ...this.scheduleprofsmonth[itemIndex] }; // Create a copy of the item to edit
      this.item.startTime = new Date(clickedDate), this.item.endTime = new Date(this.item.startTime.getTime() + 60 * 60 * 1000), // Adding 1 hour to the clicked date
       //super.edit(this.item);
          this.editDialog=true ;
      this.showEditDialogContent = true; // Show the edit dialog content

    }
    this.calendarComponent.getApi().refetchEvents();
    this.cdRef.markForCheck();
  }
  showEditDialogContent = false;



  public prepareEdit() {
    this.item.startTime = this._scheduleProfService.format(this.item.startTime);
    this.item.endTime = this._scheduleProfService.format(this.item.endTime);
  }
  get profs(): Array<ProfDto> {
    return this.profService.items;
  }
  set profs(value: Array<ProfDto>) {
    this.profService.items = value;
  }
  get prof(): ProfDto {
    return this.profService.item;
  }
  set prof(value: ProfDto) {
    this.profService.item = value;
  }
  get groupeEtudiant(): GroupeEtudiantDto {
    return this.groupeEtudiantService.item;
  }
  set groupeEtudiant(value: GroupeEtudiantDto) {
    this.groupeEtudiantService.item = value;
  }
  get groupeEtudiants(): Array<GroupeEtudiantDto> {
    return this.groupeEtudiantService.items;
  }
  set groupeEtudiants(value: Array<GroupeEtudiantDto>) {
    this.groupeEtudiantService.items = value;
  }
  get cours(): CoursDto {
    return this.coursService.item;
  }
  set cours(value: CoursDto) {
    this.coursService.item = value;
  }
  get courss(): Array<CoursDto> {
    return this.coursService.items;
  }
  set courss(value: Array<CoursDto>) {
    this.coursService.items = value;
  }
}