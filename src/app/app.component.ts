import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'exerc.4';

  constructor(private _snackBar: MatSnackBar){}
  open(){
    this._snackBar.open('Pacote Comprado','Fechar')
  }

}
