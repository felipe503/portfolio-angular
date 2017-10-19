import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SkillsService {

  constructor(public http:Http) { }

  getSkillsData(){
    return this.http.get('http://localhost/portfolio/api/skills').map(res => res.json());
  }

}
