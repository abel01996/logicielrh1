import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import{Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employer } from '../../model/employer';

@Injectable({

    providedIn: 'root'

})

export class ServiceEmployer{

  private apiServiceUrl= environment.apiBaseUrl;

    constructor(private http: HttpClient) {}

    public getEmployer():Observable<Employer[]>{
        
        return this.http.get<Employer[]>('${this.apiServiceUrl}/listEmployer');
    }
 

}