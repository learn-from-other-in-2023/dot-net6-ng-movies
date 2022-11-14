import { Component, Input, OnInit } from '@angular/core';
import { IMultipleSelectorModel } from './multiple-selector.model';

@Component({
  selector: 'app-multiple-selector',
  templateUrl: './multiple-selector.component.html',
  styleUrls: ['./multiple-selector.component.scss']
})
export class MultipleSelectorComponent implements OnInit {

  @Input()
  SelectedItems: IMultipleSelectorModel[] = [];

  @Input()
  NonSelectedItems: IMultipleSelectorModel[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  select(item: IMultipleSelectorModel, index: number) {
    this.SelectedItems.push(item);
    this.NonSelectedItems.splice(index, 1);
  }

  deselect(item: IMultipleSelectorModel, index: number) {
    this.NonSelectedItems.push(item);
    this.SelectedItems.splice(index, 1);
  }

  selectAll() {
    this.SelectedItems.push(...this.NonSelectedItems);
    this.NonSelectedItems = [];
  }

  deSelectAll() {
    this.NonSelectedItems.push(...this.SelectedItems);
    this.SelectedItems = [];
  }

}
