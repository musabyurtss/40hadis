import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Hadis } from '../../modules/ngrx';

@Component({
  selector: 'app-hadis-text',
  templateUrl: './hadis-text.component.html',
  styleUrls: ['./hadis-text.component.css']
})
export class HadisTextComponent implements OnInit {

  @Input() hadis: Hadis;

  constructor() { }

  ngOnInit() {}

}
