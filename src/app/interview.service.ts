import { Injectable } from '@angular/core';
import { Http , URLSearchParams} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class InterviewHttpService{

  private relativeUrl = "/data/data.json";
  private url = "localhost:4200/";
  private dataURL= "";

  private headers;
  constructor(private http : Http){
    this.headers = new Headers({'Content-Type': 'application/json'});
    this.headers.append('Access-Control-Allow-Headers', 'Content-Type');
    this.headers.append('Access-Control-Allow-Methods', 'GET');
    this.headers.append('Access-Control-Allow-Origin', '*');
    this.dataURL = this.url + this.relativeUrl;
  }

  getInterviewInfor():Observable<any>{
    return this.http.get(this.relativeUrl);
  }

}
