import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';

import { Hadis } from '../../models/hadis';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @Input()
  hadis: Hadis;

  @ViewChild('contenthtml')
  contenthtml: ElementRef;

  constructor() { }

  ngOnInit() {
    console.log(this.hadis);
    this.loadData(this.hadis.hadisInfo.text);
  }

  loadData(data) {
    this.contenthtml.nativeElement.innerHTML = data;
  }

}