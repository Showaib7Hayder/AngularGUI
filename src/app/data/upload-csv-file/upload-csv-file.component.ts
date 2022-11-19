import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxCsvParser, NgxCSVParserError } from 'ngx-csv-parser';

@Component({
  selector: 'app-upload-csv-file',
  templateUrl: './upload-csv-file.component.html',
  styleUrls: ['./upload-csv-file.component.css'],
})
export class UploadCsvFileComponent implements OnInit {
  ngOnInit(): void {}
  visible: boolean = true;

  csvRecords: any;

  // In case the header config is true the result will be: array of json objects
  // In case the header config is true the result will be: array of array objects
  header: boolean = false;

  constructor(private ngxCsvParser: NgxCsvParser) {}

  @ViewChild('fileImportInput') fileImportInput: any;

  fileChangeListener($event: any): void {
    const files = $event.srcElement.files;
    // this.header =
    //   (this.header as unknown as string) === 'true' || this.header === true;

    this.ngxCsvParser
      .parse(files[0], {
        header: this.header,
        delimiter: ',',
        encoding: 'utf8',
      })
      .pipe()
      .subscribe({
        next: (result): void => {
          console.log('Result', result);
          this.csvRecords = result;
        },
        error: (error: NgxCSVParserError): void => {
          console.log('Error', error);
        },
      });
    this.visible = false;
  }
}
