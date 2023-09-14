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
import { ModeloRequest } from 'src/app/dtos/ModeloDTO';
import { Modelo } from 'src/app/Service/Modelo.service';

@Component({
  selector: 'app-publicar',
  templateUrl: './publicar.component.html',
  styleUrls: ['./publicar.component.css']
})
export class PublicarComponent implements OnInit {
  form: FormGroup;
  loading: boolean;
    constructor(public dialog: MatDialog, private fb: FormBuilder, private router: Router, private registro:Publicar, private modelo:Modelo){ 
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
      const datosModelo: ModeloRequest = {
        TipoVivienda: this.form.value.tipoVivienda,
        CalleConectadaEnPies: this.form.value.calleConectadaEnPies,
        AreaLote: this.form.value.areaLote,
        CalidadMateriales: this.form.value.calidadMateriales,
        CondicionCasa: this.form.value.condicionCasa,
        AñoConstruccion: this.form.value.añoConstruccion,
        AñoRemodelado: this.form.value.añoRemodelado,
        AreaRevestimiento: this.form.value.areaRevestimiento,
        AreaSotano1: this.form.value.areaSotano1,
        AreaSotano2: this.form.value.areaSotano2,
        AreaSotanoSinTerminar: this.form.value.areaSotanoSinTerminar,
        AreaSotanoTotal: this.form.value.areaSotanoTotal,
        AreaPrimerPiso: this.form.value.areaPrimerPiso,
        AreaSegundoPiso: this.form.value.areaSegundoPiso,
        AreaTerminadaBajaCalidad: this.form.value.areaTerminadaBajaCalidad,
        AreaViviendaSobreSuelo: this.form.value.areaViviendaSobreSuelo,
        BañosCompletosSotano: this.form.value.bañosCompletosSotano,
        BañosMediosSotano: this.form.value.bañosMediosSotano,
        BañosCompletosSobreSuelo: this.form.value.bañosCompletosSobreSuelo,
        BañosMediosSobreSuelo: this.form.value.bañosMediosSobreSuelo
    };
    
      debugger
      this.registro.createProperty(datosUser)
      .subscribe({
        
        next:(response)=>{
          if(response!=null){
            console.log(response)
            if(response.message=="Exito"){
              console.log("BD exito")
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

      this.modelo.runModel(datosModelo)
      .subscribe({
        
        next:(response)=>{
          if(response!=null){
            console.log(response)
            if(response.resultado!=null){
              console.log(response.resultado)
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
