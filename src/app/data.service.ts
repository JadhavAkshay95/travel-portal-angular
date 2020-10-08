import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public dataSubject = new Subject<any>();
  public dataState = this.dataSubject.asObservable();

  adminTabs = [];

  constructor() {}

  addTabs(tabData: any) {
    if (
      this.adminTabs.length &&
      this.adminTabs.find((tab) => tab.tab === tabData) !== undefined
    ) {
      return;
    }
    this.adminTabs.map((tab) => {
      tab.selected = false;
      return tab;
    });
    this.adminTabs.push({ tab: tabData, selected: true });
    this.dataSubject.next([...new Set(this.adminTabs)]);
  }

  removeTabs(tabIndex) {
    this.adminTabs.splice(
      tabIndex,
      1
    );
    this.dataSubject.next(this.adminTabs);
  }
}
