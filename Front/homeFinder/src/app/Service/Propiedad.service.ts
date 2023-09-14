import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { enviroment } from '../env/enviroment';

import {catchError, map} from "rxjs/operators";
import {Observable, throwError} from "rxjs";
import { CreatePropiedadRequest, CreatePropiedadResponse, Propiedad } from "../dtos/PropiedadDTO";

@Injectable()
export class Publicar{
    constructor(private http:HttpClient){}

    private URL=enviroment.apiURL;

    public createProperty(req :CreatePropiedadRequest):Observable<CreatePropiedadResponse>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
         });
         debugger
        return this.http.post<CreatePropiedadResponse>(`${this.URL}${enviroment.publicarAPI}`,
        JSON.stringify(req),{headers:reqHeader})
        .pipe(map((res:CreatePropiedadResponse)=>{
            console.log(res)
            debugger;
            return res;
        }));
    }

    public getPropertyList():Observable<Propiedad[]>{
        return this.http.get<Propiedad[]>(`${this.URL}${enviroment.publicarAPI}`).pipe(
            catchError(error=>{
                console.error(error);
                return throwError('Something went wrong. Please try again later.'); 
            })

        )
    }
}