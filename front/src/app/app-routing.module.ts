import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { autorizacionGuard } from "./guards/autorizacion.guard";
import { CartComponent } from "./components/cart/cart.component";
import { CheckoutComponent } from './components/checkout/checkout.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';

const routes: Routes = [
  { path : 'usuario', component: RegistroComponent},
  { path : 'inicio-sesion', component: LoginComponent},
  { path : 'carrito', component: CartComponent},
  { path : 'checkout', component: CheckoutComponent},
  { path : '404', component: Pagina404Component},
  { path : '**', redirectTo : '404', pathMatch : 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
