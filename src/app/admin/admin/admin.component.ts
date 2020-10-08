import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from 'src/app/data.service';
import { AuthService } from 'src/app/shared/service/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit, OnDestroy {
  activeIndex: number = 0;
  masterTabs = [];
  subscription: Subscription;

  constructor(
    private authService: AuthService,
    private dataService: DataService
  ) {
    this.dataService.dataState.subscribe((data: any) => {
      this.masterTabs = data;
    });
  }

  ngOnInit(): void {}

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  closeTab(e) {
    if (e.originalEvent === 'MouseEvent') {
      let index = e.index;
      this.dataService.removeTabs(index);
    }
  }

  changeTab(e) {
    this.masterTabs = this.masterTabs.map((tab) => {
      if (this.masterTabs[e.index].tab === tab.tab) {
        tab.selected = true;
        return tab;
      }
      return tab;
    });
    console.log(this.masterTabs);
  }
}
