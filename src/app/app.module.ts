import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';

import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './login/login.component';//peticiones al servidor
//import { HttpClientModule } from '@angular/common/http/http';

import { JwtHelperService } from "@auth0/angular-jwt";
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { DialogComponent } from './dialog/dialog.component';
import { AnagramaComponent } from './anagrama/anagrama.component';
import { PptComponent } from './ppt/ppt.component';
import { TpmComponent } from './tpm/tpm.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    TableComponent,
    LoginComponent,
    RegistrarseComponent,
    DialogComponent,
    AnagramaComponent,
    PptComponent,
    TpmComponent
  ],
  imports: [
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
