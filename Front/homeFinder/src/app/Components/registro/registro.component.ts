import { Component, OnInit,HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Platform } from '@angular/cdk/platform';
import { RegistroRequest } from 'src/app/dtos/RegistroDTO';
import { Registro } from 'src/app/Service/Registro.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  form: FormGroup;
  loading: boolean;
    constructor(public dialog: MatDialog, private fb: FormBuilder, private router: Router, private registro:Registro){ 
      this.form = this.fb.group({
        usuario:['', Validators.required],
        password:['', Validators.required],
        nombres:['', Validators.required],
        apellidos:['', Validators.required],
        correo:['', Validators.required],
        telefono:['', Validators.required],
        
      })
      this.loading=false;
    }

    ngOnInit(): void {
      
    }

    async registrar(){
      const datosUser : RegistroRequest={
        Usuario: this.form.value.usuario,
        Contrasena: this.form.value.password,
        Nombres: this.form.value.nombres,
        Apellidos: this.form.value.apellidos,
        CorreoElectronico: this.form.value.correo,
        Telefono: this.form.value.correo,
        Tipo: 'Cliente'
      }
      debugger
      this.registro.createUser(datosUser)
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
