import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { faFileLines } from '@fortawesome/free-solid-svg-icons';
import { InstagramComponent } from './components/instagram/instagram.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  faFileLine = faFileLines

  title = '21-dias-de-codigo-semana-2';

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(InstagramComponent);
  }



}
