import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentHomeComponent } from './pages/student-home/student-home.component';
import { StudentRegisterExamComponent } from './pages/student-register-exam/student-register-exam.component';
import { StudentExamHistoryComponent } from './pages/student-exam-history/student-exam-history.component';
import { StudentRegisterRepeatExamComponent } from './pages/student-register-repeat-exam/student-register-repeat-exam.component';
import { LoginStudentComponent } from './pages/login-student/login-student.component';


import { StudentAuthGuard } from './guards/student-auth.guard';
import { LoginStaffComponent } from './pages/login-staff/login-staff.component';
import { StaffStudentComponent } from './pages/staff-student/staff-student.component';
import { StaffHomeComponent } from './pages/staff-home/staff-home.component';
import { StaffReportComponent } from './pages/staff-report/staff-report.component';
import { MemberAuthGuard } from './guards/member-auth.guard';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: '',   redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: StudentHomeComponent, canActivate: [StudentAuthGuard]},
  {path: 'history', component: StudentExamHistoryComponent, canActivate: [StudentAuthGuard]},
  {path: 'register_exam', component: StudentRegisterExamComponent, canActivate: [StudentAuthGuard]},
  {path: 'register_exam_repeat', component: StudentRegisterRepeatExamComponent, canActivate: [StudentAuthGuard]},
  {path: 'login', component: LoginStudentComponent },
  {path: 'member-login', component: LoginStaffComponent},
  {path: 'member_home', component: StaffHomeComponent, canActivate: [MemberAuthGuard]},
  {path: 'students', component: StaffStudentComponent, canActivate: [MemberAuthGuard]},
  {path: 'subjects', component: StaffReportComponent, canActivate: [MemberAuthGuard]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
