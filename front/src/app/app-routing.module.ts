import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { autorizacionGuard } from "./guards/autorizacion.guard";
// import { CartComponent } from "./components/cart/cart.component";
import { CheckoutComponent } from './components/checkout/checkout.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { DetalleCoreComponent } from './components/detalle-core/detalle-core.component';
import { ContactoComponent } from './components/contacto/contacto.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'usuario', component: RegistroComponent },
    { path: 'inicio-sesion', component: LoginComponent },
    // { path : 'carrito', component: CartComponent},
    { path: 'checkout', component: CheckoutComponent },
    { path: '404', component: Pagina404Component },
    { path: '**', redirectTo: '404', pathMatch: 'full' },
    { path: 'productos', component: DetalleCoreComponent },
    { path: 'producto/:id', component: DetalleCoreComponent }
];

@NgModule({

    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

