import { Component, OnInit } from '@angular/core';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { RoleMasterService } from '../user-master.service';

@Component({
  selector: 'app-role-master',
  templateUrl: './role-master.component.html',
  styleUrls: ['./role-master.component.scss'],
  providers: [ConfirmationService, MessageService],
})
export class RoleMasterComponent implements OnInit {
  userDialog: boolean;

  users: any[] = [];

  user: any;

  selectedUsers: any[];

  submitted: boolean;
  display: boolean = false;
  moduleList = [
    { label: 'Select Module', value: null },
    { label: 'Admin', value: 'A' },
    { label: 'Master', value: 'M' },
    { label: 'Transaction', value: 'T' },
    { label: 'Reports', value: 'R' },
  ];

  statusList = [
    { label: 'Select status', value: null },
    { label: 'Active', value: '1' },
    { label: 'In-Active', value: '0' },
  ];
  constructor(
    private RoleMasterService: RoleMasterService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnInit() {
    this.getUserList();
  }

  getUserList() {
    this.RoleMasterService.getUserList().subscribe((data) => {
      this.users = data;
    });
  }

  openNew() {
    this.user = {};
    this.submitted = false;
    this.userDialog = true;
  }

  editUser(user: any) {
    this.user = { ...user };
    this.userDialog = true;
  }

  getModuleName(module) {
    const selectedModule = this.moduleList.filter(
      (moduleData) => moduleData.value === module
    );
    return selectedModule[0].label;
  }

  getStatusName(statusCode) {
    const selectedStatus = this.statusList.filter(
      (status) => status.value === statusCode
    );
    return selectedStatus[0].label;
  }

  deleteselectedUsers() {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete the selected users?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.RoleMasterService.deleteUser(this.selectedUsers);
        this.selectedUsers = null;
        this.getUserList();

        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'User Deleted',
          life: 3000,
        });
      },
    });
  }

  hideDialog() {
    this.userDialog = false;
    this.submitted = false;
  }

  deleteUser(user) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + user.Name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.user = {};
        this.RoleMasterService.deleteUser(user);
        this.getUserList();
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'User Deleted',
          life: 3000,
        });
      },
    });
  }

  saveuser() {
    this.submitted = true;
    if (this.user.Name.trim()) {
      if (this.user.Id) {
        this.RoleMasterService.updateUser(this.user);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Updated',
          life: 3000,
        });
      } else {
        this.RoleMasterService.addUser(this.user);
        this.messageService.add({
          severity: 'success',
          summary: 'Successful',
          detail: 'Product Created',
          life: 3000,
        });
      }
      this.getUserList();

      this.userDialog = false;
      this.user = {};
    }
  }
}
