import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion';

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
  ],
  exports: [
    ScrollPanelModule,
    InputTextModule,
    ScrollPanelModule,
    SidebarModule,
    ButtonModule,
    InputTextModule,
    AccordionModule,
  ],
})
export class SharedModule {}
