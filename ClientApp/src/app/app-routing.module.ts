import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { FileInfoComponent } from './file-info/file-info.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path:"upload",
    component:UploadComponent
  },
  {
    path:"details",
    component:DetailsComponent
  },
  {
    path:"details/fileInfo",
    component:FileInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
