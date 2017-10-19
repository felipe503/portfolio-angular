import { Component, OnInit } from '@angular/core';
import { EducationService } from '../../services/education.service';
import { Data } from '../../interfaces';
@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.sass']
})
export class EducationComponent implements OnInit {

  constructor(private educationService:EducationService) { }
  data:Data[];
  ngOnInit() {
    this.educationService.getEducationData().subscribe((data) => {
      this.data = data;
    });
  }

}
