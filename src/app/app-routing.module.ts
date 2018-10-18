import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { AuthServiceService } from "./servicios/auth-service.service";
import { RegistrarseComponent } from './registrarse/registrarse.component';
import { AnagramaComponent } from './anagrama/anagrama.component';
import { PptComponent } from './ppt/ppt.component';
import { TpmComponent } from './tpm/tpm.component';




const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"registrarse",component:RegistrarseComponent},
  {path:"",component:NavComponent,//,canActivate:[AuthServiceService]
    children:
    [
    {path:"",component:DashboardComponent},
    {path:"anagrama",component:AnagramaComponent},
    {path:"ppt",component:PptComponent},
    {path:"tpm",component:TpmComponent}

    ]
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
