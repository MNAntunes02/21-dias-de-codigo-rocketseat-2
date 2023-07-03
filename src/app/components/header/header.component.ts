import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;
  menu:boolean = false;

  // @ViewChild('menu') menu!: ElementRef<HTMLDivElement>

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){
    this.menu = !this.menu;
    console.log(this.menu);
  }

  




}
