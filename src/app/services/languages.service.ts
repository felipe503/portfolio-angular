import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class LanguagesService {

  constructor(public http:Http) { }
    getLanguageService(){
      return this.http.get('http://localhost/portfolio/api/languages').map(res=>res.json());
    };
}
