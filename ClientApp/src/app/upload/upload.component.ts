import { Component } from '@angular/core';
import { count } from 'rxjs';
import { EmployeeService } from '../services/employee.service';
import * as XLSX from 'xlsx'


@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {

  uploadedFile:any;
  devName:string="";
  span:boolean=false;
  firstReq:boolean=true;
  dataOfFile:any;
  constructor(private empService:EmployeeService) {
    

  }

  uploadData(formData:FormData){
    console.log(formData)
    this.empService.appendData(formData).subscribe(
        data=>{
          console.log(data)
        }
     )

  }
  checkFileFormat(event:any){
    this.firstReq=false;
    this.uploadedFile=event.target.files[0];
    console.log(event,":",this.uploadedFile);
    const fileName=event.target.files[0].name;
    let i=fileName.length
    let format='';
    while(fileName[i]!='.'){
      format=fileName[i]+format;
      i=i-1;
    }
    console.log(format.replace("undefined",""))
    if(format.replace("undefined","")!="xlsx"){
      this.span=true;
    }
    else{
      this.span=false;
      this.empService.extractDataFromFile(this.uploadedFile)
      }

    }
    
}

