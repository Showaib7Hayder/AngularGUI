import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { UploadCsvFileComponent } from './upload-csv-file/upload-csv-file.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SharedModule } from '../shared/shared.module';
import { TableComponent } from './table/table.component';
import { NgxCsvParserModule } from 'ngx-csv-parser';

@NgModule({
  declarations: [UploadCsvFileComponent, PlaceholderComponent, TableComponent],
  imports: [CommonModule, DataRoutingModule, SharedModule, NgxCsvParserModule],
  exports: [UploadCsvFileComponent],
})
export class DataModule {}
