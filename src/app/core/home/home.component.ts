import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  toogle: boolean;

  constructor() {}
  ngOnInit(): void {
    this.overlayClick();
  }

  openNav() {
    document.getElementById('mySidenav').style.width = '30%';
  }

  closeNav() {
    document.getElementById('mySidenav').style.width = '0';
  }

  toggleBtnclick = function () {
    this.toogle = !this.toogle;
    document.getElementById('sidebar').classList.toggle('active');
    document.getElementById('overlay').classList.toggle('hidden');
  };

  overlayClick() {
    document.getElementById('overlay').classList.toggle('hidden');
    document.getElementById('sidebar').classList.toggle('active');
  }
}
