import { Component, OnInit } from '@angular/core';
import { Employer } from 'src/model/employer';
import { ServiceEmployer } from 'src/app/service/ServiceEmployer';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-list-employes',
  templateUrl: './list-employes.component.html',
  styleUrls: ['./list-employes.component.css']
})
export class ListEmployesComponent implements OnInit {

  public employer!: Employer[];

 constructor( private ServiceEmployer: ServiceEmployer){}

 ngOnInit(){
  this.getEmployer();
}
 
 public getEmployer(): void{

  this.ServiceEmployer.getEmployer().subscribe(
    (response:Employer[])=>{
      this.employer = response;
    },
    (error: HttpErrorResponse)=>{
      alert(error.message);
    }
  )

 }
 
}

  


