import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatStepperModule } from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';






const COMMONS = [
  MatToolbarModule,
  MatIconModule,
  MatButtonModule,
  MatStepperModule,
  MatInputModule,
  ReactiveFormsModule,
  MatSidenavModule,
  MatListModule,
  MatSnackBarModule,
  MatSelectModule
]



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ...COMMONS
  ]
})
export class SharedModule { }
