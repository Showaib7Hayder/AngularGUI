import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadCsvFileComponent } from './upload-csv-file/upload-csv-file.component';

const routes: Routes = [
  {
    path: '',
    component: UploadCsvFileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataRoutingModule {}
