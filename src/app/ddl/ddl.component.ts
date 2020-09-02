import { Component, OnInit, Input } from '@angular/core';
import { AmortizationYears } from './../amortization-years';

@Component({
  selector: 'app-ddl',
  templateUrl: './ddl.component.html',
  styleUrls: ['./ddl.component.scss'],
})
export class DdlComponent implements OnInit {

  items = AmortizationYears;
  @Input() name: string;

  constructor() { 
  }

  public expanded = false;
  public selectedItem = "Select";

  public toggle() {
    this.expanded = !this.expanded;
  }

  public selectItem(item) {
    this.selectedItem = item.text;
    console.log(item)

  }

  ngOnInit(): void {
  }

}
