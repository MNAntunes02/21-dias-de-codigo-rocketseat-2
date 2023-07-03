import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit , AfterViewInit{

  faAngleRight = faAngleRight;

  @ViewChild('grid') grid! : ElementRef<HTMLDivElement>

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
  }
 
  nextImg(){
    let width = this.grid.nativeElement.scrollWidth/5;
    let left = this.grid.nativeElement.scrollLeft

    // this.grid.nativeElement.scrollLeft += this.grid.nativeElement.scrollWidth/5;
    this.grid.nativeElement.scrollTo(left + width , 0);
  }
  
  backImg(){
    let width = this.grid.nativeElement.scrollWidth/5;
    let left = this.grid.nativeElement.scrollLeft

    this.grid.nativeElement.scrollTo(left - width , 0);
    console.log(this.grid.nativeElement.scrollLeft)
  }


}
