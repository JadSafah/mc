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

  ay: number;
  am: number;
  pf: number;
  t: number;
  ma: number;
  public ir: number;

  constructor(private itemsService: ItemsService) { 
  }

  setAmortizationYears(value: number) {
    this.ay = value;
  }

  setAmortizationMonths(value: number) {
    this.am = value;
  }

  setPaymentFrequency(value: number) {
    this.pf = value;
  }

  setTerm(value: number) {
    this.t = value;
  }

  setMortageAmount(value: number) {
    this.ma = value;
  }

  setInterestRate(value: number) {
    this.ir = value;
  }

  ngOnInit(): void {
  }

  calculate() {
    const r = (this.ir/100)/this.pf;
    const n = (this.ay+(this.am/12))*this.pf;
    const numerator = (r)*(Math.pow(1+r,n));
    const denominator = (Math.pow(1+r,n))-1;
    const mortgagePayment = (this.ma)*(numerator/denominator);
    console.log(Math.round((mortgagePayment + Number.EPSILON) * 100) / 100);
  }

}
