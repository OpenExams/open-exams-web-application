import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentHomeComponent } from './pages/student-home/student-home.component';
import { StudentRegisterExamComponent } from './pages/student-register-exam/student-register-exam.component';
import { StudentExamHistoryComponent } from './pages/student-exam-history/student-exam-history.component';
import { StudentRegisterRepeatExamComponent } from './pages/student-register-repeat-exam/student-register-repeat-exam.component';
import { LoginStudentComponent } from './pages/login-student/login-student.component';


import { StudentAuthGuard } from './guards/student-auth.guard';
import { LoginStaffComponent } from './pages/login-staff/login-staff.component';

const routes: Routes = [
  //  { path: '',   redirectTo: '/heroes', pathMatch: 'full' },
  {path: 'home', component: StudentHomeComponent},
  {path: 'history', component: StudentExamHistoryComponent, canActivate: [StudentAuthGuard]},
  {path: 'register_exam', component: StudentRegisterExamComponent},
  {path: 'register_exam_repeat', component: StudentRegisterRepeatExamComponent},
  {path: 'login', component: LoginStudentComponent },
  {path: 'member-login', component: LoginStaffComponent}
  {path: '**', component: StudentHomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
