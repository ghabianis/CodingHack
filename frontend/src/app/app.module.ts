import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { LoginComponent } from './login/login.component';
import { BaseComponent } from './base/base.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { CoursesComponent } from './courses/courses.component';
import { HomeComponent } from './home/home.component';
import { UploadComponent } from './upload/upload.component';
import { PartnersComponent } from './partners/partners.component';
import { CalanderComponent } from './calander/calander.component';
import { SettingsComponent } from './settings/settings.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';
import { SingupComponent } from './singup/singup.component';
import { PatientComponent } from './patient/patient.component';
import { BraceletComponent } from './bracelet/bracelet.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { StartComponent } from './start/start.component';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    LoginComponent,
    BaseComponent,
    CoursesComponent,
    HomeComponent,
    UploadComponent,
    PartnersComponent,
    CalanderComponent,
    SettingsComponent,
    ProfileComponent,
    NotificationComponent,
    SingupComponent,
    PatientComponent,
    BraceletComponent,
    PatientDetailsComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
