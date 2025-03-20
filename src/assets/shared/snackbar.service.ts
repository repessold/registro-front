import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  public showCreate() {
    return this.snackBar.open(`Cadastrado com sucesso!`, 'Fechar', {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }

  public showUpdate() {
    return this.snackBar.open(` Alterado com sucesso!`, 'Fechar', {
      duration: 6000,
      horizontalPosition: 'center',
      verticalPosition: 'top',

    });
  }


}
