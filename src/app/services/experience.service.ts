import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ExperienceService {

  constructor(public http:Http) { }
  getExperienceData(){
    //return this.http.get('http://localhost/portfolio/api/experience').map(res => res.json());
    return this.http.get('../../../assets/json/experience.json').map(res => res.json());
  }
}
