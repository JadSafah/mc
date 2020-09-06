import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ITEM } from '../item';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-ddl',
  templateUrl: './ddl.component.html',
  styleUrls: ['./ddl.component.scss'],
})
export class DdlComponent implements OnInit {

  @Input() itemType: string;
  @Output() selected = new EventEmitter<number>();

  items: ITEM[];

  constructor(private itemsService: ItemsService) { 

  }
  
  public expanded = false;
  public selectedItem = "Select";

  public toggle() {
    this.expanded = !this.expanded;
  }

  public selectItem(item) {
    this.selectedItem = item.text;
    this.selected.emit(item.value);
    //console.log(item)

  }

  ngOnInit(): void {
    this.getItemList();
  }

  getItemList() {
    this.itemsService.getItems(this.itemType).subscribe(itemName =>(this.items = itemName));
  }

}
