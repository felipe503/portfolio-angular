import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

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
import { CvComponent } from './components/cv/cv.component';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes=[
   { path:'', component:HomeComponent },
   { path:'cv', component:CvComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    ProfilComponent,
    LanguagesComponent,
    EducationComponent,
    ExperienceComponent,
    SkillsComponent,
    CvComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
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
