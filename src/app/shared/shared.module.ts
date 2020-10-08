import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { SidebarModule } from 'primeng/sidebar';
import { AccordionModule } from 'primeng/accordion';
import { RouterModule } from '@angular/router';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ToolbarModule } from 'primeng/toolbar';
import { FileUploadModule } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ScrollPanelModule,
    InputTextModule,
    SidebarModule,
    ButtonModule,
    InputTextModule,
    AccordionModule,
    RouterModule,
    CheckboxModule,
    FormsModule,
    ReactiveFormsModule,
    ToolbarModule,
    TabViewModule,
    FileUploadModule,
    HttpClientModule,
    ConfirmDialogModule,
    ToastModule,
    DialogModule,
    RadioButtonModule,
    InputNumberModule,
    DropdownModule,
  ],
  exports: [
    ScrollPanelModule,
    InputTextModule,
    SidebarModule,
    ButtonModule,
    InputTextModule,
    AccordionModule,
    RouterModule,
    ConfirmDialogModule,
    CheckboxModule,
    ToolbarModule,
    FormsModule,
    TabViewModule,
    TableModule,
    FileUploadModule,
    HttpClientModule,
    ToastModule,
    RadioButtonModule,
    InputNumberModule,
    DialogModule,
    DropdownModule,
  ],
})
export class SharedModule {}
