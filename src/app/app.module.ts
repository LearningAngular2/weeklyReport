import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatInputModule, MatTabsModule, MatButtonModule, MatSelectModule, 
  MatCardModule, MatIconModule, MatToolbarModule, MatSlideToggleModule,
  MatSnackBarModule, MatTableModule, MatPaginatorModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
// import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// import {firebaseConfig} from './../environments/firebase.config';
// import { AngularFirestore } from 'angularfire2/firestore';

import { AppRoutingModule } from './app-router.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ContainerComponent } from './container/container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedComponent } from './shared/shared.component';
import { CreateuserComponent } from './createuser/createuser.component';
import { CreateprojectComponent } from './createproject/createproject.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    ContainerComponent,
    DashboardComponent,
    SharedComponent,
    CreateuserComponent,
    CreateprojectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule ,
    // AngularFireModule.initializeApp(firebaseConfig),
    // AngularFireDatabaseModule,
    // AngularFireAuthModule,
    MatInputModule,
    MatTabsModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }