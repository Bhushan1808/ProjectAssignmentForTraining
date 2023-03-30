import { Component } from '@angular/core';
import { EmployeeTable } from 'src/Model/EmployeeTable';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  jsonData:any;
  toggle:boolean=false;
  fileData:string="";
  
  constructor(private empService:EmployeeService) {
    empService.getData().subscribe((e)=>
    {
      this.jsonData=e;
      console.log(e);
    });

  }
  toggleChange(){
    this.toggle=!this.toggle;
  }

  
}
