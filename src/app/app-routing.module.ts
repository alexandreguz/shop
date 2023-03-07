import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';
import { SignupComponent } from './components/signup/signup.component';

const routes: Routes = [
                        { path: 'signup', component: SignupComponent },
                        { path: 'login', component: LoginComponent },
                        { path: 'home', component: HomeComponent,
                          children: [{ path: 'checkout', component: CheckoutComponent }] },
                        { path: '', redirectTo: 'home', pathMatch: 'full' },
                        { path: 'order', component: OrderComponent },
                        { path: 'form', component: FormComponent },
                        {path: 'cart', component: CheckoutComponent }
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
