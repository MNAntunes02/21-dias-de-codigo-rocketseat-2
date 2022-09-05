import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-button-theme',
  templateUrl: './button-theme.component.html',
  styleUrls: ['./button-theme.component.css']
})
export class ButtonThemeComponent implements OnInit {

  @ViewChild('checkbox') 
  checkbox = ElementRef;

  @ViewChild('bgSun') 
  bgSun = ElementRef<HTMLDivElement>;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    
  }


}
