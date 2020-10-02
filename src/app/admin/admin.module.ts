import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoleCreationComponent } from './role-creation/role-creation.component';
import { ScreenMaintainceComponent } from './screen-maintaince/screen-maintaince.component';
import { UserCreationComponent } from './user-creation/user-creation.component';
import { AssignScreenComponent } from './assign-screen/assign-screen.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'role-creation', component: RoleCreationComponent },
  { path: 'screen-master', component: ScreenMaintainceComponent },
  { path: 'user-creation', component: UserCreationComponent },
  { path: 'assign-screen', component: AssignScreenComponent },
];

@NgModule({
  declarations: [
    RoleCreationComponent,
    ScreenMaintainceComponent,
    UserCreationComponent,
    AssignScreenComponent,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
