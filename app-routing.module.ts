import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { OrderViewComponent } from './order-view/order-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderListComponent } from './order-list/order-list.component';
import { authGuard } from './services/auth.guard';
import { canDeactivateGuard } from './services/can-deactivate.guard';

const routes: Routes = [
  {path : "login", component : LoginComponent},
  {path: "", component : ProductListComponent},
  {path : "order-view/:id", component : OrderViewComponent,canDeactivate: [canDeactivateGuard]},
  {path : "order-list", component : OrderListComponent,canActivate: [authGuard]},
  {path: '**',component: PageNotFoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
