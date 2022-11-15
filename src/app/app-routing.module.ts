import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployesComponent } from './employer/add-employes/add-employes.component';
import { ListEmployesComponent } from './employer/list-employes/list-employes.component';
import { UpdateEmployesComponent } from './employer/update-employes/update-employes.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'addemployes',component:AddEmployesComponent},
  {path:'listemployer',component:ListEmployesComponent},
  {path:'updateemployes',component:UpdateEmployesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
