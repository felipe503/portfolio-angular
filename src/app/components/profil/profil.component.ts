import { Component, OnInit } from '@angular/core';
import { ProfilService } from '../../services/profil.service';
import { Data } from '../../interfaces';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.sass']
})
export class ProfilComponent implements OnInit {
  data:Data[];
  items:string[];
  constructor(private profilService:ProfilService) { }

  ngOnInit() {
    this.profilService.getProfilData().subscribe((data) => {
      this.data = data;
      this.items = this.data[0]['field_items'].split('|');
    });
  }
}
