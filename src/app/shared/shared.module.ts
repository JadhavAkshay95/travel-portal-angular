import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScrollPanelModule,
    InputTextModule,
    ScrollPanelModule,
    SidebarModule,
    ButtonModule,
    InputTextModule,
    AccordionModule,
    RouterModule,
  ],
  exports: [
    ScrollPanelModule,
    InputTextModule,
    ScrollPanelModule,
    SidebarModule,
    ButtonModule,
    InputTextModule,
    AccordionModule,
    RouterModule,
  ],
})
export class SharedModule {}
