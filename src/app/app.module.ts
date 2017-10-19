import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ProfilComponent } from './components/profil/profil.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';

import { ProfilService } from './services/profil.service';
import { LanguagesService } from './services/languages.service';
import { SkillsService } from './services/skills.service';
import { EducationService } from './services/education.service';
import { ExperienceService } from './services/experience.service';

@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    LanguagesComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [
    ProfilService,
    LanguagesService,
    SkillsService,
    EducationService,
    ExperienceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
