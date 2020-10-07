import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SidebarService } from 'src/app/shared/service/sidebar.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit {
  isShowSubMenu: boolean;
  selectedMenuIndex;
  selectedSubMenuIndex;
  mainMenus = [];
  menus = [];
  checkForDevice: boolean;
  constructor(private router: Router, private sidebarService: SidebarService) {}

  ngOnInit(): void {
    this.mainMenus = this.sidebarService.getMainmenu();
    this.getScreenWidth();
    this.menus = this.sidebarService.getSubMenu().map((item) => {
      item['subMenu'] = item.name
        .replace(/([A-Z][a-z])/g, ' $1')
        .replace(/(\d)/g, ' $1');
      return item;
    });
  }

  toggleMenu(index) {
    this.isShowSubMenu = !this.isShowSubMenu;
    if (this.selectedMenuIndex !== index) {
      this.isShowSubMenu = true;
    }
    this.selectedMenuIndex = index;
  }

  navigateSubMenu(menu, index) {
    this.selectedSubMenuIndex = index;
    switch (menu.name) {
      case 'RoleMater':
        this.router.navigate(['home', 'admin', 'role-creation']);
        break;

      case 'ScreenMaster':
        this.router.navigate(['home', 'admin', 'screen-master']);
        break;

      case 'UserMaster':
        this.router.navigate(['home', 'admin', 'user-creation']);
        break;

      case 'AssignScreen':
        this.router.navigate(['home', 'admin', 'assign-screen']);
        break;

      case 'Company':
        this.router.navigate(['home', 'master', 'company']);
        break;

      case 'Branch':
        this.router.navigate(['home', 'master', 'branch']);
        break;

      case 'Sample Trans':
        this.router.navigate(['home', 'transaction', 'sample-tran']);
        break;
    }
  }

  getScreenWidth() {
    this.checkForDevice = screen.width > 600 ? true : false;
    console.log(this.checkForDevice);
  }
}
