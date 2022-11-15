import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './nav/toolbar/toolbar.component';
import{MatToolbarModule}from'@angular/material/toolbar';
import{MatIconModule}from'@angular/material/icon';
import { NavbarComponent } from './nav/navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddEmployesComponent } from './employer/add-employes/add-employes.component';
import { ListEmployesComponent } from './employer/list-employes/list-employes.component';
import { UpdateEmployesComponent } from './employer/update-employes/update-employes.component';
import { HomeComponent } from './home/home.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServiceEmployer } from './service/ServiceEmployer';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavbarComponent,
    AddEmployesComponent,
    ListEmployesComponent,
    UpdateEmployesComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatPaginatorModule ,
    MatFormFieldModule,
    MatIconModule,
    LayoutModule,
    MatTableModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    NgbModule
  ],
  providers: [ServiceEmployer],
  bootstrap: [AppComponent]
})
export class AppModule { }
