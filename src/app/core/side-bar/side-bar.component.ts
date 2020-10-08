import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { AuthService } from 'src/app/shared/service/auth.service';
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
  constructor(
    private router: Router,
    private authService: AuthService,
    private sidebarService: SidebarService,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.mainMenus = this.sidebarService.getMainmenu();
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
    this.router.navigate(['home', 'admin', 'index']);
  }

  navigateSubMenu(menu, index) {
    this.selectedSubMenuIndex = index;
    this.dataService.addTabs(menu.name);
  }

  add() {
    this.authService.addMasterTabs('');
  }
}
