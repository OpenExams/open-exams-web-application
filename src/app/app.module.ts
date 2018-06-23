import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginStudentComponent } from './pages/login-student/login-student.component';
import { LoginStaffComponent } from './pages/login-staff/login-staff.component';
import { StaffHomeComponent } from './pages/staff-home/staff-home.component';
import { StudentHomeComponent } from './pages/student-home/student-home.component';
import { StudentExamHistoryComponent } from './pages/student-exam-history/student-exam-history.component';
import { StudentRegisterExamComponent } from './pages/student-register-exam/student-register-exam.component';
import { StudentRegisterRepeatExamComponent } from './pages/student-register-repeat-exam/student-register-repeat-exam.component';
import { StaffStudentComponent } from './pages/staff-student/staff-student.component';
import { ExamListPickComponent } from './components/exam-list-pick/exam-list-pick.component';
import { StaffNavComponent } from './components/staff-nav/staff-nav.component';
import { StudentNavComponent } from './components/student-nav/student-nav.component';

import { SubjectService } from './services/subject.service';
import { StudentService } from './services/student.service';
import { StudentAuthService } from './services/student-auth.service';
import { StaffMemberService } from './services/staff-member.service';
import { MemberAuthService } from './services/member-auth.service';
import { LoadingComponent } from './components/loading/loading.component';
import { MessageService } from './services/message.service';
import { StudentAuthGuard } from './guards/student-auth.guard';
import { MemberAuthGuard } from './guards/member-auth.guard';
import { StaffReportComponent } from './pages/staff-report/staff-report.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginStudentComponent,
    LoginStaffComponent,
    StaffHomeComponent,
    StudentHomeComponent,
    StudentExamHistoryComponent,
    StudentRegisterExamComponent,
    StudentRegisterRepeatExamComponent,
    StaffStudentComponent,
    ExamListPickComponent,
    StaffNavComponent,
    StudentNavComponent,
    LoadingComponent,
    StaffReportComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    SubjectService,
    StudentService,
    StudentAuthService,
    StaffMemberService,
    MemberAuthService,
    MessageService,
    StudentAuthGuard,
    MemberAuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
