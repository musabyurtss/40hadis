import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-add-hadis',
  templateUrl: './add-hadis.component.html',
  styleUrls: ['./add-hadis.component.css']
})
export class AddHadisComponent implements OnInit {
  @Output() addHadis = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add(hadisInput) {
    // console.log(hadisInput.value);
    this.addHadis.emit(hadisInput.value);
    hadisInput.value = '';
  }

}
