import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  subMenus = [
    {
      id: 1,
      short_code: 'RoleMater',
      path: '/admin/master/roleMaster',
      name: 'RoleMater',
      module_name: 'A',
    },
    {
      id: 2,
      short_code: 'ScreenMaster',
      path: '/admin/master/screenMaster',
      name: 'ScreenMaster',
      module_name: 'A',
    },
    {
      id: 3,
      short_code: 'UserMaster',
      path: '/admin/master/userMaster',
      name: 'UserMaster',
      module_name: 'A',
    },
    {
      id: 4,
      short_code: 'AssignScreen',
      path: '/admin/master/screenMap',
      name: 'AssignScreen',
      module_name: 'A',
    },
    {
      id: 23,
      short_code: 'Company',
      path: '/master/company',
      name: 'Company',
      module_name: 'M',
    },
    {
      id: 23,
      short_code: 'Branch',
      path: '/master/branch',
      name: 'Branch',
      module_name: 'M',
    },
    {
      id: 9,
      short_code: 'LookUP',
      path: '/master/lookup',
      name: 'LookUP',
      module_name: 'M',
    },
    {
      id: 5,
      short_code: 'Country',
      path: '/master/country',
      name: 'Country',
      module_name: 'M',
    },
    {
      id: 8,
      short_code: 'Customer',
      path: '/master/customer',
      name: 'Customer',
      module_name: 'M',
    },
    {
      id: 15,
      short_code: 'Vendor',
      path: '/master/vendor',
      name: 'Vendor',
      module_name: 'M',
    },
    {
      id: 15,
      short_code: 'Service',
      path: '/master/vendor',
      name: 'Service',
      module_name: 'M',
    },
    {
      id: 10,
      short_code: 'Clause',
      path: '/master/clause',
      name: 'Clause',
      module_name: 'M',
    },
    {
      id: 14,
      short_code: 'TravelRequest',
      path: '/transaction/travelrequest',
      name: 'travelrequest',
      module_name: 'T',
    },

    {
      id: 16,
      short_code: 'TRApproval',
      path: '/transaction/trapproval',
      name: 'TR Approval',
      module_name: 'T',
    },
    {
      id: 17,
      short_code: 'TRStatus',
      path: '/reports/trstatus',
      name: 'trstatus',
      module_name: 'R',
    },
    {
      id: 30,
      short_code: 'VendorList',
      path: '/reports/vendorlist',
      name: 'Vendor List',
      module_name: 'R',
    },
  ];

  mainMenus = [
    {
      name: 'Admin',
      icon: 'pi pi-id-card',
      module_name: 'A',
    },
    {
      name: 'Master',
      icon: 'pi pi-microsoft',
      module_name: 'M',
    },
    {
      name: 'Transaction',
      icon: 'pi pi-sort-alt',
      module_name: 'T',
    },
    {
      name: 'Reports',
      icon: 'pi pi-file-pdf',
      module_name: 'R',
    },
  ];
  constructor() {}

  getMainmenu() {
    return this.mainMenus;
  }

  getSubMenu() {
    return this.subMenus;
  }
}
