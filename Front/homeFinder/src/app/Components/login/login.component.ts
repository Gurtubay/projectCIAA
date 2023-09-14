import { Component, OnInit,HostListener } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { Platform } from '@angular/cdk/platform';
import { AutorizacionRequest } from 'src/app/dtos/AutorizacionDTO';
import { Autorizacion } from 'src/app/Service/Autorization.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading: boolean;
    constructor(public platform:Platform,public dialog: MatDialog, private fb: FormBuilder, private _snackBar: MatSnackBar, private router: Router, private auth:Autorizacion){ 
      this.form = this.fb.group({
        usuario:['', Validators.required],
        password:['', Validators.required]
        
      })
      this.loading=false;
    }
    isdefinitelyMobile=false;

    ngOnInit(): void {
      
    }

    async ingresar(){
      this.loading = true;
      const usuario = this.form.value.usuario
      const pass = this.form.value.password
      const autoriza : AutorizacionRequest = {
        Contrasena : pass,
        Usuario : usuario
      }
  
      this.auth.getTokenAuthentication(autoriza)
      .subscribe({
        next: (response) =>{
          if(response !=null){
            console.log(response)
            console.log(response.usuario)
            if(response.usuario!=null){
              this.router.navigate(['home']);
            }
            else{
              console.log("Credenciales no validas")
            }
          }
          else{
            console.log('Respuesta null')
          }
        },
        error:(error) => {
                  console.log(error);
        }
  
      });
    }
}
