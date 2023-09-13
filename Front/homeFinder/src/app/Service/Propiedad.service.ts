import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { enviroment } from '../env/enviroment';

import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import { CreatePropiedadRequest, CreatePropiedadResponse } from "../dtos/PropiedadDTO";

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
}