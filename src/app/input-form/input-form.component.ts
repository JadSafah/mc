import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  myForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  inputValue: number;

  onKey() {
    console.log(this.inputValue)
  }

  ngOnInit() {
    this.myForm = this.formBuilder.group({
      inputField:[Validators.max(1000000), Validators.min(0)]
    })
  }

}
