import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stats-home',
  templateUrl: './stats-home.component.html',
  styleUrls: ['./stats-home.component.css'],
})
export class StatsHomeComponent implements OnInit {
  @Input() csvRecords: any;
  constructor() {}

  ngOnInit(): void {}
}
