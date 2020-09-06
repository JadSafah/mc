import { Injectable } from '@angular/core';
import { ITEM } from './item';
import { Observable, of } from 'rxjs';
import { AmortizationYears, AmortizationMonths, PaymentFrequency, Term } from './list-items';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor() { }

  getItems(itemType: string): Observable<ITEM[]> {
    console.log(itemType);
    switch(itemType) {
      case "AmortizationYears":
        return of(AmortizationYears);
        break;
      case "AmortizationMonths":
        return of(AmortizationMonths);
        break;
      case "PaymentFrequency":
        return of(PaymentFrequency);
        break;
      case "Term":
        return of(Term);
        break;
      default:
        console.log("ERROR!")
    
  }
}
  
}
