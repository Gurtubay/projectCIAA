import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { enviroment } from '../env/enviroment';

import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import { ModeloResponse,ModeloRequest } from "../dtos/ModeloDTO";

@Injectable()
export class Modelo{
    constructor(private http:HttpClient){}

    private URL=enviroment.modeloAPI;

    public runModel(req :ModeloRequest):Observable<ModeloResponse>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
         });
         debugger
        return this.http.post<ModeloResponse>(`${this.URL}`,
        JSON.stringify(req),{headers:reqHeader})
        .pipe(map((res:ModeloResponse)=>{
            console.log(res)
            debugger;
            return res;
        }));
    }
}