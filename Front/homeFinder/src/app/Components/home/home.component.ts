import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
//import {DatosTabla} from 'src/app/Interfaces/datosTabla';
import { MatDatepickerInputEvent, MatDatepickerModule } from '@angular/material/datepicker';
import {FormGroup, FormControl,FormsModule} from '@angular/forms'
import { HttpClient } from '@angular/common/http';
import { Publicar } from 'src/app/Service/Propiedad.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  propiedades: any[] = [];
  constructor(private publicar: Publicar, private router:Router){}
  ngOnInit(): void {
    this.publicar.getPropertyList().subscribe(data => {
      this.propiedades = data;
    });
  }

  anadirNuevo(){
    this.router.navigate(['publicar']);
  }
 }
