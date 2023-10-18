import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';
import { autorizacionGuard } from "./guards/autorizacion.guard";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CartComponent } from "./components/cart/cart.component";

const routes: Routes = [
  { path : 'usuario', component: RegistroComponent},
  { path : 'inicio-sesion', component: LoginComponent},
  { path : 'carrito', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
