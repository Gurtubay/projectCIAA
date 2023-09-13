import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { enviroment } from '../env/enviroment';

import {map} from "rxjs/operators";
import {Observable} from "rxjs";
import { RegistroRequest, RegistroResponse } from "../dtos/RegistroDTO";

@Injectable()
export class Registro{
    constructor(private http:HttpClient){}

    private firmantesURL=enviroment.apiFirmantesURL;

    public createUser(req :RegistroRequest):Observable<RegistroResponse>{
        var reqHeader = new HttpHeaders({
            'Content-Type': 'application/json',
         });
        return this.http.post<RegistroResponse>(`${this.firmantesURL}${enviroment.registroAPI}`,
        JSON.stringify(req),{headers:reqHeader})
        .pipe(map((res:RegistroResponse)=>{
            console.log(res)
            return res;
        }));
    }
}