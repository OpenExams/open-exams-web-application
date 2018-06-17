import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { RegisterStudentComponent } from './pages/register-student/register-student.component';
import { LoginStudentComponent } from './pages/login-student/login-student.component';
import { LoginStaffComponent } from './pages/login-staff/login-staff.component';
import { StaffHomeComponent } from './pages/staff-home/staff-home.component';
import { StudentHomeComponent } from './pages/student-home/student-home.component';
import { StudentExamHistoryComponent } from './pages/student-exam-history/student-exam-history.component';
import { StudentRegisterExamComponent } from './pages/student-register-exam/student-register-exam.component';
import { StudentRegisterRepeatExamComponent } from './pages/student-register-repeat-exam/student-register-repeat-exam.component';
import { StaffStudentComponent } from './pages/staff-student/staff-student.component';
import { StaffExamComponent } from './pages/staff-exam/staff-exam.component';
import { StudentComponent } from './components/student/student.component';
import { ExamComponent } from './components/exam/exam.component';
import { ExamListPickComponent } from './components/exam-list-pick/exam-list-pick.component';
import { StaffNavComponent } from './components/staff-nav/staff-nav.component';
import { StudentNavComponent } from './components/student-nav/student-nav.component';
import { SubjectComponent } from './components/subject/subject.component';

import { SubjectService } from './services/subject.service';
import { StudentService } from './services/student.service';
import { StudentAuthService } from './services/student-auth.service';
import { StaffMemberService } from './services/staff-member.service';
import { MemberAuthService } from './services/member-auth.service';
import { LoadingComponent } from './components/loading/loading.component';
import { MessageService } from './services/message.service';
import { StudentAuthGuard } from './guards/student-auth.guard';
import { MemberAuthGuard } from './guards/member-auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    RegisterStudentComponent,
    LoginStudentComponent,
    LoginStaffComponent,
    StaffHomeComponent,
    StudentHomeComponent,
    StudentExamHistoryComponent,
    StudentRegisterExamComponent,
    StudentRegisterRepeatExamComponent,
    StaffStudentComponent,
    StaffExamComponent,
    StudentComponent,
    ExamComponent,
    ExamListPickComponent,
    StaffNavComponent,
    StudentNavComponent,
    SubjectComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
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
