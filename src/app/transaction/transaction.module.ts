import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleTransactionComponent } from './sample-transaction/sample-transaction.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'sample-tran', component: SampleTransactionComponent },
];

@NgModule({
  declarations: [SampleTransactionComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class TransactionModule {}
