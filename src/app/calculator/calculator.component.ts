import { Component, OnInit, ViewChild } from '@angular/core';
import { ITEM } from '../item';
import { ItemsService } from '../items.service';
import { AmortizationYears } from '../list-items';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor(private itemsService: ItemsService) { 
  }

  onSelected(value: number) {
    console.log(value)
  }

  ngOnInit(): void {
  }

  calculate() {
    
  }

}
