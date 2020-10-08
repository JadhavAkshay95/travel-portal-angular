import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssignScreenComponent } from './assign-screen/assign-screen.component';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { RoleMasterComponent } from './role-master/role-master.component';
import { ScreenMasterComponent } from './screen-master/screen-master.component';
import { UserMasterComponent } from './user-master/user-master.component';
import { AdminComponent } from './admin/admin.component';

const routes: Routes = [{ path: 'index', component: AdminComponent }];

@NgModule({
  declarations: [
    AssignScreenComponent,
    RoleMasterComponent,
    ScreenMasterComponent,
    UserMasterComponent,
    AdminComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class AdminModule {}
