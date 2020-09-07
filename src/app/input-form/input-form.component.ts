import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  @Input() inputType: string;
  @Output() inputtedValue = new EventEmitter<Number>();

  myForm: FormGroup;
  inputValue: number;

  constructor(private formBuilder: FormBuilder) { }

  onKey() {
    this.inputtedValue.emit(this.inputValue);
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      inputField:[Validators.max(1000000), Validators.min(0)]
    })
  }

}
