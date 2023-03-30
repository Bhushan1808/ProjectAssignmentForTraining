import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UploadComponent } from './upload/upload.component';
import { DetailsComponent } from './details/details.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { DatePipe } from '@angular/common';
import { FileInfoComponent } from './file-info/file-info.component';
import { ObjectToStringPipe } from './object-to-string.pipe';


@NgModule({
  declarations: [
    AppComponent,
    UploadComponent,
    DetailsComponent,
    FileInfoComponent,
    ObjectToStringPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
