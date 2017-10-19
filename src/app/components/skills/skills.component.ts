import { Component, OnInit } from '@angular/core';
import { SkillsService } from '../../services/skills.service';
import { Data } from '../../interfaces';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.sass']
})
export class SkillsComponent implements OnInit {
  data:Data[];
  constructor(private skillsService:SkillsService) { }

  ngOnInit() {
    this.skillsService.getSkillsData().subscribe((data) => {
      this.data = data;
    });
  }

}
