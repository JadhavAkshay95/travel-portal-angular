import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  isShowSubMenu: boolean;
  selectedMenuIndex;
  selectedSubMenuIndex;
  mainMenus = [
    {
      name: 'Admin',
      icon: 'pi pi-id-card',
      menu_type: 'A',
    },
    {
      name: 'Master',
      icon: 'pi pi-microsoft',
      menu_type: 'M',
    },
    {
      name: 'Transaction',
      icon: 'pi pi-sort-alt',
      menu_type: 'T',
    },
    {
      name: 'Reports',
      icon: 'pi pi-file-pdf',
      menu_type: 'R',
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
  constructor(private router: Router) {}

  ngOnInit(): void {}

  toggleMenu(index) {
    // index !== this.selectedMenuIndex ? this.isShowSubMenu
    this.isShowSubMenu = !this.isShowSubMenu;
    this.selectedMenuIndex = index;
  }

  navigateSubMenu(menu, index) {
    this.selectedSubMenuIndex = index;
    switch (menu.name) {
      case 'Role Creation':
        this.router.navigate(['home', 'admin', 'role-creation']);
        break;

      case 'Screen Maintenance':
        this.router.navigate(['home', 'admin', 'screen-maintenance']);
        break;

      case 'User Creation':
        this.router.navigate(['home', 'admin', 'user-creation']);
        break;

      case 'Assign Screen':
        this.router.navigate(['home', 'admin', 'assign-screen']);
        break;

      case 'Company':
        this.router.navigate(['home', 'master', 'company']);
        break;

      case 'Branch':
        this.router.navigate(['home', 'master', 'branch']);
        break;
    }
  }
}
