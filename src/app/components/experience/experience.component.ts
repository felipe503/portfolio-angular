import { Component, OnInit } from '@angular/core';
import { ExperienceService } from '../../services/experience.service';
import { Data } from '../../interfaces';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {
  data:Data;
  constructor(private experienceService:ExperienceService) { }

  ngOnInit() {
    this.experienceService.getExperienceData().subscribe((data) => {
      this.data = data;
    });
  }

}
