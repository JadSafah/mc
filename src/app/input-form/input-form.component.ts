import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.scss']
})
export class InputFormComponent implements OnInit {

  constructor() { }

  inputValue = 0;

  onKey() {
    console.log(this.inputValue)
  }

  ngOnInit(): void {
  }

}
