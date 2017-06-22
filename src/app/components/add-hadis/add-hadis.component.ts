import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-hadis',
  templateUrl: './add-hadis.component.html',
  styleUrls: ['./add-hadis.component.css']
})
export class AddHadisComponent implements OnInit {
  @Output() addHadis = new EventEmitter();

  createHadisForm;

  constructor(private fb: FormBuilder) {
    this.createHadisForm = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  createHadis(event) {
    event.stopPropagation();
    this.addHadis.emit(this.createHadisForm.value);
    // hadisInput.value = '';
  }

}
