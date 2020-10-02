import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MasterModule } from '../master/master.module';
import { AuthenticationGuard } from '../shared/gaurds/authentication.guard';
import { SharedModule } from '../shared/shared.module';
import { TransactionModule } from '../transaction/transaction.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthenticationGuard],
    children: [
      { path: 'admin', loadChildren: '../admin/admin.module#AdminModule' },
      { path: 'master', loadChildren: '../master/master.module#MasterModule' },
      {
        path: 'reports',
        loadChildren: '../reports/reports.module#ReportsModule',
      },
      {
        path: 'transaction',
        loadChildren: '../transaction/transaction.module#TransactionModule',
      },
    ],
  },
];

@NgModule({
  declarations: [LoginComponent, HomeComponent, SideBarComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
    TransactionModule,MasterModule
  ],
})
export class CoreModule {}
