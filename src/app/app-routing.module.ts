import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AdminModule } from './admin/admin.module';
import { LoginComponent } from './core/login/login.component';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    AdminModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
