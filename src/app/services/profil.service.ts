import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class ProfilService {
  constructor(public http:Http) {
    console.log('ProfilService connected...');
  }
  getProfilData(){
    return this.http.get('http://localhost/portfolio/api/profil').map(res => res.json());
  }

}
