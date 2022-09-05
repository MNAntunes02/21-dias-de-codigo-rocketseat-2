import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { faBars } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  faBars = faBars;

  @ViewChild('menu') menu!: ElementRef<HTMLDivElement>
  @ViewChild('burger') burger!: ElementRef<HTMLInputElement>

  constructor() { }

  ngOnInit(): void {
  }

  openMenu(){
    if (this.burger.nativeElement.checked) {
      this.menu.nativeElement.setAttribute('class', 'lg:flex lg:divide-x divide lg:divide-gray-600 lg:bg-transparent block relative top-52 left-52 bg-black bg-opacity-70 p-2 gap-3 text-lg z-30 rounded-lg duration-500')
    }
    else{
      this.menu.nativeElement.setAttribute('class', 'lg:flex lg:divide-x divide lg:divide-gray-600 lg:bg-transparent block relative top-52 left-3 bg-black bg-opacity-70 p-2 gap-3 text-lg z-30 rounded-lg duration-500')
    }
  }


}
