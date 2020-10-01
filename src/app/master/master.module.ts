import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company/company.component';
import { BranchComponent } from './branch/branch.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'company', component: CompanyComponent },
  { path: 'branch', component: BranchComponent },
];

@NgModule({
  declarations: [CompanyComponent, BranchComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class MasterModule {}
