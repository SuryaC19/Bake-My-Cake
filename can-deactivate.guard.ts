import { CanDeactivateFn } from '@angular/router';
import { OrderViewComponent } from '../order-view/order-view.component';
import { SearchComponent } from '../search/search.component';

export const canDeactivateGuard: CanDeactivateFn<OrderViewComponent> = (component) => {
  return component.canDeactivate();
};


