import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [LoginComponent, HomeComponent, SideBarComponent],
  imports: [CommonModule, SharedModule],
})
export class CoreModule {}
