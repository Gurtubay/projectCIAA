import { Component, OnInit,HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Platform } from '@angular/cdk/platform';
import { CreatePropiedadRequest, CreatePropiedadResponse } from 'src/app/dtos/PropiedadDTO';
import { Publicar } from 'src/app/Service/Propiedad.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {
  form: FormGroup;
  loading: boolean;
    constructor(public dialog: MatDialog, private fb: FormBuilder, private router: Router, private registro:Publicar){ 
      this.form = this.fb.group({
        titulo: ['', Validators.required],
        descripcion: ['', Validators.required],
        precio: ['', Validators.required],
        ubicacion: ['', Validators.required],
        tipoVivienda:['', Validators.required],
        calleConectadaEnPies: ['', Validators.required],
        areaLote : ['', Validators.required],
        calidadMateriales : ['', Validators.required],
        condicionCasa : ['', Validators.required],
        añoConstruccion : ['', Validators.required],
        añoRemodelado : ['', Validators.required],
        areaRevestimiento : ['', Validators.required],
        areaSotano1 : ['', Validators.required],
        areaSotano2 : ['', Validators.required],
        areaSotanoSinTerminar : ['', Validators.required],
        areaSotanoTotal : ['', Validators.required],
        areaPrimerPiso : ['', Validators.required],
        areaSegundoPiso : ['', Validators.required],
        areaTerminadaBajaCalidad : ['', Validators.required],
        areaViviendaSobreSuelo : ['', Validators.required],
        bañosCompletosSotano : ['', Validators.required],
        bañosMediosSotano : ['', Validators.required],
        bañosCompletosSobreSuelo : ['', Validators.required],
        bañosMediosSobreSuelo: ['', Validators.required]
      });
      this.loading=false;
    }

    ngOnInit(): void {
      
    }

    async registrar(){
      const datosUser: CreatePropiedadRequest = {
        usuarioId: 4,
        titulo: this.form.value.titulo,
        descripcion: this.form.value.descripcion,
        precio: this.form.value.precio,
        ubicacion: this.form.value.ubicacion,

      }
      
      debugger
      this.registro.createProperty(datosUser)
      .subscribe({
        
        next:(response)=>{
          if(response!=null){
            console.log(response)
            if(response.message=="Exito"){
              this.router.navigate(['login'])
            }
            else{
              console.log("Ha ocurrido un error")
            }
          }
          else{
            console.log('Respuesta null')
          }
        },
        error:(error)=>{
          console.log(error);
        }

      })
    }
}
