import { Component, OnInit } from '@angular/core';
import { LanguagesService } from '../../services/languages.service';
import { Data } from '../../interfaces';
@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.sass']
})
export class LanguagesComponent implements OnInit {
  data:Data[];
  constructor(private languagesService:LanguagesService) { }

  ngOnInit() {
    this.languagesService.getLanguageService().subscribe((data) => {
      this.data = data;
    });
  }
}
