import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [LoginComponent, HomeComponent, SideBarComponent],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
