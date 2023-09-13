import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { enviroment } from '../env/enviroment';

import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import { AutorizacionRequest, AutorizacionResponse } from "../dtos/AutorizacionDTO";

@Injectable()
export class Autorizacion{
    constructor(private http:HttpClient){}

    private URL=enviroment.apiURL;

    public getTokenAuthentication(auth :AutorizacionRequest):Observable<AutorizacionResponse>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
         });
        return this.http.post<AutorizacionResponse>(`${this.URL}${enviroment.authAPI}`,
        JSON.stringify(auth),{headers:reqHeader})
        .pipe(map((res:AutorizacionResponse)=>{
            console.log(res)
            debugger
            return res;
        }));
    }
}