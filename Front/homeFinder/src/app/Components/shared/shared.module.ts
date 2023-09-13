import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

//Angular material
import { MatListModule } from "@angular/material/list";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {MatDialogModule} from '@angular/material/dialog';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTableModule} from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import {MatSidenavModule} from '@angular/material/sidenav';
import { DatePipe } from '@angular/common';
import { RouterModule } from '@angular/router'; // Importa RouterModule
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatProgressBarModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule,
    MatTooltipModule,
    MatSidenavModule,
    DatePipe,
    MatListModule,
    BrowserModule,
    RouterModule,
    MatCardModule
  ],
  exports: [
    CommonModule,
    MatSlideToggleModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatGridListModule,
    MatProgressBarModule,
    MatDialogModule,
    MatCheckboxModule,
    MatTableModule,
    MatTooltipModule,
    MatSidenavModule,
    DatePipe,
    MatListModule,
    BrowserModule,
    RouterModule,
    MatCardModule
  ]
})
export class SharedModule { }
