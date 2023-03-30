import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DatePipe } from '@angular/common';
import { EmployeeTable } from 'src/Model/EmployeeTable';
import { DeviceDetectorService } from 'ngx-device-detector';
import * as XLSX from 'xlsx'


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employeeTable:EmployeeTable={
    file: undefined,
    name: '',
    currentTimeZone: 0,
    currentTimeStamp: undefined,
    userInfo: undefined
  };

  dataOfFile:any;

  constructor(private http:HttpClient,private datePipe:DatePipe,private deviceInfo:DeviceDetectorService) {
    console.log(this.deviceInfo.getDeviceInfo())

   }

  getData():Observable<any>{
    return this.http.get<any>('https://localhost:44303/api/Employee');
  }

  appendData(data:any):Observable<any>{
    
    this.employeeTable.currentTimeZone=new Date().getTimezoneOffset();
    this.employeeTable.userInfo=this.deviceInfo.userAgent;
    this.employeeTable.currentTimeStamp=this.datePipe.transform((new Date),'MM/dd/yyyy h:mm:ss');
    // data.append('timeStamp',this.employeeTable.currentTimeStamp)
    // data.append('timeZone',this.employeeTable.currentTimeZone.toString())
    // data.append('userInfo',this.employeeTable.userInfo)
    this.employeeTable.file=this.dataOfFile;
    this.employeeTable.name=data.devName;

    //const formobj=new FormData();
    //formobj.append('names',this.employeeTable.name);
    //formobj.set('file',this.employeeTable.file);
    console.log(this.employeeTable)
    let sentData=JSON.stringify(this.employeeTable)
    console.log(sentData);
    console.log(typeof sentData);

    return this.http.post('https://localhost:44303/api/Employee',this.employeeTable);
  }

  extractDataFromFile(file:File){
    let fileReader=new FileReader();
      fileReader.readAsBinaryString(file)
      fileReader.onload=(e)=>{
        var workbook=XLSX.read(fileReader.result,{type:'binary'});
        var sheetnames=workbook.SheetNames;
        this.dataOfFile=XLSX.utils.sheet_to_json(workbook.Sheets[sheetnames[0]]);
        
      }
  }
}
