import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
filterText:string=""

@Output()
typesOfCategory = new EventEmitter<string>()

filterProduct() {
  this.typesOfCategory.emit(this.filterText)
}
}
