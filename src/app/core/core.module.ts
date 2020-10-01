import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MasterModule } from '../master/master.module';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      { path: 'admin', loadChildren: '../admin/admin.module#AdminModule' },
      { path: 'master', loadChildren: '../master/master.module#MasterModule' },
    ],
  },
];

@NgModule({
  declarations: [LoginComponent, HomeComponent, SideBarComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class CoreModule {}
