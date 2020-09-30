import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  mainMenus = [
    {
      name: 'Admin',
    },
    {
      name: 'Admin',
    },
  ];
  menus = [
    {
      id: 1,
      short_code: 'RoleMaster',
      path: '/admin/master/roleMaster',
      name: 'Role Creation',
      menu_type: 'A',
      seq_no: 1,
    },
    {
      id: 2,
      short_code: 'ScreenMaster',
      path: '/admin/master/screenMaster',
      name: 'Screen Maintenance',
      menu_type: 'A',
      seq_no: 2,
    },
    {
      id: 3,
      short_code: 'UserMaster',
      path: '/admin/master/userMaster',
      name: 'User Creation',
      menu_type: 'A',
      seq_no: 3,
    },
    {
      id: 4,
      short_code: 'AssignScreen',
      path: '/admin/master/screenMap',
      name: 'Assign Screen',
      menu_type: 'A',
      seq_no: 4,
    },
    {
      id: 5,
      short_code: 'Company',
      path: 'masters/master/company',
      name: 'Company',
      menu_type: 'M',
      seq_no: 1,
    },
    {
      id: 6,
      short_code: 'Branch',
      path: 'masters/master/branch',
      name: 'Branch',
      menu_type: 'M',
      seq_no: 2,
    },
    {
      id: 7,
      short_code: 'SampleTrans',
      path: 'transaction/SampleTrans',
      name: 'Sample Trans.',
      menu_type: 'T',
      seq_no: 1,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
